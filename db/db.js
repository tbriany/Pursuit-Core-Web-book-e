const pgp = require('pg-promise')()
const cs = process.env.DATABASE_URL
const db = pgp(cs)
// const db = pgp('postgres://localhost/booke')

module.exports = db
