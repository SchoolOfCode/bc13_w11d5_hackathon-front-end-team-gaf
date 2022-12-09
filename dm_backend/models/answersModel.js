import { pool } from "../db/index.js";

export async function getRandomAnswer() {
  const answer = await pool.query('SELECT answer FROM answers ORDER BY RANDOM() LIMIT 1;');
  console.log("This is the answer", answer);
  return answer;
};