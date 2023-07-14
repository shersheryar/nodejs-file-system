let fs = require("fs");

fs.appendFile("file.txt", "hello world", function (err) {
  if (err) throw console.log(err.name);
  console.log("save");
});
