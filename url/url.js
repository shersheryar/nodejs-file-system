let url = require("url");

// let addr = "https://chat.openai.com/?model=text-davinci-002-render-sha";
// let addr = "https://www.w3schools.com/js/tryit.asp?filename=tryjs_class_method";
let addr =
  "https://youtu.be/fnc_krWZ_SA?list=PLiq4mbPMRL9bDZvWWrCvt3UfnkuGYGhlU";
let q = url.parse(addr, true);

console.log("host: " + q.host);
console.log("path name: " + q.pathname);
console.log("search: " + q.search);

let qdata = q.query;

console.log(qdata.month);
