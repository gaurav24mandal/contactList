//require  libarary
const mongoose=require('mongoose');
require('dotenv').config();
//const url = 
//"mongodb+srv://gauravmandal:1234@newcontact.sk38f8m.mongodb.net/?retryWrites=true&w=majority"
//connect  to db 
const url = process.env.mongo_url;
mongoose
.connect(url)
.then(()=>console.log("db connected"))
.catch((error)=>console.log("error in connecting db",error));
// accuire the connection to check its succesful
