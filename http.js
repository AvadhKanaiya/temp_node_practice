const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to the home page');
    }
    else if (req.url === '/about') {
        res.end('here is our short history');
    }
    else {
        res.end(`<h1>OOPS!
        <p>we can't seem to find the page you are looking for</p>
        <a href = "/">Back to HOME</a>
        `)
    }
})

server.listen(5000)