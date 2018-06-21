var fs = require("fs");
const path = require('path');
fs.readFile(path.resolve(__dirname, "callback.js"), function(err, content) {
  if (err) {
    console.error(err);
  } else {
    console.log("file read: " + content.length + " bytes");
  }
});

console.log("after readFile");