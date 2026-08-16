import { bodyParser } from "../middlewares/bodyParser.js";
import {
  deletePlayerService,
  getFreeAgentsService,
  getHighestSalariesService,
  getOnePlayerService,
  getPlayersService,
  getPlayerswithTeamService,
  getYoungPlayersService,
  postPlayerService,
  updatePlayerService,
} from "../services/players.service.js";

export const postPlayerController = async (req, res) => {
  try {
    const body = await bodyParser(req);
    console.log("BODY:", body);
    const result = await postPlayerService(body);

    res.statusCode = 201;
    res.end(
      JSON.stringify({
        message: "Player created successfully",
        data: result,
      }),
    );
  } catch (error) {
    console.log("POST PLAYER ERROR:", error);

    res.statusCode = 400;
    res.end(error.message);
  }
};
export const getPlayersController = async (req, res) => {
  try {
    const result = await getPlayersService();

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "Players",
        data: result,
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};
export const getPlayerswithTeamController = async (req, res) => {
  try {
    const result = await getPlayerswithTeamService();

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "Players",
        data: result,
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};
export const getFreeAgentsController = async (req, res) => {
  try {
    const result = await getFreeAgentsService();

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "Free players",
        data: result,
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};
export const getHighestSalariesController = async (req, res) => {
  try {
    const result = await getHighestSalariesService();

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "Get Highest salaries",
        data: result,
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};
export const getYoungPlayersController = async (req, res) => {
  try {
    const result = await getYoungPlayersService();

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "Get Young players",
        data: result,
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};

export const getOnePlayerController = async (req, res) => {
  try {
    const id = req.url.split("/")[2];
    const result = await getOnePlayerService(id);

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "one Player by id",
        data: result,
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};
export const deletetPlayerController = async (req, res) => {
  try {
    const id = req.url.split("/")[2];
    const result = await deletePlayerService(id);

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "Player deleted successfully",
        data: result,
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};
export const updatePlayerController = async (req, res) => {
  try {
    const body = await bodyParser(req);
    const id = req.url.split("/")[2];
    const result = await updatePlayerService(id, body);

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "one Player by id",
        updated: result,
        updated_at: new Date(),
      }),
    );
  } catch (error) {
    res.statusCode = 400;
    res.end(error.message);
  }
};
