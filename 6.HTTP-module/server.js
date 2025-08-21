const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req, 'req');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World! This is a simple HTTP server using Node.js HTTP module.\n');

});
// server.listen() starts the HTTP server and make it listening for incoming request 
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
