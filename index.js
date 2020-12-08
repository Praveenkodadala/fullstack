const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;
const connectDb = require('./connection');
const dotenv = require('dotenv').config();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));



// const result = dotenv.config({silent: true})
 
// if (result.error) {
//   throw result.error
// }
 
// console.log("dbportresult", result.parsed)





server.get('/', (req, res)=>{
    res.send('hello world')
})


server.use('/api', require('./routes'));

server.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
})