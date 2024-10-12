// pages/api/store-token.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { token } = req.body;
    const client = new MongoClient(uri);
    
    try {
      await client.connect();
      const db = client.db('oauth-db');
      const collection = db.collection('tokens');

      await collection.insertOne({ token, createdAt: new Date() });
      
      res.status(200).json({ message: 'Token stored successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to store token' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
