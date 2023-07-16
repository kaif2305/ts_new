const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());

const mongoose = require("mongoose");
const User = require('./Pages/model/userSchema.js');

require('dotenv').config({ path: "../.env.local" });
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION, APP SHUTTING NOW!!");
  console.log(err.message, err.name);
  process.exit(1);
});
const db = process.env.REACT_APP_MONGO_URI;


const port = 3001;

mongoose.connect(db,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  autoIndex:true,
})
  .then(() => {
    console.log("Database connected successfully");
  })



app.get("/admin/view",(req,res) => {
  console.log("reached herex`")
  User.find({},{_id:1, title:1, firstName:1,lastName:1,email:1})
  .then((jsonData)=> {
    // console.log(jsonData)
    console.log("trying to fetch")
    const data = jsonData.map((item) => {
      const newItem = {title:item.title, firstName:item.firstName, lastName:item.lastName, email:item.email, _id:item._id} ;
      newItem.uploadedAbstract = `https://api.technoscape.in/users/files/${newItem._id}`;
      return newItem;
    });
    res.send(data)
    // console.log(data)
    console.log("collected data")
  
   })
   .catch((err) => {
    res.status(500).send(err);
   })
})



const server = app.listen(port, () => {
  console.log("Server is up listening on port:" + port);
});

