(function () {
  'use strict';

  var officeAddin = angular.module('officeAddin');

  officeAddin.config(['$httpProvider', 'adalAuthenticationServiceProvider', 'appId', 'powerBIUrl', adalConfigurator]);

  function adalConfigurator($httpProvider, adalProvider, appId, powerBIUrl) {
      var adalConfig = {
          instance: 'https://login.microsoftonline.com/',
      tenant: 'sjkpdevs.onmicrosoft.com',//'common',
      clientId: appId,
      extraQueryParameter: 'nux=1',
      endpoints: {}
      // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost. 
    };
      //The url used to talk to the powerbi api
      adalConfig.endpoints['https://api.powerbi.com/beta/myorg'] = powerBIUrl;
    adalProvider.init(adalConfig, $httpProvider);
  }
})();
