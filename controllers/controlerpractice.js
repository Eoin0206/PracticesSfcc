'use strict';

var server = require('server');
server.get('Show', function (req, res, next) {
    
    var formtest = server.forms.getForm('testform');

    res.render('/test/templateexample',{form: formtest});
    next();
});

module.exports = server.exports();
