import http from "http";
import { teamRouter } from "./routes/teams.route.js";
import { playerRouter } from "./routes/players.route.js";

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  console.log(`
    Method            Time                                                       URL
    ${req.method}               ${new Date()}               ${req.url}
    `);

  teamRouter(req, res);
  playerRouter(req, res);
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server is on port${port}`);
});
