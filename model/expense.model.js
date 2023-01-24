const sql = require('../config/db.config');


const Expenses = function(expense) {
    this.category = expense.category;
    this.item = expense.item;
    this.amount = expense.amount;
    this.date = expense.date;
    this.medium = expense.medium;
    this.created_at = expense.created_at;
    this.updated_at = expense.updated_at;
};

Expenses.create = (newExpense, result) => {
    sql.query("INSERT INTO expenses SET ?" , newExpense, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created expense: ", {id: res.insertId, ...newExpense });
        result(null, {id: res.insertId, ...newExpense });
    });
};

module.exports = Expenses;