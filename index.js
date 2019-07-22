const fs = require("fs");
const http = require("http");
const url = require("url");

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
//
// const textOut = `This is what we know: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Writen");

// SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("this is overview");
  } else if (pathName === "/product") {
    res.end("this isn product");
  } else if (pathName === "/api") {
    const productData = JSON.parse(data);
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
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
