const express=require('express')
const ejs=require('ejs')
const app=express()
const data=require("./data")

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index',{data:data});
})

app.get('/:posts',function(req,res){
    for(var i=0;i<data.length;i++){
        if(data[i].mentor==req.params.posts){
            res.render('post',{content:data[i]});
        }
        if(i==data.length){
            res.redirect('/');
        }
    }
})

app.listen(3000,()=>{
    console.log('server started at port 3000')
})