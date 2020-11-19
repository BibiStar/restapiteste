const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.port || 8080;

const host = process.env.host || '0.0.0.0';

server.use(middlewares);
server.use(router);
server.listen(port,host,()=>
{
    console.log('Json Server is running in ',port);

});