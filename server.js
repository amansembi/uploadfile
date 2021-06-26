const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const connectDB = require('./config/db')
const path = require('path')
app.use(express.static('public'));

// 
connectDB();
app.use(express.json());
//Template engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine','ejs');

//routes
app.use('/api/files', require('./routes/files'))
app.use('/files', require('./routes/show'))
app.use('/files/download/', require('./routes/download'))



app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})