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

app.get("/pagina_principal", (req, res) => {
    res.sendFile(caminho.join(__dirname,"public","pagina_principal.html"));
});

app.get("/sobre", (req, res) => {
    res.sendFile(caminho.join(__dirname,"public","sobre.html"));
});

app.get("/quiz", (req, res) => {
    res.sendFile(caminho.join(__dirname,"public","quiz.html"));
});

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});