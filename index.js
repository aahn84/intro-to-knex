const knex = require('./db')

console.log('knex breakout!!')

// knex('students')
//   .then((data) => {
//     const newData = data.filter((e) => e.cohort_id === '1')
//     console.log(newData)
//   })

// knex('students').where('id', 1)
//   .then((data) => {
//     console.log(data)
//   })

// knex('students')
//   .del()
//   .where('cohort_id', '>=', '1')
//   // .where('cohort_id', 'LIKE', '%e%') // wildcard example - delete where there is an 'e' in the name
//
//   .then((data) => {
//     console.log(data)
//     return knex('students')
//   })
//   .then((data) => {
//     console.log(data)
//     // return data  // only need this if need to keep promise alive and pass along to another function
//   })


// const mossyTheDog = { 'name': 'Mossy', cohort_id: '1' }
//
// knex('students')
//   .insert(mossyTheDog)
//
//   .then((data) => {
//     console.log(data)
//     return knex('students')
//   })
//   .then((data) => {
//     console.log(data)
//   })

// knex('cohorts')
//   .insert({ name: 'Mossy', desc: 'The Best Cohort' })
//   // .del()
//   // .where('id', 4)
//
//   .then((data) => {
//     console.log(data)
//     return knex('cohorts')
//   })
//   .then((data) => {
//     console.log(data)
//   })

const newStudent = {name: 'Bob'}
const cohortName = 'Mossy'
knex('cohorts')
  .where({name: cohortName})

  .then((data) => {
    if(data.length === 1) {
      newStudent.cohort_id = data[0].id
      console.log(newStudent)
      return knex('students').insert(newStudent)
    }
    else {
      throw new Error('no such cohort')
    }
  })
  .then((data) => {
    console.log(data)
    return knex('students')
  })
  .then(console.log)
  .catch(console.log)
