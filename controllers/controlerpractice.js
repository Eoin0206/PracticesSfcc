'use strict';

var server = require('server');
var Logger = require('dw/system/Logger');
server.get('Show', function (req, res, next) {
    
    var formtest = server.forms.getForm('testform');
    var infoLogger = Logger.getLogger("myCustomLog", "logElias"); 
        infoLogger.info("testlogs");
    
    var warnLogger = Logger.getLogger("myCustomLogwarn", "logEliaswarn"); 
        warnLogger.warn("testwarn");
        
    var errorLogger = Logger.getLogger("myCustomLogerror", "logEliaserror"); 
        errorLogger.error("testlogserror");

    var debugLogger = Logger.getLogger("myCustomLogdebug", "logEliasdebug"); 
        debugLogger.debug("testlogsdebug");
        
    res.render('/test/templateexample',{form: formtest});
    next();
});

module.exports = server.exports();
