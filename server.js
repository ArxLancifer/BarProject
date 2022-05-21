const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("./" + req.url, (err, data) => {
      res.writeHead(200, { "Contant-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8000);
console.log("Server is running on port 8000");
