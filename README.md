videre-common
=============

Shared code and resources for the various application elements of videre

Testing
-------

The test cases are implemented via jasmine, which are executed via jasmine-node. To install jasmine-node perform the following:

    npm install jasmine-node -g

The test cases are located in the test directory. To run the test cases use the following command:

    jasmine-node test

The verbose option `--verbose` can be used to show details of the tests and assertions that have been executed. Refer to https://github.com/mhevery/jasmine-node for the available options.
