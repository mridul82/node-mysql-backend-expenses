const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: '',
    database: 'expense_tracker'
    
});


connection.connect(
    error => {
        if (error) throw error;
        console.log("Successfully connected to expense database")
    }
);

module.exports = connection;