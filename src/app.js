import dotenv from "dotenv";
import http from "http";
import determineController from "./determineController.js";
import headers from "./headers.js";

dotenv.config();
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, headers);
  determineController(req, res);
});

server.listen(PORT, (error) => {
  if (error) {
    console.error(`Failed to start the server.\nERROR: ${error}`);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});
