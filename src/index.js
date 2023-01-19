const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3001
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
});

app.post("/add", (req, res) => {
    const num1= req.body.num1;
    const num2= req.body.num2;
    // Both inputs must be numbers
    if(isNaN(num1) || isNaN(num1)){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }

    if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provide"
        })
    }
    let sum =0;
    res.status(200).json({
        status: "Sucess",
        message: "sucess case",
        sum : num1 +num2
    })
    
})

app.post("/multiply", (req, res) => {
    const num1= req.body.num1;
    const num2= req.body.num2;
    // Both inputs must be numbers
    if(isNaN(num1) || isNaN(num1)){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }

    if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }
    let multiply =0;
    res.status(200).json({
        status: "Sucess",
        message: "sucess case",
        multiply : num1*num2
    })
    
})

app.post("/subtract", (req, res) => {
    const num1= req.body.num1;
    const num2= req.body.num2;
    // Both inputs must be numbers
    if(isNaN(num1) || isNaN(num1)){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }

    if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }
    let subtract =0;
    res.status(200).json({
        status: "Sucess",
        message: "sucess case",
        subtract : num1-num2
    })
    
})

app.post("/divide", (req, res) => {
    const num1= req.body.num1;
    const num2= req.body.num2;
    // Both inputs must be numbers
    if(isNaN(num1) || isNaN(num1)){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }

    if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }
    let divide = 0;
    res.status(200).json({
        status: "Sucess",
        message: "sucess case",
        divide : num1/num2
    })
    
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;