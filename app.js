const express = require('express');
const app = express();
var Raven = require('raven');

// Raven.config('xxxxxxxxxx').install();
/* 
try {
    doSomething(a[0]);
} catch (e) {
    Raven.captureException(e);
}

OR

Raven.context(function () {
  doSomething(a[0]);
});
*/

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/public/index.html')
});

app.get('/*', (req, res) => {
    return res.redirect('/');
});

module.exports = app;