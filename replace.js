let fs = require("fs");

fs.writeFile("text.txt", "replace current text", function (err) {
  if (err) throw err;
  console.log("replace text");
});
