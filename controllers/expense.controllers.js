const Expenses = require('../model/expense.model');

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Cannot be empty"
        });
    }
//get datetime
//getDateTime();
    //create expense
    const expenses = new Expenses({
        category: req.body.category,
        item: req.body.item,
        amount: req.body.amount,
        date: req.body.date,
        medium: req.body.medium,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at
    });

    //save
    Expenses.create(expenses, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Error"
            });
        else res.send(data);
    });
};