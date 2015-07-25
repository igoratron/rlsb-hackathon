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
                templateUrl: './templates/people.html'

            }).when('/tips', {

                controller: 'TipsController',
                template: '<p>TipsController</p>'

            })


    })
    .controller('HomeController', function () {
        console.log('Hello world');
    })
    .controller('PeopleController', function () {
        console.log('Hello world');
    })
    .controller('JobController', function () {
        console.log('Hello world');
    })
    .controller('TipsController', function () {
        console.log('Hello world');
    });
