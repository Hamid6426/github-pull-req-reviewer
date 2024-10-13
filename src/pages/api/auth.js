// pages/api/auth.js
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default async function handler(req, res) {
  const state = uuidv4(); // Random string to prevent CSRF attacks
  const redirectUri = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&state=${state}&scope=repo`;
  res.redirect(redirectUri);
}
