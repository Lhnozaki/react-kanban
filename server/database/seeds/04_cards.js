exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cards")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cards").insert([
        {
          title: "Test Card 1",
          body: "This card should be in the QUEUE",
          priority_id: 1,
          status_id: 1,
          created_by: 1,
          assigned_to: 2
        },
        {
          title: "Test Card 2",
          body: "This card should be in the PROGRESS",
          priority_id: 2,
          status_id: 2,
          created_by: 1,
          assigned_to: 2
        },
        {
          title: "Test Card 3",
          body: "This card should be in the COMPLETED",
          priority_id: 3,
          status_id: 3,
          created_by: 1,
          assigned_to: 2
        }
      ]);
    });
};
