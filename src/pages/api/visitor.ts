import {VercelRequest, VercelResponse} from '@vercel/node';
import { MongoClient, Db } from 'mongodb';
import url from 'url';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParse: true,
    useUnifieldTopology: true,
  })

  const { URL } = require('url');
  const dbUrl = new URL(uri);
  const dbName = dbUrl.pathname.substr(1);

  const db = client.db(dbName);
  
  cachedDb = db;

  return db;
}

export default async (request: VercelRequest, response: VercelResponse) => {
  const {visitor} = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('visitor');

  await collection.insertOne({
    visitor,
    vitedAt: new Date(),
  })
  
  return response.status(201).json({ok: true});
}