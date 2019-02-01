const Router = require("express").Router();
const Users = require("./userModel.js");

function crearUs() {
  let user = Math.floor(Math.random() * 50);
  let clave = Math.floor(Math.random() * 50);
  let user = new Users({
    usuario: user,
    clave: clave
  });
  evento.save(function(error) {
    if (error) {
      res.status(500);
      res.json(error);
    }
    console.log("Usuario: " + user + " Clave: " + clave);
  });
}
