// pages/api/store-token.js
import pg from 'pg';

const { Pool } = pg;

// Use the environment variable you just set
const pool = new Pool({
  connectionString: process.env.POSTGRES_DATABASE, // Updated connection string
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { token } = req.body;

    try {
      // Insert the token into the database
      const query = 'INSERT INTO tokens(token, created_at) VALUES($1, $2)';
      const values = [token, new Date()];
      await pool.query(query, values);

      res.status(200).json({ message: 'Token stored successfully' });
    } catch (error) {
      console.error('Error storing token:', error);
      res.status(500).json({ error: 'Failed to store token' });
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
