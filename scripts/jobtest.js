'use strict';

function modifyuser() {

  var CustomerMgr = require('dw/customer/CustomerMgr');
  var Transaction = require('dw/system/Transaction');
  var Logger = require('dw/system/Logger');

  Transaction.wrap(function () {
    var userProfile = CustomerMgr.getCustomerByCustomerNumber('00000501').getProfile();
      userProfile.setFirstName('UsuarioElias');
      userProfile.setLastName('Apellido');
      userProfile.setEmail('eibarra+test@unitedvirtualities.com');
      userProfile.setPhoneHome('9234567890');
  });
  Logger.info('User Modified');
}

module.exports = {
  modifyuser: modifyuser
};