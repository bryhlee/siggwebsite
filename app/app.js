(function() {
    
    var app = angular.module('SiggWebsite', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html'
            })
            .when('/information', {
                templateUrl: 'app/views/information.html'
            })
            .when('/members', {
                templateUrl: 'app/views/members.html'
            })
            .when('/join', {
                templateUrl: 'app/views/join.html'
            })
            .when('/events', {
                templateUrl: 'app/views/events.html'
            })
            .when('/contact', {
                templateUrl: 'app/views/contact.html'
            })
            .when('/photos', {
                templateUrl: 'app/views/photos.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
}());