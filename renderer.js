const showdown  = require('showdown');
const showdownHighlight = require("showdown-highlight");
const converter = new showdown.Converter({
    extensions: [ showdownHighlight ]
});
const path = require('path');
const url = require('url');
const fs = require('fs');
const dir = path.resolve(__dirname, "public");

const THEME = 'modest';

const exists = (files) => {
    
    return new Promise((resolve, reject) => {
        files.forEach(file => {
            if ( file.slice(-3) === '.md' || file.slice(-9)  === '.markdown') {
                if (fs.existsSync(file) && fs.statSync(file).isFile()) {
                    return resolve(file);
                }
            }
        });

        return reject("File not valid");
    });
}

const html = (file, res, next) => {
    fs.readFile(path.resolve(__dirname, `themes/${THEME}.css`), 'utf8', (err, theme) => {

        if (err) {
            console.error(err);
        }

        fs.readFile(file, 'utf8', (err, data) => {
            var context = {};
            if (err) {
                console.error(err);
                return next(err);
            }
            const styleDatas = `<style>${theme}</style>`;
            data = converter.makeHtml(styleDatas.concat(data));
            res.send(data);
        });
    });
}

class Renderer {

    render (req, res, next) {
        var file = req.url.toString(),
            fileLower = file.toLowerCase();
            file = url.parse(file).pathname.slice(1);
        file = path.resolve(dir, file);
        // make sure the final path is in our defined directory
        if (file.substr(0, dir.length) !== dir)
            return res.send(400);
        
        const files = [file];
        files.push(`${file}.md`);
        files.push(`${file}/index.md`);
        files.push(`${file}/index.markdown`);
        
        exists(files).then((file) => {
            html(file, res, next);
        }).catch((err) => {
            next();
        });
    }
}

module.exports = new Renderer().render;