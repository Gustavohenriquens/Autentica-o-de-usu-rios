const routes = require("express").Router();
const controllers = require("../controllers/controllers")


routes.get("/", controllers.getAll);
routes.post("/registro", controllers.registrar);
routes.get("/login", controllers.getLogin);
routes.post("/logar" , controllers.login);
routes.get("/home", controllers.getHome);

module.exports = routes;