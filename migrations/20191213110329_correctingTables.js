
exports.up = function(knex) {
    exports.up = function(knex) {
      return knex.schema.createTable('resources', tbl => {
          tbl.increments();
          tbl.string('name')
          .notNullable()
          .unique();
      })
      .createTable('tasks', tbl => {
          tbl.increments();
          tbl.string('description')
          .notNullable();
          tbl.string('notes');
          tbl.boolean('completed')
          .defaultTo(false)
          .notNullable();
          tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      })
      .createTable('projects', tbl=> {
          tbl.increments();
          tbl.string('name')
          .notNullable();
          tbl.string('description');
          tbl.boolean('completed')
          .defaultTo(false)
          .notNullable();
          tbl.integer('task_id')
          .unsigned()
          .references('id')
          .inTable('tasks')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
          tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
    
      })
    };
    
    exports.down = function(knex) {
      return knex.schema.dropTableIfExists('projects')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
    };
    
  
};


