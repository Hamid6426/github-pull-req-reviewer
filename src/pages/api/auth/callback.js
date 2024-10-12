// pages/api/auth/callback.js
import axios from 'axios';

export default async function handler(req, res) {
  const { code } = req.query;

  try {
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }, {
      headers: { Accept: 'application/json' },
    });

    const accessToken = response.data.access_token;

    // Store the token in localStorage via the client-side or store in MongoDB
    res.redirect(`/dashboard?token=${accessToken}`);
  } catch (error) {
    console.error('OAuth Error:', error);
    res.status(500).send('Authentication failed');
  }
}
