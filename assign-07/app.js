const express = require("express");
const app = new express();
const router = require("./src/Routes/api");

app.use("/api/vi",router);


app.use((req,res)=>{
    res.status(404).json({value:"undefine"});
});

module.exports=app; 