
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name:"Create a database for Sprint Challenge", description: "", completed: 1, resource_id: 1, resource_id: 1 },
        {id: 2, name:"Create a user interface for Sprint Challenge", description: "", completed: 0, resource_id: 3 },
        {id: 3, name:"Connect front end to backend for Sprint Challenge", description: "", completed: 0, resource_id: 4 },
        {id: 4, name:"Deploy project", description: "", completed: 0, resource_id: 2},
      ]);
    });
};
