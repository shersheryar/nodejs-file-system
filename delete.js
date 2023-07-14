var fs = require("fs");

fs.unlink("test", function (err) {
  if (err) throw err;
  console.log("file deleted");
});
