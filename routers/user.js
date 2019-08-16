const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    console.log(uname);
    console.log(upwd);
    var sql=`select * from ar_registration where uname=? and upwd=?`;
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err){
            console.log(err);
            res.send({code:0});
        }else{
            res.send(result);
        }
    })
})

router.get("/reg",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql="INSERT INTO ar_registration SET uname=?,upwd=?";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send("1")
        }else{
            res.send("0")
        }
    })
})

module.exports=router;