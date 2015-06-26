var CourseApp = angular.module('CourseApp', ['ngRoute', 'firebase']);

CourseApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
      controller: 'CourseController',
      templateUrl: 'app/views/allcourses.html'
    })
    .when('/course', {
      controller: 'CourseController',
      templateUrl: 'app/views/course.html'
    })
    .when('/student', {
      controller: 'CourseController',
      templateUrl: 'app/views/student.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});