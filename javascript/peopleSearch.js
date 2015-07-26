angular
    .module('RLSBApp')
    .factory('peopleSearch', ['$http', '$q', function($http, $q) {
        return {
            search: function() {
                return $http.get('./people.json')
                    .then(function(result) {
                        return result.data;
                    });
            }
        };
    }]);
