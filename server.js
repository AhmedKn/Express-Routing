const express = require('express')

var d = new Date();
    var h = d.getHours();
    console.log(h)
const app = express()

app.use(date =(req , res , next) =>{
    var d = new Date();
    var h = d.getHours();
    if (h < 8 || h > 17){
        app.get('/home' ,(req , res)=>{
            res.send('<h1>Our office is not open now</h1>')
        })
        app.get('/contact' ,(req , res)=>{
            res.send('<h1>Our office is not open now</h1>')
        })
        app.get('/ourservices' ,(req , res)=>{
            res.send('<h1>Our office is not open now</h1>')
        })
        next()
        }
    else {
        app.get('/home' ,(req , res)=>{
            res.sendFile(__dirname + '/public/home.html')
        })
        app.get('/contact' , (req , res) =>{
            res.sendFile(__dirname + '/public/contact.html')
        })
        app.get('/ourservices' , (req , res)=>{
            res.sendFile(__dirname + '/public/ourservices.html')
        })
        next()
    }
})


app.listen(3010 ,(err) =>{
    if(err) console.log('server not running')
    else console.log('server running on 3010');
})
