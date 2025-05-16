const exp = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const app = exp();

app.use(cors())

const connect = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"webapp"
})

app.use(exp.json())

app.post('/register',(req,res)=>{
    const {username,email,password} = req.body;
    const que = "insert into usercred (name,email,password) values (?,?,?)"
    console.log(username,email,password);
    connect.query(que,[username,email,password],(err,result)=>{
        if(err){

            console.log(err)
            return res.send({error:err})
        }
        else{
            return res.send({msg:"Data are Stored"})
        }
    })
})

app.post("/login",(req,res)=>{
    const {username,password} = req.body;
    const que = "select name,password from usercred where email=?";
    connect.query(que,[username],(err,result)=>{
        if(err)
            return res.send({msg:err})
        if(result[0].length===0){
            return res.send({msg:"Register"})
        }
        if(result[0].password===password){
            return res.send({msg:"success",data:result[0].name})
        }
        else{
            return res.send({msg:"check your password"})
        }
    })
})


app.listen(5000, () => {
    console.log("port is created");
})