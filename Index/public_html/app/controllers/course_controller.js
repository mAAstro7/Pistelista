CourseApp.controller('CourseController', function ($scope) {
    $scope.courses = [];
    $scope.students = [];

    $scope.removeAllTasks = function () {
        $scope.courses = [];
    };

    $scope.addTask = function () {
        $scope.courses.push({
            task: $scope.newTask,
            points: $scope.newTaskPoints
        });
        $scope.newTask = '';
        $scope.newTaskPoints = '';
    };
    
    $scope.removeTask = function (index) {
        $scope.kurssit.splice(index, 1);
        $scope.order();
    };

});