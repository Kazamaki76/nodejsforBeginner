const http = require("http");

const server = http.createServer();

server.listen(8000);

const todo = "Go Home";

server.on("request", (req, res) => {
  console.log(req.url);
  if (req.url === "/todo") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.write("<h1>hello, yahoo</h1>");
    res.write("hello, world ");
    res.write(`<h1>${todo}</h1>`)
    res.end();
  }
  else {
    res.statusCode = 200
    res.setHeader("content-type", "text/html")
    res.write("<h1>hello, yahoo</h1>")
    res.write("hello, world ")
    res.end()

  }
});
