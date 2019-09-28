const Chance = require('chance');
const chance = new Chance();

exports.seed = async function (knex, Promise) {
  try {
    let users = [{
      username: 'admin',
      password: 'hots123',
      email: "hots@gmail.com",
    }]

    console.log('[SEEDING] starting `users` seeding')
    await knex('users').del()
      .then(function () {
        return knex('users').insert(users);
      });

  } catch (e) {
    console.error(e)

    throw e;
  }
};
