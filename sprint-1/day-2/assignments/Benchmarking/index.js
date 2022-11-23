const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //textsync
  if (req.url == "/textsync") {
    const file = fs.readFileSync("index.html", "utf8");
    res.end(file);
  } else if (req.url == "/textasync") {
    fs.readFile("index.html", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url == "/textstream") {
    const cdstream = fs.createReadStream("index.html");
    cdstream.on("readable", () => {
      res.end(cdstream.read());
    });
  } else if (req.url === "/textpromise") {
    const txtPromise = require("fs/promises");

    async function textPromise() {
      try {
        const file = await txtPromise.readFile("index.html", "utf8");
        res.end(file);
      } catch (error) {
        console.log(error);
      }
    }
    textPromise();
  } else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

server.listen(3005, () => {
  console.log("Listining to http://localhost:3005");
});
