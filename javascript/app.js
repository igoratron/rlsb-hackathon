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

            }).when('/people/result', {

                template: '<p>Hello</p>'

            }).when('/tips', {

                controller: 'TipsController',
                template: '<p>TipsController</p>'

            })


    })
    .controller('HomeController', function () {
        console.log('Hello world');
    })
    .controller('PeopleController', function () {
        var vm = this;

        vm.search = function(formData) {
            console.log(formData);
        };
    })
    .controller('JobController', function () {
        console.log('Hello world');
    })
    .controller('TipsController', function () {
        console.log('Hello world');
    });
