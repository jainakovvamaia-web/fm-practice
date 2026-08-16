import { bodyParser } from "../middlewares/bodyParser.js";
import {
  deleteTeamService,
  getClubStatisticsService,
  getLargeTeamsService,
  getOneTeamService,
  getTeamsService,
  postTeamService,
  updateTeamService,
} from "../services/teams.service.js";

export const postTeamController = async (req, res) => {
  try {
    const body = await bodyParser(req);
    const result = await postTeamService(body);

    res.statusCode = 201;
    res.end(
      JSON.stringify({
        message: "Team created successfully",
        data: result,
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};
export const getTeamsController = async (req, res) => {
  try {
    const result = await getTeamsService();

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "Teams",
        data: result,
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};
export const getLargeTeamsController = async (req, res) => {
  try {
    const result = await getLargeTeamsService();

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "Large teams",
        data: result,
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};
export const getClubStatisticsController = async (req, res) => {
  try {
    const result = await getClubStatisticsService();

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "Get club statistics",
        data: result,
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};
export const getOneTeamController = async (req, res) => {
  try {
    const id = req.url.split("/")[2];
    const result = await getOneTeamService(id);

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "one Team by id",
        data: result,
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};
export const deletetTeamController = async (req, res) => {
  try {
    const id = req.url.split("/")[2];
    const result = await deleteTeamService(id);

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "Team deleted successfully",
        data: result,
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};
export const updateTeamController = async (req, res) => {
  try {
    const body = await bodyParser(req);
    const id = req.url.split("/")[2];
    const result = await updateTeamService(id, body);

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "one Team by id",
        updated: result,
        updated_at: new Date(),
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};
