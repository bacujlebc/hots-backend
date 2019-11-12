
exports.up = async (knex, Promise) => {
    return knex.schema.createTable("tours", table => {
        table
            .uuid('id')
            .notNullable()
            .primary();
        table
            .string("tour_country")
            .notNullable()
        table
            .string("hotel_name")
            .notNullable()
        table
            .enu("hotel_star", [1, 2, 3, 4, 5])
            .notNullable()
        table
            .enu('board_basis', ['RO', 'BB', 'HB', 'FB', 'AI'])
            .notNullable()
        table
            .float('price')
            .notNullable()
        table
            .integer('nights_number')
            .notNullable()
        table
            .date('tour_starts')
        table
            .date('tour_ends')
        table
            .string('departure')
    });
};

exports.down = async (knex, Promise) => {
    return knex.schema.dropTableIfExists("tours");
};