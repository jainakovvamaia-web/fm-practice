import { pool } from "../plugins/pg.js";

export const postTeamService = async (body) => {
  const result = await pool.query(
    `
        insert into teams
        (club_name, country, stadium, founded_year)
        values($1,$2,$3,$4)
        returning *
        `,
    [body.club_name, body.country, body.stadium, body.founded_year],
  );
  return result.rows[0];
};
export const getTeamsService = async () => {
  const result = await pool.query(
    `
        select * from teams
        `,
  );
  return result.rows;
};
export const getOneTeamService = async (id) => {
  const result = await pool.query(
    `
        select * from teams
        where id = $1
        `,
    [id],
  );

  if (!result.rows[0]) {
    throw new Error("ID not found");
  }

  return result.rows[0];
};
export const deleteTeamService = async (id) => {
  const result = await pool.query(
    `
        delete from teams
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
export const updateTeamService = async (id, newBody) => {
  const result = await pool.query(
    `
        update teams 
        set club_name=$1, country=$2, stadium=$3, founded_year=$4
        where id = $5
        returning *
        `,
    [
      newBody.club_name,
      newBody.country,
      newBody.stadium,
      newBody.founded_year,
      id,
    ],
  );

  if (!result.rows[0]) {
    throw new Error("ID not found");
  }

  return result.rows[0];
};

export const getLargeTeamsService = async () => {
  const result = await pool.query(
    `
   select teams.club_name, teams.id, teams.country, sum(players.salary), count(players.*), avg(players.age) from teams
   join players on players.team_id = teams.id
   group by teams.id, teams.club_name, teams.country;
    `,
    [],
  );

  return result.rows;
};
export const getClubStatisticsService = async () => {
  const result = await pool.query(
    `
   select teams.club_name, teams.country, teams.stadium, count(players.id) as count_players, coalesce(sum(players.salary), 0) as total_salary, coalesce(avg(players.salary), 0) as avg_salary from teams
   left join players on teams.id = players.team_id
   group by teams.id
    `,
    [],
  );

  return result.rows;
};
