const express = require("express");
const path = require("path")
const bodyParser = require("body-parser");
const Router   = require('router')
const dotenv = require("dotenv");
const assert = require('assert');
const cors = require('cors');
const MongoClient= require('mongodb').MongoClient;
const mongoose = require("mongoose");
var router = Router()

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.static(path.join(__dirname,'samparc','build')))  //Joining build folder
// app.use('/', router);

// app.get("*",async(req,res)=>{
//     res.sendFile(path.join(__dirname,"samparc","build","index.html"))
//   });


const dbName = "Yearbook2023"
const client = new MongoClient(process.env.url);
mongoose.connect( process.env.url,{ 
  useUnifiedTopology: true, 
  useNewUrlParser: true 
},).then((res) => {
  console.log("Database connected");
}).catch(error => {
   console.log(error);
 });
const quizResponseSchema = {
    Response:String
}
const quizResponse = mongoose.model("quizResponse", quizResponseSchema);


app.get("/",async(req,res)=>{
    const db = client.db(dbName)
    const collection = db.collection("responses")
    collection.find({}).toArray(function(err,responses){
        assert.equal(err,null);
        res.json(responses);
    })
  })

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
