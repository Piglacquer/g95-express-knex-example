
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', (student) => {
        student.increments('id')
        student.string('first')
        student.string('last')
        student.integer('age')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students')
};
