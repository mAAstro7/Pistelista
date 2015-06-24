CourseApp.controller('CourseController', function ($scope, FirebaseService) {

    $scope.courses = FirebaseService.getCourses();
//    $scope.courses = [{
//            task: '',
//            points: ''
//        }]
    $scope.students = [{number: ''}];
    $scope.courseName = '';


    $scope.removeAllTasks = function () {
        $scope.courses = [];
    };

    $scope.addTask = function () {
 
        FirebaseService.addCourse({
            task: $scope.newTask,
            points: $scope.newTaskPoints
        });
        $scope.newTask = '';
        $scope.newTaskPoints = '';
    };

    $scope.removeTask = function (index) {
        $scope.courses.splice(index, 1);
    };

});