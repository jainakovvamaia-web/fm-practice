import {
  deletetPlayerController,
  getFreeAgentsController,
  getHighestSalariesController,
  getOnePlayerController,
  getPlayersController,
  getPlayerswithTeamController,
  getYoungPlayersController,
  postPlayerController,
  updatePlayerController,
} from "../controllers/players.controller.js";

export const playerRouter = (req, res) => {
  if (req.method === "POST" && req.url === "/player") {
    return postPlayerController(req, res);
  } else if (req.method === "GET" && req.url === "/player") {
    return getPlayersController(req, res);
  } else if (req.method === "GET" && req.url === "/player/with-team") {
    return getPlayerswithTeamController(req, res);
  } else if (req.method === "GET" && req.url === "/player/free-agents") {
    return getFreeAgentsController(req, res);
  } else if (req.method === "GET" && req.url === "/player/highest-salaries") {
    return getHighestSalariesController(req, res);
  } else if (req.method === "GET" && req.url === "/player/young-players") {
    return getYoungPlayersController(req, res);
  } else if (req.method === "DELETE" && req.url.startsWith("/player/")) {
  } else if (req.method === "GET" && req.url.startsWith("/player/")) {
    return getOnePlayerController(req, res);
    return deletetPlayerController(req, res);
  } else if (req.method === "PATCH" && req.url.startsWith("/player/")) {
    return updatePlayerController(req, res);
  }
};
