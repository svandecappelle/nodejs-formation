var fs = require("fs");
fs.readFile("test.js", function(err, content) {
  if (err) {
    console.err(err);
  } else {
    console.log("file read: " + content.length + " bytes");
  }
});

console.log("after readFile");