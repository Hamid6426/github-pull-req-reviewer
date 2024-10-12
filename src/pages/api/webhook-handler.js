// pages/api/webhook-handler.js
import axios from "axios";

export default async function handler(req, res) {
  console.log('Received event:', req.headers['x-github-event']); // Log the GitHub event
  console.log('Received body:', req.body); // Log the full body of the request
  const event = req.headers["x-github-event"];

  if (event === "pull_request" && req.body.action === "opened") {
    const pullRequestData = req.body.pull_request;
    const prTitle = pullRequestData.title;
    const prBody = pullRequestData.body;

    console.log("PR Title:", prTitle);
    console.log("PR Body:", prBody);

    // Log the PR data or process it further
    console.log("Pull Request Data:", pullRequestData);

    // TODO: Here, you can trigger the AI review process
    // Send the PR content (title and body) to OpenAI for review
    // try {
    //   const openAIResponse = await axios.post(
    //     "https://api.openai.com/v1/completions",
    //     {
    //       model: "text-davinci-003", // You can replace this with a different OpenAI model e.g. gpt-3.5-turbo
    //       prompt: `Review the following GitHub pull request: Title: ${prTitle}, Body: ${prBody}`,
    //       max_tokens: 150,
    //       temperature: 0.7,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    try {
      const openAIResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',  // or the model of your choice
        messages: [
          {
            role: 'user',
            content: `Review the following GitHub pull request: Title: "${prTitle}", Body: "${prBody}"`
          }
        ],
        max_tokens: 150,
        temperature: 0.7,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      const reviewComment = openAIResponse.data.choices[0].text.trim();

      // Post the review comment on the pull request using GitHub API
      const commentResponse = await axios.post(
        `${pullRequestData.issue_url}/comments`,
        { body: reviewComment },
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
            "Content-Type"  : "application/json",
          },
        }
      );
      console.log('Review Comment posted:', commentResponse.data);
      res
        .status(200)
        .json({
          message: "PR review posted successfully",
          comment: commentResponse.data,
        });
    } catch (error) {
      console.error("Error processing the PR or posting comment:", error);
      res
        .status(500)
        .json({
          error: error.response.data,
        });
    }
  } else {
    console.log('Event not supported:', event, 'Body:', req.body); // Log unsupported events
    res.status(400).json({ message: 'Unsupported event or action' });
  }
}