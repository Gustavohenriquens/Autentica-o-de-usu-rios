const mongoose = require("mongoose");
require('dotenv').config(); 

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

const connectToDb = () => {
    mongoose.connect (
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ohch4ch.mongodb.net/?retryWrites=true&w=majority`,

       {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       }    
    )
    .then(() => console.log("MongoDB Conectado!"))
    .catch((err) => console.log(err))
  
};

module.exports = connectToDb;