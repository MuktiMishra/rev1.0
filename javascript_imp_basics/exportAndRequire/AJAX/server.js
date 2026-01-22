const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!\n'); 
    }
    else if (url === '/data') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const data = { message: 'This is some JSON data' };
        res.end(JSON.stringify(data));
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found\n');
    }
});