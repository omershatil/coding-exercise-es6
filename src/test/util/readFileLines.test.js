const reader = require('../../util/readFileLines');

test('should receive call on error callback when input file does not exist', () => {

  // attempt to parse a non-existing file. Verify the callback is called.
  // use a Promise so we can wait on the callback to be called!
  return new Promise((resolve, reject) => {
    reader.readSampleFile('__doesNotExist__.txt',
      () => {throw new Error('lineReadCallback() should never be called');},
      () => {throw new Error('doneCallback() should never be called');},
      () => {
        // here we indicate the callback was indeed called
        resolve();
      });
  }).then(() => {
    // nothing to do here. We are just waiting for the callback to be called
    // and resolve the promise!
  });
});
