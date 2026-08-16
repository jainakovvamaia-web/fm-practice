import {
  deletetTeamController,
  getClubStatisticsController,
  getLargeTeamsController,
  getOneTeamController,
  getTeamsController,
  postTeamController,
  updateTeamController,
} from "../controllers/teams.controller.js";

export const teamRouter = (req, res) => {
  if (req.method === "POST" && req.url === "/team") {
    return postTeamController(req, res);
  } else if (req.method === "GET" && req.url === "/team") {
    return getTeamsController(req, res);
  } else if (req.method === "GET" && req.url === "/team/large-squads") {
    return getLargeTeamsController(req, res);
  }else if (req.method === "GET" && req.url === "/team/club-statistics") {
    return getClubStatisticsController(req, res);
  }
   else if (req.method === "GET" && req.url.startsWith("/team/")) {
    return getOneTeamController(req, res);
  } else if (req.method === "DELETE" && req.url.startsWith("/team/")) {
    return deletetTeamController(req, res);
  } else if (req.method === "PATCH" && req.url.startsWith("/team/")) {
    return updateTeamController(req, res);
  }
};
