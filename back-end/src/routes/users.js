const router = require('express').Router();

module.exports = db => {
  router.get('/', (req, res) => {
    db.query(
      `
      SELECT *
      FROM users;
      `
    )
    .then (data => {
      const users = data.rows;
      res.json(users);
    })
    .catch(error => {
      console.log(`You have an error in get users route: ${error}`);
    });
  });
  return router;
};