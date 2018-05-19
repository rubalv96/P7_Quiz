const path = require('path');

// Load ORM
const Sequelize = require('sequelize');

// Para usar SQLite data base:
// DATABASE_URL = sqlite:quiz.sqlite
//Para usar Heroku Postgres data base;
// DATABASE_URL = postgres://user:passwd@host:port/database



const url = process.env.DATABASE_URL || "sqlite:quiz.sqlite";

if(url === process.env.DATABASE_URL){
    console.log("Uso pg");
}


if(url === "sqlite:quiz.sqlite"){
    console.log("uso sqlite");
}
const sequelize = new Sequelize(url);

// Import the definition of the Quiz Table from quiz.js
sequelize.import(path.join(__dirname, 'quiz'));

//Importamos la definicion de sesiones (la tabla)
sequelize.import(path.join(__dirname,'session'));
// Create tables
sequelize.sync()
.then(() => console.log('Data Bases created successfully'))
.catch(error => {
    console.log("Error creating the data base tables:", error);
    process.exit(1);
});


module.exports = sequelize;
