# Introduction, Built-in Modules <a name="introduction"></a>

Les Built-in modules sont les modules pré à l'emploi sur la plateforme nodejs. Ceux-ci sont développés par l'équipe nodejs.org et sont maintenu avec la version de nodejs.

Voici la liste des modules Built-in:

| Module         | Description                                                |
|----------------|------------------------------------------------------------|
| assert         | Provides a set of assertion tests                          |
| buffer         | To handle binary data                                      |
| child_process  | To run a child process                                     |
| cluster        | To split a single Node process into multiple processes     |
| crypto         | To handle OpenSSL cryptographic functions                  |
| dgram          | Provides implementation of UDP datagram sockets            |
| dns            | To do DNS lookups and name resolution functions            |
| domain         | Deprecated. To handle unhandled errors                     |
| events         | To handle events                                           |
| fs             | To handle the file system                                  |
| http           | To make Node.js act as an HTTP server                      |
| https          | To make Node.js act as an HTTPS server.                    |
| net            | To create servers and clients                              |
| os             | Provides information about the operation system            |
| path           | To handle file paths                                       |
| punycode       | Deprecated. A character encoding scheme                    |
| querystring    | To handle URL query strings                                |
| readline       | To handle readable streams one line at the time            |
| stream         | To handle streaming data                                   |
| string_decoder | To decode buffer objects into strings                      |
| timers         | To execute a function after a given number of milliseconds |
| tls            | To implement TLS and SSL protocols                         |
| tty            | Provides classes used by a text terminal                   |
| url            | To parse URL strings                                       |
| util           | To access utility functions                                |
| v8             | To access information about V8 (the JavaScript engine)     |
| vm             | To compile JavaScript code in a virtual machine            |
| zlib           | To compress or decompress files                            |


# Utilisation de require() <a name="requires"></a>
Pour importer un module il suffit d'utiliser le mot clé `require`.
```js
const fs = require('fs');
```

La variable permet ainsi d'etre utilisé en fonction de son niveau de déclaration, comme toutes les variables. ([Niveau de déclaration des variables](/annexes/vars))

# Rechercher des modules avec NPM <a name="modules"></a>
Pour trouver son bonheur parmis les modules npm il existe une commande permettant de faire des recherches sur les repository npm. `npm search <mot_cle>`

```bash
$ npm search colors
NAME                      | DESCRIPTION          | AUTHOR          | DATE       | VERSION  | KEYWORDS
colors                    | get colors in your…  | =dabh =marak    | 2018-05-20 | 1.3.0    | ansi terminal colors
chalk                     | Terminal string…     | =qix…           | 2018-04-26 | 2.4.1    | color colour colors terminal console cli string str ansi style styles tty formatting rgb 256 shell xterm log logging command-supports-color            | Detect whether a…    | =qix…           | 2018-04-17 | 5.4.0    | color colour colors terminal console cli ansi styles tty rgb 256 shell xterm command-line support supports capability detect
strip-ansi                | Strip ANSI escape…   | =qix…           | 2017-06-20 | 4.0.0    | strip trim remove ansi styles color colour colors terminal console string tty escape formatting rgb 256 shell xterm log loggiansi-colors               | Collection of ansi…  | =doowb…         | 2018-05-04 | 2.0.1    | ansi bgblack bgBlack bgblue bgBlue bgcyan bgCyan bggreen bgGreen bgmagenta bgMagenta bgred bgRed bgwhite bgWhite bgyellow bgYansi-regex                | Regular expression…  | =qix…           | 2017-06-20 | 3.0.0    | ansi styles color colour colors terminal console cli string tty escape formatting rgb 256 shell xterm command-line text regexmaterial-colors           | Colors of Google's…  | =shuhei         | 2018-06-03 | 1.2.6    | colors palette design css sass scss less stylus javascript
wrap-ansi                 | Wordwrap a string…   | =qix =bcoe…     | 2017-07-23 | 3.0.1    | wrap break wordwrap wordbreak linewrap ansi styles color colour colors terminal console cli string tty escape formatting rgb
colormin                  | Turn a CSS color…    | =beneb          | 2016-08-16 | 1.1.2    | color colors compression css minify
ansi-styles               | ANSI escape codes…   | =qix…           | 2018-03-02 | 3.2.1    | ansi styles color colour colors terminal console cli string tty escape formatting rgb 256 shell xterm log logging command-linslice-ansi                | Slice a string with… | =qix…           | 2017-07-10 | 1.0.0    | slice string ansi styles color colour colors terminal console cli tty escape formatting rgb 256 shell xterm log logging commacli-color                 | Colors, formatting…  | =medikoo        | 2017-02-22 | 1.2.0    | ansi color console terminal cli shell log logging xterm
d3-interpolate            | Interpolate…         | =mbostock       | 2018-05-07 | 1.2.0    | d3 d3-module interpolate interpolation color
color-convert             | Plain color…         | =moox =qix      | 2018-06-12 | 1.9.2    | color colour convert converter conversion rgb hsl hsv hwb cmyk ansi ansi16
colorguard                | Keep a watchful eye… | =beneb…         | 2017-12-17 | 1.2.1    | css colors lint csslint postcss postcss-plugin
has-ansi                  | Check if a string…   | =qix…           | 2017-06-20 | 3.0.0    | ansi styles color colour colors terminal console string tty escape shell xterm command-line text regex regexp re match test fcli-table-redemption      | Pretty unicode…      | =soyuka         | 2017-06-29 | 1.0.1    | cli colors table
color-string              | Parser and…          | =moox =qix      | 2017-03-09 | 1.5.2    | color colour rgb css
color                     | Color conversion…    | =moox =qix      | 2018-01-25 | 3.0.0    | color colour css
colors-cli                | Terminal string…     | =wcjiang        | 2018-06-15 | 1.0.17   | 256color color colors colors-cli terminal ansi console colour cli string str style styles tty formatting rgb 256 shell xterm
```

# Publier son propre module <a name="publish"></a>

Il est possible de publier son module sur les repository npm publiques (nécéssite la création d'un compte sur [https://npmjs.org](https://npmjs.org))
La documentation complete sur ce sujet se trouve ici: [https://docs.npmjs.com/getting-started/publishing-npm-packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)


# Conclusion <a name="conclusion"></a>
Nodejs se veux extrèmement communautaire afin de permettre une grande capacité d'évolution et de diffusion.