exports.up = async (knex, Promise) => {
    return knex.schema.createTable("users", table => {
        table
            .string("id")
            .notNullable()
            .primary();
        table
            .integer("age")
            .notNullable()
        table
            .string("name")
            .notNullable()
    });
};

exports.down = async (knex, Promise) => {
    return knex.schema.dropTableIfExists("users");
};