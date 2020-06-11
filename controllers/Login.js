'use strict';

var page = require('app_storefront_base/cartridge/controllers/Login');
var server = require('server');

server.extend(page);

server.replace('Show', server.middleware.get, function(req, res, next){
    res.render('test/NewTemplate');
    next();
});

module.exports = server.exports();