// importa o express
const express = require('express');
const server = express();
const routes = require('./routes');

server.use(routes)

// configurando o ejs (Embedded JavaScript templating.) - emputindo js no html
server.set('view engine', 'ejs');

// habilitar arquivos estáticos
server.use(express.static("public"))


server.listen(3000, () => console.log('Rodando'));