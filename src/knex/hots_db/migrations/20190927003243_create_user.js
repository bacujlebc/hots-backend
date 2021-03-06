exports.up = async (knex, Promise) => {
    return knex.schema.createTable("users", table => {
        table
            .increments("id")
            .notNullable()
            .primary();
        table
            .string("username")
            .notNullable()
        table
            .string("password")
            .notNullable()
        table
            .string("email")
            .notNullable()
    });
};

exports.down = async (knex, Promise) => {
    return knex.schema.dropTableIfExists("users");
};