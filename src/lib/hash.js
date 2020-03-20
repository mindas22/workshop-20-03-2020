const crypto = require('crypto');
const hasher = crypto.createHash;
const hash=(text)=>{
    return hasher('sha256').update(text).digest('hex');
}
const hashCompare=(text,hashedText)=>{
    return hash(text)===hashedText;
}
module.exports={
    hash,
    hashCompare
};