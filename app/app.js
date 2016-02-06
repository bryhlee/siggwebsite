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
            .otherwise( { redirectTo: '/' } );
    });
    
}());