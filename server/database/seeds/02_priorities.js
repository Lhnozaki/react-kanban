exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("priorities")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("priorities").insert([
        { name: "high", rank: 1 },
        { name: "Medium", rank: 2 },
        { name: "Low", rank: 3 },
        { name: "Block", rank: 4 }
      ]);
    });
};
