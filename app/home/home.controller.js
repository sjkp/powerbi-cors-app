(function(){
  'use strict';

  angular.module('officeAddin')
         .controller('homeController', ['powerbiService', homeController]);

  /**
   * Controller constructor
   */
  function homeController(powerbiService) {
    var vm = this;  // jshint ignore:line
    vm.title = 'home controller';
    vm.dataObject = {};

    getDataFromService();

    function getDataFromService(){
        powerbiService.getGroups()
        .then(function(response){
          vm.dataObject = response;
        });
    }
  }

})();
