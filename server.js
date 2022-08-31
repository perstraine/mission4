
const express = require("express");
const app = express();
const axios = require ("axios");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const API_KEY = '0d8adf49d9e94f0091f79c113d0fd880';
const PORT = 8000;

const headers ={
    headers : {"Ocp-Apim-Subscription-Key": API_KEY,
               "Content-Type":"application/json",
},
};

app.post("/search", async(req,res)=>{
    const {query} = req.body;
    try{
        const response = await axios.get(
          `https://api.bing.microsoft.com/v7.0/custom/search?q=${query}&customconfig=4226f607-cfd6-40f8-b37d-e30c5470033a&mkt=en-US`,
          headers
        );     
        res.send(response.data);

    }catch (error) {
        console.log(error);
    
        }
});
app.listen(PORT, () =>console.log(`listening on port  ${PORT}`));