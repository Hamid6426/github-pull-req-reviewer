import axios from "axios";

export default async function handler(req, res) {
  const event = req.headers["x-github-event"];
  console.log('Received event:', event); // Log the GitHub event
  console.log('Received body:', req.body); // Log the full body of the request

  try {
    if (event === "ping") {
      console.log('Ping event received:', req.body.zen);
      return res.status(200).json({ message: 'Ping event handled successfully' });
    }

    if (event === "pull_request" && req.body.action === "opened") {
      const pullRequestData = req.body.pull_request;
      const prTitle = pullRequestData.title;
      const prBody = pullRequestData.body;

      // Fetch the code changes (diff)
      const diffUrl = pullRequestData.diff_url; // URL to get the diff
      const diffResponse = await axios.get(diffUrl); // Fetch the diff
      const codeDiff = diffResponse.data; // This may depend on how the diff is structured

      console.log("PR Title:", prTitle);
      console.log("PR Body:", prBody);
      console.log("Code Diff:", codeDiff);

      // Send the PR title, body, and code diff to OpenAI for review
      const openAIResponse = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Check for any issues in this PR: Title: "${prTitle}", Body: "${prBody}", Code: "${codeDiff}". Keep the response short and mention only any issues you find.`
            }
          ],
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const reviewComment = openAIResponse.data.choices[0].message.content.trim();

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
      console.log('Review Comment posted:', commentResponse.data);

      return res.status(200).json({
        message: "PR review posted successfully",
        comment: commentResponse.data,
      });
    }

    console.log('Event not supported:', event, 'Body:', req.body);
    return res.status(400).json({ message: 'Unsupported event or action' });
  } catch (error) {
    console.error("Error processing the PR or posting comment:", error);
    return res.status(500).json({
      error: error.response ? error.response.data : error.message,
    });
  }
}