const http = require('http');
const path = require('path');
const streamify = require('streamify');
const fs = require('fs');

// Write stream example
class Downloader {

    download (file) {
        const stream = streamify({ readable: false });
        http.get(file, (res) => {
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                stream.write(chunk);
            });
            res.on('end', (chunk) => {
                stream.end();
            });
            res.on('error', (err) => {
                stream.emit('error', err);
            });
           
        });
        return stream;
    }
};

var downloader = new Downloader();
downloader.download('http://nodejs.org/dist/index.json').resolve(fs.createWriteStream('test.json'));


// Read stream exemple:
class Server {
    start () {
        var server = http.createServer(function (req, res) { 
            var stream = fs.createReadStream(path.resolve(__dirname, 'test.json')); 
            stream.pipe(res); 
        }); 
        server.listen(8000);
    }
}

new Server().start();