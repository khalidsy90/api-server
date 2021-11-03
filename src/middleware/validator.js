function validator(req, res, next){
    if(req.body.foodName){
        next();
    }else{
        next("the name should be send")
    }
}

module.exports= validator;