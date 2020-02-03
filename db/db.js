const pgp = require('pg-promise')()
const db = pgp('postgres://localhost/booke')

module.exports = db
