const express = require('express');
const app = express();
var Raven = require('raven');

Raven.config('https://f58e5b45cd554f02881d25070f747488@sentry.io/1189537').install();
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