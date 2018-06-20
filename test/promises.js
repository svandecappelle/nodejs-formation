class Test {
    
    promise () {
        return new Promise( (resolve, reject) => {
            var fs = require("fs");
            fs.readFile("promises.js", function(err, content) {
              if (err) {
                reject({message: 'not ok', error: err});
              } else {
                resolve("file read: " + content.length + " bytes");
              }
            });
            
        });
    }


    run () {
        console.log("Start file read");
        this.promise().then( (message) => {
            console.log(message);
            console.log("End file read");
        }).catch(error => console.error(error));
    }
}

new Test().run();
console.log("A log asynchronous");