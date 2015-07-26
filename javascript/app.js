angular
    .module('RLSBApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {

                controller: 'HomeController',
                template: '<p>HomeController</p>'

            }).when('/job-search', {

                controller: 'JobController',
                template: '<p>JobController</p>'

            }).when('/people', {

                controller: 'PeopleController',
                controllerAs: 'people',
                templateUrl: './templates/people.html'

            }).when('/people/results', {

                controller: 'ResultsController',
                controllerAs: 'ctrl',
                templateUrl: './templates/results.html',
                resolve: {
                    results: ['peopleSearch', function(peopleSearch) {
                        return peopleSearch.search();
                    }]
                }

            }).when('/tips', {

                controller: 'TipsController',
                template: '<p>TipsController</p>'

            });

    })
    .controller('HomeController', function () {
        console.log('Hello world');
    })
    .controller('PeopleController', ['$location', function ($location) {
        var vm = this;

        vm.search = function(formData) {
            $location
                .path('/people/results')
                .search(formData);
        };
    }])
    .controller('JobController', function () {
        console.log('Hello world');
    })
    .controller('TipsController', function () {
        console.log('Hello world');
    })
    .controller('ResultsController', ['results', function(results) {
        var vm = this;
        vm.results = results;
    }]);
