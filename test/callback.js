var fs = require("fs");
const path = require('path');

class Reader {

  read (callback) {
    fs.readFile(path.resolve(__dirname, "callback.js"), function(err, content) {
      if (err) {
        console.error(err);
      } else {
        callback("file read: " + content.length + " bytes");
      }
    });
  }
}

/*
new Reader().read((result) => {
  console.log(result);
});
console.log("after readFile");*/