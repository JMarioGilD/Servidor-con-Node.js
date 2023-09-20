const http = require('http');
const chalk = require('chalk');

const hostname = 'localhost';
const port = 8000; // Se puede cambiar a 8080 si se prefiere

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const responseData = JSON.stringify({ name: 'Jorge Gil', message: 'Hola, este es mi servidor Node.js!'});
    res.end(responseData)
});

server.listen(port, hostname, () => {
    console.log(chalk.green(`Servidor corriendo en http://${hostname}:${port}/`));
} );
