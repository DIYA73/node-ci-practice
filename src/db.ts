import dotenv from "dotenv";
import path from "path";

// Force dotenv to load .env from backend root
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import { MongoClient, Db } from "mongodb";

let db: Db;

export async function connectDB(): Promise<Db> {
  if (db) return db;

  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI not defined in .env");


  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB!");

  const mockUsers = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Sara' }
];

  db = client.db();
  return db;
}
