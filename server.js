const http =  require('http');
const app = require('./app')
const port = 4300 ;

const server = http.createServer(app);

server.listen(port);