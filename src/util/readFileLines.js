const readline = require('readline');
const fs = require('fs');

/**
 * Read a given passed in file and call the passed in callback when done/error.
 * @param sampleFile -- File name to read
 * @param lineReadCallback -- Callback to call upon single line read complete.
 * @param doneCallback -- Callback to call upon read complete.
 * @param failCallback -- Callback to call upon read failure.
 */
exports.readSampleFile = (sampleFile, lineReadCallback, doneCallback, failCallback) => {
  // first check if the file exists. if so, open it for reading
  fs.stat(sampleFile, function(err, stat){
    if (!stat || !stat.isFile()) {
      failCallback(new Error(`File does not exist: ${sampleFile}`));
      return;
    }
    const rl = readline.createInterface({
      input: fs.createReadStream(sampleFile),
      crlfDelay: Infinity
    });
    rl.on('line', (line) => {
      // read lines. call callback for each line read
      lineReadCallback(line);
    }).on('close', () => {
      // done. invoke callback with the complete array
      if (doneCallback) {
        doneCallback();
      } else {
        process.exit(0);
      }
    }).on('error', (err) => {
      if (failCallback) {
        failCallback(err);
      } else {
        process.exit(1);
      }
    });
  });
};
