let fs = require("fs");
fs.rename("text.txt", "text1.txt", function (err) {
  if (err) throw err;
  console.log("rename");
});
