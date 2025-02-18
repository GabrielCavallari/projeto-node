const http = require("http");

// Criando o servidor web

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Servidor Node.js rodando!");
});

// Definir a porta do servidor

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})