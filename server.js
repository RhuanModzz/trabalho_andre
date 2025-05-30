const express = require("express");
const caminho = require("path");

const app = express();
const porta = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(caminho.join(__dirname,"public","cadastro.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(caminho.join(__dirname,"public","login.html"));
});

app.get("/biologia", (req, res) => {
    res.sendFile(caminho.join(__dirname,"public","biologia.html"));
});

app.get("/sobre_nos", (req, res) => {
    res.sendFile(caminho.join(__dirname,"public","sobre_nos.html"));
});


app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
