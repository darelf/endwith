Example of very small module, with tests, travis, npm, etc.

[![Build Status](https://travis-ci.org/darelf/endwith.svg)](https://travis-ci.org/darelf/endwith)
[![NPM version](https://badge.fury.io/js/endwith.svg)](http://badge.fury.io/js/endwith)

`npm install endwith --save`

    var endwith = require('endwith')
    var s = 'This string should end with a period'
    endwith(s,'.')
    > 'This string should end with a period.'

