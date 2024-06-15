const express = require('express')
const cors = require('cors');
const connectDB = require('./DbConnection/DbConfig');
const todoRoutes = require('./Routes/todoRoutes')
require('dotenv').config();

const port = process.env.PORT || 8000;
const app = express()

// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('hi')
})

app.use('/api', todoRoutes)

// connect to db
connectDB();

app.listen(port, () => {
    console.log(`listening on ${port}`);
})