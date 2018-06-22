# Introduction <a name="introduction"></a>

Nous l'avons dit au début de cette formation mais nodejs est événementielle. Concrètement cela veux dire qu'il est possible de déclancher des actions spécifiques en fonction d'évènements spécifiques.

# Programation évènementielle <a name="events"></a>

Qui dit évènement dit action asynchrone, puisque le programme n'attend pas que l'évènement ne se produise pour effectuer d'autres actions.

Essayons de commencer avec une chose simple. Nous allons faire un petit programme qui ira chercher une page web sur le réseau et déclanchera un évènement lorsque celle-ci sera récupérée.

```js
const http = require('http');
const EventEmitter = require('events');

class Crawl extends EventEmitter {

    run () {
        http.get('http://www.ovh.com/fr/', (res) => {

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                // Do stuff with response
                this.emit('done', rawData);
            });
            
        });
    }


}

var crawler = new Crawl();
crawler.on('done', (html) => {
    console.log('HTML retrieved: ', html);
});
crawler.run();
```

# Les Flux <a name="flux"></a>
La gestion des flux est une part importante de l'utilisation de nodejs (beaucoup de modules l'utilise) et il semble nécésaire d'en parler un peu.

Explication avec un peu de code
```js
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

// on télécharge un fichier
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

// on ouvre un server sur un fichier.
new Server().start();
```