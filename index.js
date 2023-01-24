const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();

const corsOptions = {
    origin: "http://localhost:5001"
};

app.use(cors(corsOptions));

app.use(express.json());

const PORT = process.env.PORT || 5000;
const routes = require('./routes/expense.routes.js');

app.use(routes);
app.listen(PORT, console.log(`Server running on ${process.env.PORT}`))
