 // setting  up constant and  express
 
const express = require('express');
const path = require('path');
const port = 8005;
const app = express();
const db = require('./config/mongoose');
const contact  = require('./model/contact');



// using middleware  and setting other express  file

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views')); // joining  default directory to ejs  directory
app.use(express.urlencoded());
app.use(express.static('assets'))

 var contactList=[];

 //exceesing express and  dir files

app.get('/',(req,res) =>{
    return res.render('home',{
        title:'conatcts',
        conatct_list:contactList
    })
})

// posting  file from forms on browser
app.post('/create-contact',  (req, res) =>{
    contact.create({
        name: req.body.name,
        phone: req.body.phone

    }).then((ne) => {
        console.log('*****', ne);
        return res.redirect('back');
    }).catch((err) => {
        console.log(err);
    })
})

// deleting contact

app.get('/delete-contact', (req,res) =>{
    let phone=req.query.phone;
    let conatctIndex=contactList.findIndex(contact=> contact.phone==phone);

    if(conatctIndex != -1){
        contactList.splice(conatctIndex,1);
    }
    return res.redirect('back');
})

// running server

app.listen(port,(err) =>{

    if(err){
        console.log('error',err);
    }
    console.log('hi:',port);
})