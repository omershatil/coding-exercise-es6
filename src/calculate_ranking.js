const reader = require('./util/readFileLines');
const Ranker = require('./Components/Ranker').Ranker;

/**
 * The entry point for the program.
 * Does the following:
 * 1) Validates a file name is passed in as an argument. Ignores further arguments.
 * 2) Kicks off the process of asynchronously reading the input file.
 * 3) Implements the following callbacks for the file read process:
 *  a) An error callback, which simply prints out the error and exits with an exit code 1.
 *  b) A single line read callback, which forwards the content to the Ranker.
 *  c) A callback that's called when the reading is done. When this callback is called,
 *  it calls the Ranker to print out the results.
 */

// Check if file name is passed in. Exit if not
if (process.argv.length <= 2) {
  console.log(`ERROR: This program requires an input file. 
    Please specify a file name argument. Example:
    
      yarn start sample-input.txt`);
  process.exit(1);
}

// The ranker object. Called with lines of text entries
// and called to print a formatted ranking.
const ranker = new Ranker();

/**
 * Callback called when input file is read.
 */
const fileReadDone = () => {
  ranker.printRanking();
};
/**
 * Callback called when a single line of text is read.
 * Process the line.
 * @param line -- The line of text read.
 */
const lineReadDone = (line) => {
  ranker.addGameScore(line);
};
/**
 * Callback for handling file open/read errors.
 * In case of any error, output the message and exit with an error code of 1.
 * @param err -- The error for which the callback is called.
 */
const readFailed = (err) => {
  console.log(err.message);
  process.exit(1);
};

// kick off the reading of the input file
reader.readSampleFile(process.argv[2], lineReadDone, fileReadDone, readFailed);
