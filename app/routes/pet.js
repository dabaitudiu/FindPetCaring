var express = require('express');
var router = express.Router();

const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'lyp82nLF',
  port: 5432,
})

webpage_title = "Pet Carer Search Engine"

router.get('/', function(req, res, next) {
  res.render('pet', { title: webpage_title });
});

data = 0

// POST
router.post('/', function(req, res, next) {
	// Retrieve Information
    var gender  = req.body.sex;
    var species = req.body.species;
    var house = req.body.house;
	
	// Construct Specific SQL Query
    var sql_query = "SELECT * from pet_infos_1000 WHERE species='"+species+"'" + "and gender='"+gender+"'" + "and house_type='"+house+"'";
    pool.query(sql_query, (err, data) => {
		res.render('pet_database', { title: webpage_title, data: data.rows });
	});
});

module.exports = router;
