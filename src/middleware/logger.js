'use strict'

function logger (req,res,next){
console.log('Request : ',req.method,req.path)
next();
}

module.exports=logger