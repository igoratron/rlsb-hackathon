angular
    .module('RLSBApp', ['ngRoute', 'ngSanitize'])
    .run(['$rootScope', function($rootScope) {
        $rootScope.$on('$viewContentLoaded', function() {
            var el = document.querySelector('.js-view h1');
            el.tabIndex = -1;
            el.focus();
        });
    }])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {

                controller: 'HomeController',
                templateUrl: './templates/index.html'

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
                    results: ['peopleSearch', function (peopleSearch) {
                        return peopleSearch.search();
                    }]
                }

            }).when('/people/results/:profileId', {

                controller: 'ProfileController',
                controllerAs: 'profile',
                templateUrl: './templates/profile.html',
                resolve: {
                    results: ['peopleSearch', function (peopleSearch) {
                        return peopleSearch.search();
                    }]
                }

            }).when('/tips', {

                templateUrl: './templates/tips.html'

            }).when('/tips/interview', {

                templateUrl: './templates/interview.html'

            });

        $routeProvider.otherwise({
            redirectTo: '/'
        });

    })
    .controller('HomeController', function () {
        console.log('Hello world');
    })
    .controller('PeopleController', ['$location', '$scope', function ($location, $scope) {
        var vm = this;

        vm.search = function (formData) {
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
    .controller('ResultsController', ['results', function (results) {
        var vm = this;
        vm.results = results;
    }])
    .controller('ProfileController', function ($routeParams, results) {

        var id = $routeParams['profileId'];
        var vm = this;
        vm.result = results[id];

    })
;
