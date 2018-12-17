const path = require('path');
const {execFile} = require('child_process');

const EXEC_OPTS = require('../index').exec_options;

let popplerPath = require('../index').path;

// module.exports = function (file, out_file, page_start, page_end) {
module.exports = function (inputFiles, outputFile) {
    return new Promise((resolve, reject) => {
        let args = [];
        inputFiles.forEach(function (input) {
            args.push(`${input}`);
        });

        args.push(`${outputFile}`);

        execFile(path.join(popplerPath, 'pdfunite'), args, EXEC_OPTS, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                resolve(stdout);
            }
        });
    });
};
