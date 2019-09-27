const Chance = require('chance');
const chance = new Chance();

exports.seed = async function (knex, Promise) {
  try {
    let users = []
    for (let i = 0; i < 1000; i++) {
      users.push({
        id: chance.guid(),
        age: chance.integer({ min: 15, max: 60 }),
        name: chance.name(),
      })
    }

    console.log('[SEEDING] starting `users` seeding')
    await knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert(users);
      });

  } catch (e) {
    console.error(e)

    throw e;
  }
};
