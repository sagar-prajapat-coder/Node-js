module.exports = reqfilter=(req,resp,next)=>{
    if(!req.query.age){
       resp.send('Please provide age');
    }else if(req.query.age<18){
       resp.send('Please provide age grater then 18');
    }else{
       return next();
    }
 }