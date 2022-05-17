import db from "../db.js";
import headers from "../headers.js";
import getWordsFromDB from "../utils/getWordsFromDB.js";

export default async (response) => {
  try {
    const randomWordObject = await db.wordsCollection
      .aggregate([{ $sample: { size: 1 } }])
      .toArray(); // toArray returns an object

    // values variable format:  [{ _id: "628370a735589fbabc534cc5", word: "chief" }]
    const values = Object.values(randomWordObject);

    return response.end(
      JSON.stringify({
        success: true,
        message: "Successfully found a random word from the database",
        word: values[0],
      })
    );
  } catch (error) {
    response.writeHead(500, headers);
    return response.end(
      JSON.stringify({
        success: false,
        message: "Could not fetch words from database",
        cause: error,
      })
    );
  }
};
