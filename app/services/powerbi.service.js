(function() {
    'use strict'
    angular.module('officeAddin').service('powerbiService', ['powerBIUrl', '$http', '$q', powerbiService]);

    function powerbiService(powerBIUrl, $http, $q) {
        return {
            getGroups: getGroups
        };

        function getUrl(path)
        {
            return "https://api.powerbi.com/beta/myorg/" + path
        }

        function getGroups()
        {
            var deferred = $q.defer();

            $http({
                'url': getUrl('dashboards'),
                'mehtod': 'GET',
            }).success(function (data) {
                console.log(data);
                deferred.resolve(data);
            }).error(function (err,e) {
                deferred.reject(err);
            });

            return deferred.promise;
        }
    };
})();