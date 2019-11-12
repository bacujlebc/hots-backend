const Chance = require('chance');
const chance = new Chance();

const board_basis = ['RO', 'BB', 'HB', 'FB', 'AI']

function getRandomElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

exports.seed = async function (knex, Promise) {
  try {
    let tours = []
    for (let i = 0; i < 100; i++) {
      tours.push({
        id: chance.guid(),
        tour_country: chance.country({ full: true }),
        hotel_name: chance.company(),
        hotel_star: chance.integer({ min: 1, max: 5 }),
        // board_basis: chance.shuffle(['RO', 'BB', 'HB', 'FB', 'AI']),
        board_basis: getRandomElement(board_basis),
        price: chance.floating({ min: 120.00, max: 4400.99 }),
        nights_number: chance.integer({ min: 1, max: 13 }),
        tour_starts: chance.date({year: 2020 }),
        tour_ends: chance.date({year: 2020 }),
        departure: chance.city(),
      })
    }

    console.log('[SEEDING] starting `tours` seeding')
    await knex('tours').del()
      .then(function () {
        return knex('tours').insert(tours);
      });

  } catch (e) {
    console.error(e)

    throw e;
  }
};
