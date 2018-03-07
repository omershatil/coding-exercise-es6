The Problem
===========
We want you to create a command-line application that will calculate the
ranking table for a hockey league.

Input/output
------------
The input and output will be text. Your solution should parse the provided
sample-input.txt file via stdin (pipe or redirect) or by parsing a file passed
by name on the command line. Your solution should output the correct result via
stdout to the console.

The input contains results of games, one per line. See sample-input.txt for
details. The output should be ordered from most to least points, following
(exactly) the format specified in expected-output.txt.

You can expect that the input will be well-formed. There is no need to add
special handling for malformed input files.

The rules
---------
In this league, a draw (tie) is worth 1 point and a win is worth 3 points. A
loss is worth 0 points. If two or more teams have the same number of points,
they should have the same rank and be printed in alphabetical order (as in the
tie for 3rd place in the sample data).

Guidelines
-----------
This should be implemented in a language with which you are familiar. We would
prefer that you use ruby or javascript, if you are comfortable doing so. If none
of these are comfortable, please choose a language that is both comfortable for
you and suited to the task.

Your solution should be able to be run (and if applicable, built) from the
command line. Please include appropriate scripts and instructions for
running your application and your tests.

If you use other libraries installed by a common package manager
(rubygems/bundler, npm, etc), it is not necessary to commit the
installed packages.

We write automated tests and we would like you to do so as well.

We appreciate well factored, object-oriented or functional code.

Please document any steps necessary to run your solution and your tests.

Platform support
----------------
This will be run in a unix-ish environment (OS X). If you choose to use a
compiled language, please keep this in mind. (Dependency on Xcode is acceptable
for objective-c solutions) Please use platform-agnostic constructs where
possible (line-endings and file-path-separators are two problematic areas).

Submission
----------
Please submit your solution by pushing up a branch to your Github repo and open a PR. Add Github users `amay` and `eagsalazar` as reviewers.

Solution
----------
- To execute the program, get the source and go to the root folder.
- Install NodeJS. The latest Node TLS is 8.9.4 (https://nodejs.org/en/download/).
NPM should be installed with Node automatically (current is 5.6.0). 
Optionally, you could install Yarn (https://yarnpkg.com/lang/en/docs/install/).
- Open a terminal and navigate to the project folder. To get missing packages run the following command:
```
npm install
```
Or:
```
yarn install
```
- To run the tests execute the following command:
```
yarn test
```
Or:
```
npm test
```
- To execute the script itself run the following command from the terminal. Note that 
<sample.txt> is a text file that conforms to the format you can find in sample-input.txt,
which you can find in the root folder of the project:
```
npm start <sample.txt>
```
Or:
```
yarn start <sample.txt>
```

