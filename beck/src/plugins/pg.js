import { Pool } from "pg";

export const pool = new Pool({
  database: "fm-practice",
  port: 5432,
  host: "localhost",
  user: "postgres",
  password: "1234",
});

pool.connect().then(() => {
  console.log("DB Connected");
});