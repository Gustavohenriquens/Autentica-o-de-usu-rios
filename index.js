const express = require("express");
const path = require("path");
const routes = require("./routes/routes")
const connectToDb = require("./database/db");
const bcrypt = require("bcrypt");


connectToDb();
const app = express();
const port = 8000;


app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));  
app.use(express.urlencoded());
app.use(routes);

    


app.listen(port, () =>{
    console.log(`Rodando em http://localhost:${port}`);
});