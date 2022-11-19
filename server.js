const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');

dotenv.config({path:'config.env'})

const PORT = process.env.PORT||8080

const app = express();

//log requests i guess
app.use(morgan('dev'))

//mongodb connection
connectDB();

//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine', 'ejs');

//load assests
app.use('/css', express.static(path.resolve(__dirname,"assests/css")));
app.use('/img', express.static(path.resolve(__dirname,"assests/img")));
app.use('/js', express.static(path.resolve(__dirname,"assests/js")));

app.use('/icons', express.static(path.resolve(__dirname,"assests/chuka/icons")));
app.use('/scss', express.static(path.resolve(__dirname,"assests/chuka/scss")));
app.use('/vendor', express.static(path.resolve(__dirname,"assests/chuka/vendor")));

app.use('/', require('./server/routes/router')) 
// app.use('/', require('./server/routes/router')) 


// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, 'views/index.html'))
// });

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to AOA application." });
// });

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});




