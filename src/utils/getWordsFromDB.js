import db from "../db.js";

export default async () => {
  const words = await db.wordsCollection.find();
  return await words.toArray();
};
