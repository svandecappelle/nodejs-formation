const express = require("express");
const router = express.Router();
const path = require('path');
const childProcess = require('child_process');

const runScript = (scriptPath) => {

    return new Promise((resolve, reject) => {
        // keep track of whether callback has been invoked to prevent multiple invocations
        var invoked = false;
        var process = childProcess.fork(scriptPath, [], { silent: true });
        
        // listen for errors as they may prevent the exit event from firing
        process.on('error', function (err) {
            if (invoked) {
                return;
            }
            invoked = true;

            console.log("err");
            reject(err);
        });

        var output = "";
        // console.log(process);
        process.stdout.on('data', (data) => {
            console.log(`stdout from the child: ${data}`);
            output += data;
        });

        // execute the callback once the process has finished running
        process.on('exit', function (code) {
            if (invoked) {
                return;
            }
            invoked = true;
            
            var err = code === 0 ? null : new Error('exit code ' + code);
            
            if (err !== null) {
                console.log("err");
                return reject(err);
            }
            
            resolve(output);
        });

    });
}

router.get('/:script', (req, res) => {
    const script = req.params.script;
    res.render('launch', {
        name: script
    });
});


router.post('/:script', (req, res) => {
    const script = req.params.script;
    const scriptPath = path.resolve(__dirname, `test/${script}`);
    console.log(scriptPath);
    runScript(scriptPath).then((output) => {
        res.json(output);
    }).catch(error => {
        console.log("error");
        console.log(error);
        res.status(500).json({results: 'error', err: error})
    });
});

module.exports = router;