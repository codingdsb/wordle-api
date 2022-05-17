import getAllWords from "./controllers/getAllWords.js";
import getRandomWord from "./controllers/getRandomWord.js";
import headers from "./headers.js";

export default async (request, response) => {
  if (request.url === "/all") {
    await getAllWords(response);
  } else if (request.url === "/random") {
    await getRandomWord(response);
  } else {
    response.writeHead(404, headers);
    return response.end(
      JSON.stringify({
        success: false,
        message: "Route not found",
        availableRoutes: ["/all", "/random"],
      })
    );
  }
};
