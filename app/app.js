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
  
    app.controller('indexController', function($scope) {
        bumpIt();
    });
  
}());

/* Variable Height Sticky Footer */
var bumpIt = function() {  
  $('body').css('margin-bottom',    $('.footer').height());
},
didResize = false;

bumpIt();


$(window).resize(function() {
  didResize = true;
});

setInterval(function() {  
  if(didResize) {
    didResize = false;
    bumpIt();
  }
}, 250);