// const http = require('http');
// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.write('Hello mebratu');
//     res.end();
// }).listen(3000, () => {
//     console.log("Server running on 3000");
    
// });
// const express = require('express');
// const App = express();
let http = require('http');
const port = 3000;
let routes={
    '/': index = (req,res) => {
        res.writeHead(200);
        res.end('Hello World')
    },
    '/foo': foo = (req, res) => {
        res.writeHead(200);
        res.end('You ar now viewing foo')
    }
}
http.createServer((req, res) => {
    if (req.url in routes) {
        return routes[req.url](req, res);
    }
    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
}).listen(port, () => {
    console.log(`Server Listening on port ${port}`);
    
})