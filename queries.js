const dbConnection = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(dbConnection)

module.exports = {
    getAll(){
       return knex.select().from('students')
    },
    getById(id){
        return knex.select('*').from('students').where('id', id)
    },
    getByIdTwo(id){
        return knex('students').where('id', id)
    },
    createStudent(newStudent){
        return knex('students').insert(newStudent, ['id', 'first', 'last'])
    }
}