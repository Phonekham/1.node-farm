const fs = require("fs");
const http = require("http");
const url = require("url");

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
//
// const textOut = `This is what we know: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Writen");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("this is overview");
  } else if (pathName === "/product") {
    res.end("this isn product");
  } else {
    res.writeHead(404, "page not found", {
      "Conten-type": "text/html",
      "my-own-header": "hello-world"
    });
    res.end("<h1>Page not found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("server is running");
});
