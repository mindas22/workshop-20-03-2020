const jsonwebtoken = require('jsonwebtoken') 
const decode = (value) => {
    try {
        return jsonwebtoken.verify(value, secret);
    } catch (error) {
        return null;
    }
}

const authenticate = async (req, res) => {
    const token = req.headers['x-token'];
    if (!token) {
        return;
    }

    let tokenContent = decode(token);

    let user = null;

    if(!tokenContent) {
       return ;
    }
    return user;
}
module.exports={authenticate}