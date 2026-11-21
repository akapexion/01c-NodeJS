const httpModule = require("http");

httpModule.createServer((req, res) => {
    if(req.method === "GET" && req.url === "/about"){
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.write("About us <br>");
        res.write("About Endpoint");
        res.end();
    }
    else if(req.method === "GET" && req.url === "/services"){
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.write("Services <br>");
        res.write("Services Endpoint");
        res.end();
    }
    else {
    res.write("Home");
    res.end();
    }
}).listen(3000);