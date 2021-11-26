const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/count", function (request, response) {
  let count = 0;

  response.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
  });

  setInterval(() => {
    count++;
    response.write(`data: ${count}\n\n`);
  }, 1000);
});

app.listen(process.env.PORT || 7000);
