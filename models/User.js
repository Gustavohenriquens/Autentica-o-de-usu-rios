const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserShema = new mongoose.Schema({

    //Nomes precisa ser iguais a do fomulario. (name=" ")
    nome : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,   
        unique: true, //Na coleção vai evitar que o email seja registrado duas vezes.
        lowercase: true, 
    },
    password : {
        type : String,
        required : true,
        //select: false,// Toda vez que fizer um consulta no BD não vai mostrar a senha(Password).
    },
    createAt : { //Vai pegar a data do exato momento que fez o cadrastro.
        type: Date,
        default : Date.now,
    },
});

//Criptografar a senha. bcrypt.hash -> Deixa a senha segura.
UserShema.pre("save", async function(next)  {
    const hash =  await bcrypt.hash(this.password, 10);
    console.log(this);
    console.log(hash);
    this.password = hash;
});

module.exports = mongoose.model("User", UserShema);


