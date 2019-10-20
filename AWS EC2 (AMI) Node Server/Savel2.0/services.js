const db = require('./db.js')

let ser = {
    dbquery : (query,callback)=>{
        db.query(query,(err,result)=>{
            if(err){
                throw err;
            }
            callback(result);
        })
    },

	dbinsert : (query,arr,callback)=>{
        db.query(query,arr,(err,result)=>{
            if(err){
                throw err;
            }
            callback(result);
        })
    }
}

module.exports = ser;
