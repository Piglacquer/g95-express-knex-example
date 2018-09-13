
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {first: 'rowValue1', last: 'hello', age: 7},
        {first: 'rowValue3', last: 'hello1', age: 1000},
        {first: 'rowValue2', last: 'hello4', age: 444}
      ]);
    });
};
