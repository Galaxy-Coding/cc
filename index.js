const express = require("express");
const path = require("path")
const TextOnGif = require('text-on-gif');

const app = express();

app.get("/", async (req, res) => {
  var gif = new TextOnGif({
    file_path:  path.join(__dirname, "explosion.gif")
  });
  var buffer = await gif.textOnGif({
    text: "text on gif sucks",
    get_as_buffer: true
  });
  console.log(buffer);
  res.setHeader('content-type', 'image/gif');
  res.send(buffer);
});

app.listen(3000, () => {
  console.log("server started");
});
