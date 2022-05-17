import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI);

try {
  await client.connect();
} catch {
  console.error("Couldn't connect to db");
}
const wordleDb = client.db("wordledb");
const wordsCollection = wordleDb.collection("words");
export default { client, wordleDb, wordsCollection };
