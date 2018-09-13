
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {first: 'rowValue1', last: 'hello'},
        {first: 'rowValue3', last: 'hello1'},
        {first: 'rowValue2', last: 'hello4'},
      ]);
    });
};
