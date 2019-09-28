const Chance = require('chance');
const chance = new Chance();

exports.seed = async function (knex, Promise) {
  try {
    let posts = []
    for (let i = 0; i < 1000; i++) {
      posts.push({
        post: chance.paragraph({ sentences: 1 }),
        created_at: chance.date(),
      })
    }

    console.log('[SEEDING] starting `posts` seeding')
    await knex('posts').del()
      .then(function () {
        return knex('posts').insert(posts);
      });

  } catch (e) {
    console.error(e)

    throw e;
  }
};
