const httpMod = require("http");

httpMod.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'application/json' })
    res.write(JSON.stringify({
        empID : 525,
        empName : "AQIB"
    }));
    res.end();
}).listen(3000);