import headers from "../headers.js";
import getWordsFromDB from "../utils/getWordsFromDB.js";

export default async (response) => {
  try {
    const words = await getWordsFromDB();

    return response.end(
      JSON.stringify({
        success: true,
        message: "Fetched all the words from the database successfully",
        words: await words,
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
