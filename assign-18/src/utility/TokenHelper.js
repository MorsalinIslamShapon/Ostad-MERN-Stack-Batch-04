const jwt = require('jsonwebtoken');

exports.EncodeToken = (email , user_id) =>{
    let kEY = '123-ABC-XYZ'
    let  EXPIRE = {expiresIn:'24h'};
    let  PAYLOAD = {email:email , user_id:user_id} 
    return jwt.sign(PAYLOAD , kEY , EXPIRE )

}

exports.DecodeToken = (token) =>{
    try{
        let kEY = '123-ABC-XYZ'
        return jwt.verify(token , kEY)
    }
    catch(err){
        return null 
    }
} 