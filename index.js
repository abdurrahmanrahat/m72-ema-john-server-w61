const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Ema is busy with data loading!!');
})

app.listen(port, () => {
    console.log(`Ema serever is running on port: ${port}`);
})