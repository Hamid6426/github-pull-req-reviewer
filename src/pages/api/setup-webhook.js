// pages/api/setup-webhook.js
import axios from 'axios';

const createWebhook = async ({ token, repoOwner, repoName }) => {
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

    return response.data;
  } catch (error) {
    console.error('Error setting up webhook:', error.response.data);
    throw error;
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { token, repoOwner, repoName } = req.body;

  try {
    const data = await createWebhook({ token, repoOwner, repoName });
    res.status(200).json({ message: 'Webhook created successfully', data });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create webhook', error: error.response.data });
  }
}