const express = require("express");
const Usuario = require("../models/User");
const User = require("../models/User");
const bcrypt = require("bcrypt");


//Renderizar o Registro....
const getAll =  async (req, res) => {

    try{
        const userList = await User.find();
        return res.render("index", {userList});

    }catch(err){
       res.status(500).send({error: err.message});
    }
};

//Autenticação de Registro...
const registrar = async (req ,res) => {

    const usuario = req.body;

    try{
        await User.create(usuario);
        return res.redirect("/login");
    }
    catch(err){
        res.status(500).send({error: err.message});
    }   
};

//Renderizar o Login...
const getLogin = (req, res) => {

    try{
        return res.render("login",);

    }catch(err){
       res.status(500).send({error: err.message});
    }
};

//Autenticação de Login...
const login = async (req, res) => {
    try {

        //Email
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).send({ error: "Usuário não encontrado" });
        }

        //Senha
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

        if (isPasswordValid) {
            res.redirect("/home");
        } else {
            res.send("Senha incorreta");
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }

    /*Código que utiliza "bcrypt.compare" é responsável por verificar se a senha fornecida na
    requisição é a senha correspondente ao usuário com o email fornecido que foi encontrado no banco de dados.*/
};

//Renderizar o Home....
const getHome = (req, res) => {

    try{
        return res.render("home",);

    }catch(err){
       res.status(500).send({error: err.message});
    }
};


module.exports = {
    getAll,
    registrar,
    login,
    getLogin,
    getHome,
}




