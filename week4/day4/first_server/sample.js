const {Pool} = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'Localhost',
    database: 'petstore',
    password: '0161',
    port: 5432
})

//pool.query('DELETE FROM movies WHERE movie_name=\'testing\'')
//pool.query('INSERT INTO movies(movie_name, age_certificate) VALUES(\'testing\',\'PG\')')

pool.query('SELECT movie_name FROM movies WHERE age_certificate IN (\'PG\')', (err,res) =>{
    if (!err){
        console.log(res.rows)
    }
    else {
        console.log(err)
    }
    pool.end
})

