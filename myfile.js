var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    //Open a file on the server and return its content:
    fs.readFile("../Day-3/animation.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(5500);
