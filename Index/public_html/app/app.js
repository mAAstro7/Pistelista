var CourseApp = angular.module('CourseApp', ['ngRoute']);

CourseApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
      controller: 'CourseController',
      templateUrl: 'app/views/course.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});