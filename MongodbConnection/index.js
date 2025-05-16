const exp = require("express");
const mongodb = require("mongoose");
const cors = require("cors");
const User = require("./model/signupModel");

const app = exp();

app.use(exp.json());
app.use(cors());

try{
    mongodb.connect("mongodb+srv://dhilipar:CmZTd9fcmEQqNTa8@cluster0.7tlje.mongodb.net/anna-univ?retryWrites=true&w=majority&appName=Cluster0")
} catch(error){
    console.log("failed to connect: ", error)
}

app.post("/sign-up",async(req,res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        return res.send("Data Stored Successfully")
    }
    catch(err){
        return res.send(err)
    }

})

app.get("/sign-up/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await User.findOne({_id:id});
        return res.send({msg:"success",data:user});
    }
    catch(err){
        return res.send(err);
    }
})
app.put("/sign-up/:_id",async(req,res)=>{
    try{
        const updatedUser = await User.findbyIdAndUpdate(req.params,req.body);
        if(!updatedUser){
            return res.send({msg:"Register first"});
        }
        return res.send({msg:"success",data:updatedUser});
    }
    catch(err){
        return res.send({msg:"error",err})
    }
})

app.listen(5001,()=>{
    console.log("Server started");
});