const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req);

  if (req.url === "/") {
    res.write(`Welcome to our home page`);
    res.end();
  } else if (req.url === "/about") {
    res.write(`Welcome to our about page`);
    res.end();
  } else {
    res.end(`

    <h1>404 page not found</h1>


    <p>Page not found <a href="/">GO BACK HOME </a></p>
`);
  }
});

server.listen(5050);
