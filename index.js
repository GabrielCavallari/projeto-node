const express = require("express");
const app = express();

// Rota principal
app.get("/", (req, res) => {
    res.send("Servidor Express rodando!");
});

// Definir a porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});