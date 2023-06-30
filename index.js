const http = require("http");

const host = 'localhost';
const port = 80;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    const data = {
        now: new Date(),
        url: req.url,
        method: req.method,
        rawHeaders: req.rawHeaders
    };
    res.end(JSON.stringify(data));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});