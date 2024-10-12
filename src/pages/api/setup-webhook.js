// pages/api/setup-webhook.js
import axios from 'axios';

export default async function handler(req, res) {
  const { token, repoOwner, repoName } = req.body;

  try {
    const response = await axios.post(
      `https://api.github.com/repos/${repoOwner}/${repoName}/hooks`,
      {
        name: 'web',
        active: true,
        events: ['pull_request'],
        config: {
          url: 'https://next-pull-request-reviewer.vercel.app/api/webhook-handler',
          content_type: 'json',
        },
      },
      {
        headers: {
          Authorization: `token ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json({ message: 'Webhook created successfully', data: response.data });
  } catch (error) {
    console.error('Error setting up webhook:', error.response.data);
    res.status(500).json({ message: 'Failed to create webhook', error: error.response.data });
  }
}
