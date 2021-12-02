const express=require('express')
const ejs=require('ejs')
const app=express()
const data=require("./data")
const PORT=process.env.PORT || 3000;

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index',{data:data,head:"Home"});
})

app.get('/:posts',function(req,res){
    for(var i=0;i<data.length;i++){
        if(data[i].mentor==req.params.posts){
            res.render('post',{content:data[i],head:"Projects"});
        }
        if(i==data.length){
            res.redirect('/');
        }
    }
})

app.listen(PORT,()=>{
    console.log('server started at port 3000')
})