/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 // TO DO ADD TITLE COLUMN 
exports.up = async function(knex) {
	await knex.schema.createTable("phonesdb", (table) => {
		table.increments("id");
		table.text("username").notNull().unique();
        table.text("releaseDate").notNull();
        table.integer("price").notNull();
        table.text("os").notNull();
        table.text("screenres").notNull();
        table.integer("cam1MP").notNull();
        table.integer("cam1vidP").notNull();
        table.integer("cam2MP").notNull();
        table.integer("cam2vidP").notNull();
        table.integer("storageGB").notNull();
        table.integer("fans").notNull();
        table.integer("ramGB").notNull();
        table.integer("batterymAH").notNull();
        table.boolean("status").notNull();
        table.boolean("memoryslot").notNull();
        table.boolean("wirelesscharging").notNull().defaultTo(false); // Example default value: false
        table.boolean("fingerprint").notNull().defaultTo(false); // Example default value: false
        table.boolean("faceunlock").notNull().defaultTo(false); // Example default value: false
        table.text("usb").notNull();
        table.boolean("radio").notNull().defaultTo(false); // Example default value: false
        table.boolean("nfc").notNull().defaultTo(false);
	})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("phonesdb")
}