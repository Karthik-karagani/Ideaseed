const express=require("express");
const app=express();
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
const mysql=require("mysql");
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"5723",
    database:"data1"
})


const list=[];


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/write",(req,res)=>{
    res.sendFile(__dirname+"/write.html");
})


app.post("/app",(req,res)=>{
    con.connect(function(err) {  
        if (err) throw err;  
        console.log("Connected!");  
       
        var sql = `INSERT INTO textbox1 VALUES ("${req.body.id}","${req.body.idea}")`; 
        
    con.query(sql, function (err, result) {  
    if (err) throw err;  
    console.log("1 record inserted");
    con.query("SELECT * FROM textbox1 ", function (err, result, fields) {
        if (err) throw err;
        
        for(const key of result){
           res.write(`<p>${key.id}${key.idea}</p>`);
list.push(`<p>${key.id}</p>`)
list.push(`<p>${key.idea}</p>`)

console.log(list);        } 
});
    
      });  
})
})


app.listen(3000);