let fs = require("fs");

fs.appendFile("text.txt", "added some text", function (err) {
  if (err) throw err;
  console.log("update");
});
