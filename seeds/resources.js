
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name:"Backend Developer", description: "User that will create backend resource", project_id: 1},
        {id: 2, name:"Computer", description: "Used by users to write code", project_id: 1 },
        {id: 3, name: "Frontend Developer", description: "User that will connect the frontend to backend", project_id: 3},
        {id: 4, name: "UI Developer", description: "User that designs the frontend", project_id: 2},
      ]);
    });
}
