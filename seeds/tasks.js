
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: "Develop a data model", notes:"", completed: 1, project_id: 1} ,
        {id: 2, description: "Create Tables in VSC", notes:"", completed: 1, project_id: 1}, 
        {id: 3, description: "Enter seed data for tables", notes:"", completed: 1, project_id: 1} ,
        {id: 4, description: "Create mock model of web app", notes:"", completed: 0, project_id: 2}, 
        {id: 5, description: "Write code to match mock model", notes:"", completed: 0, project_id: 2}, 
        {id: 6, description: "style to match mock model", notes:"", completed: 0, project_id: 2}, 
        {id: 7, description: "Write API calls", notes:"", completed: 0, project_id: 3}, 
        {id: 8, description: "Test API calls", notes:"", completed: 0, project_id: 3}, 
        {id: 9, description: "Create components to display data", notes:"", completed: 0, project_id: 3}, 
        {id: 10, description: "Upload to github", notes:"", completed: 0, project_id: 4}, 
        {id: 11, description: "Deploy backend using heroku", notes:"", completed: 0, project_id: 4}, 
        {id: 12, description: "Deploy frontend using netlify or zeit", notes:"", completed: 0, project_id: 4} 
      ]);
    });
};
