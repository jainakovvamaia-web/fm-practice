import { pool } from "../plugins/pg.js";

export const postPlayerService = async (body) => {
  const result = await pool.query(
    `
        insert into players
        (image, full_name, age, position, salary, team_id)
        values($1,$2,$3,$4,$5,$6)
        returning *
        `,
    [
      body.image,
      body.full_name,
      body.age,
      body.position,
      body.salary,
      body.team_id,
    ],
  );
  return result.rows[0];
};
export const getPlayersService = async () => {
  const result = await pool.query(
    `
        select * from players
        `,
  );
  return result.rows;
};

export const getPlayerswithTeamService = async () => {
  const result = await pool.query(
    `
        select players.age, players.full_name, players.image, players.id, teams.club_name, teams.country, players.salary, players.position from players
        join teams on teams.id = players.team_id
`,
    [],
  );
  return result.rows;
};

export const getFreeAgentsService = async () => {
  const result = await pool.query(
    `
  select players.id,  players.image, players.age, players.full_name, players.position, players.salary from players
  left join teams on teams.id = players.team_id
  where players.team_id is null;
`,
    [],
  );
  return result.rows;
};

export const getOnePlayerService = async (id) => {
  const result = await pool.query(
    `
        select * from players
        where id = $1
        `,
    [id],
  );

  if (!result.rows[0]) {
    throw new Error("ID not found");
  }

  return result.rows[0];
};
export const deletePlayerService = async (id) => {
  const result = await pool.query(
    `
        delete from players
        where id = $1
        returning *
        `,
    [id],
  );

  if (!result.rows[0]) {
    throw new Error("ID not found");
  }

  return result.rows[0];
};
export const updatePlayerService = async (id, newBody) => {
  const result = await pool.query(
    `
        update players 
        set image=$1, full_name=$2, age=$3, position=$4, salary=$5, team_id=$6
        where id = $7
        returning *
        `,
    [
      newBody.image,
      newBody.full_name,
      newBody.age,
      newBody.position,
      newBody.salary,
      newBody.team_id,
      id,
    ],
  );

  if (!result.rows[0]) {
    throw new Error("ID not found");
  }

  return result.rows[0];
};
export const getHighestSalariesService = async () => {
  const result = await pool.query(
    `
     select players.full_name, players.salary, teams.club_name, players.image from players
     join teams on teams.id = players.team_id
     order by players.salary desc
     limit 5
        `,
    [],
  );

  return result.rows;
};
export const getYoungPlayersService = async () => {
  const result = await pool.query(
    `
    select players.age, players.full_name, teams.club_name, players.position, players.image from players
    join teams on teams.id = players.team_id
    where players.age <= 23
    order by players.age asc
        `,
    [],
  );

  return result.rows;
};
