const bcrypt = require("bcryptjs");
let password = bcrypt.hashSync("1111", 12);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "Lewis",
          last_name: "Nozaki",
          email: "lewis@gmail.com",
          password: password
        },
        {
          first_name: "Jon",
          last_name: "Jones",
          email: "jones@gmail.com",
          password: password
        }
      ]);
    });
};
