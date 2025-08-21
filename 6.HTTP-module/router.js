const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page');
    }
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the About Page');
    } else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Contact Page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }

});
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});