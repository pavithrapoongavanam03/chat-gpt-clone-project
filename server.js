const express = require('express');
const morgan=require("morgan")
const cors=require("cors")
const bodyParser=require("body-parser")
const colors=require("colors")
const dotenv=require("dotenv")
const connectDB=require("./config/db")
const authRoute=require('./routes/authRoute');
const errorHandler=require('./middleware/errorMiddleware');


 
dotenv.config();
connectDB();


const app=express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(errorHandler);


const PORT=process.env.PORT || 8081;
//routes
app.use("/api/v1/auth/",authRoute);

app.listen(8081,()=>{
    console.log(`server running in ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white);

});