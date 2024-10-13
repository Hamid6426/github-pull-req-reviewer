import axios from "axios";
const { GoogleGenerativeAI } = require("@google/generative-ai");

let alreadyProcessedPRs = []; // Store PRs that have been processed

export default async function handler(req, res) {
  const event = req.headers["x-github-event"];
  console.log("Received event:", event); // Log the GitHub event
  console.log("Received body:", req.body); // Log the full body of the request

  try {
    if (event === "ping") {
      console.log("Ping event received:", req.body.zen);
      return res.status(200).json({ message: "Ping event handled successfully" });
    }

    // Handle pull_request opened event
    if (event === "pull_request" && req.body.action === "opened") {
      const pullRequestData = req.body.pull_request;
      const prNumber = pullRequestData.number;

      // Prevent multiple AI calls for the same PR
      if (alreadyProcessedPRs.includes(prNumber)) {
        return res.status(200).json({ message: "PR already processed" });
      }

      // Mark the PR as processed
      alreadyProcessedPRs.push(prNumber);

      const prTitle = pullRequestData.title;
      const prBody = pullRequestData.body;

      // Fetch the code changes (diff)
      const diffUrl = pullRequestData.diff_url; // URL to get the diff
      const diffResponse = await axios.get(diffUrl); // Fetch the diff

      // Limit the diff to the first 100 lines to avoid consuming too many tokens
      let codeDiff = diffResponse.data.split('\n').slice(0, 100).join('\n');

      console.log("PR Title:", prTitle);
      console.log("PR Body:", prBody);
      console.log("Code Diff (limited):", codeDiff);

      // Initialize Gemini AI with the API key from environment variable
      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Prepare the prompt for Gemini AI
      const prompt = `Check for any issues in this PR: Title: "${prTitle}", Body: "${prBody}", Code: "${codeDiff}". Keep the response short and mention only any issues you find.`;

      // Generate content using Gemini AI
      const result = await model.generateContent(prompt);
      const reviewComment = result.response.text(); // Get the generated comment

      // Post the review comment on the pull request using GitHub API
      const commentResponse = await axios.post(
        `${pullRequestData.issue_url}/comments`,
        { body: reviewComment },
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Review Comment posted:", commentResponse.data);

      return res.status(200).json({
        message: "PR review posted successfully",
        comment: commentResponse.data,
      });
    }

    console.log("Event not supported:", event, "Body:", req.body);
    return res.status(400).json({ message: "Unsupported event or action" });
  } catch (error) {
    // Handle rate limit error
    if (error.response && error.response.status === 429) {
      console.log("Rate limit hit, skipping further retries.");
      return res.status(429).json({ message: "Rate limit exceeded, try again later" });
    }

    console.error("Error processing the PR or posting comment:", error);
    return res.status(500).json({
      error: error.response ? error.response.data : error.message,
    });
  }
}
