exports.up = async (knex, Promise) => {
    return knex.schema.createTable("posts", table => {
        table
            .increments("id")
            .notNullable()
            .primary();
        table
            .string("post")
            .notNullable()
        table
            .timestamp('created_at')
            .notNullable()
            .defaultTo(knex.fn.now())
    });
};

exports.down = async (knex, Promise) => {
    return knex.schema.dropTableIfExists("posts");
};