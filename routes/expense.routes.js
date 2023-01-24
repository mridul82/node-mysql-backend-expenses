
const expenses = require('../controllers/expense.controllers.js');

const router = require('express').Router();

    //create a new expense
router.post('/expenses', expenses.create);

// get all expenses

router.get("/expenses", expenses.findAll);

module.exports = router;
