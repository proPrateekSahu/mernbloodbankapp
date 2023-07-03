const express = require('express'); //imported express
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const { connectDB } = require('./config/db');
const path = require('path');

//dotenv config
dotenv.config();
//since .env is present in root folder therefore no need to provide path, otherwise dotenv.config({path: './config/.env'}).......if .env is present in config folder

//mongodb connection
connectDB();

//rest object created to create server
const app = express();
//now every functionality of express is now stored in variable called app

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:8080', 'https://mernbloodbankapp.onrender.com/'],
  })
);
app.use(morgan('dev'));

//routes
//1 test route
// app.get('/',(req,res)=>{
//     res.status(200).json({
//         message: "Welcome to Blood Bank App",//200 ok request
// })})
//endpoint: http://localhost:8080
app.use('/api/v1/test', require('./routes/testRoutes'));
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/inventory', require('./routes/inventoryRoutes'));
app.use('/api/v1/analytics', require('./routes/analyticsRoutes'));
app.use('/api/v1/admin', require('./routes/adminRoutes'));

//STATIC FOLDER
app.use(express.static(path.join(__dirname, './client/build')));

//STATIC ROUTES
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

//port
// const PORT = 8080
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  // console.log(
  //   `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
  //     .bgBlue.white
  // );
});
