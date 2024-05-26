const jwt = require ('jsonwebtoken')

async function authToken(req,res,next){
    try {
        const token = req.cookies?.token || req.header
        jwt.verify(token,'shhhhh', function(err, decoded){
            console.log(decoded.foo) //bar 
        });


        console.log("token      -",token)
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            data: [],
            error : true,
            success : false
        })
    }


}
module.exports = authToken