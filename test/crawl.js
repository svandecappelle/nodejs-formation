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