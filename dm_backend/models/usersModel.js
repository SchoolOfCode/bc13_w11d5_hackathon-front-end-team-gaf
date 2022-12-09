const { query } = require("../db/db.js");

// Get a random answer from the database

async function getRandomAnswer() {
  const result = await query(
    'INSERT INTO users (learning_style, mb_personality, religion, cultural_background, gender_id, sexuality, hobby) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [user.learning_style, user.mb_personality, user.religion, user.cultural_background, user.gender_id, user.sexuality, user.hobby]);
    const newUser = result.rows[0];
    return newUser;
  }
  module.exports = {
    getRandomAnswer
  };
