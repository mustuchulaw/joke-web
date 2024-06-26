import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.post("/joke",async(req, res) => {
        try{
            var category=req.body.type;
            const result = await axios.get("https://v2.jokeapi.dev/joke/"+category);
            res.render("index.ejs",{
              content:[result.data.setup,result.data.delivery],  
            });
        }catch(error){
            console.log(error.response);
             res.status(500);
        }
    })

app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.listen(port,()=>{
    console.log("server successfully running on "+port);

})