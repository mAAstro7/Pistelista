CourseApp.controller('CourseController', function ($scope, FirebaseService) {

    $scope.courses = FirebaseService.getCourses();
    $scope.students = FirebaseService.getStudents();
    $scope.courseName = null;

    $scope.addStudent = function () {
        if ($scope.studentNumber > 0) {
            FirebaseService.addStudent({
                number: $scope.studentNumber
            });
        } else {
            alert("Tarkista opiskelijanro!!");

        }
    }

    $scope.removeAllTasks = function () {
        $scope.courses = [];
    };

    $scope.addTask = function () {

        if ($scope.courseName != null && $scope.newTask != null) {
            if ($scope.newTaskPoints > 0) {
                FirebaseService.addCourse({
                    coursename: $scope.courseName,
                    assigment: ({task: $scope.newTask,
                    points: $scope.newTaskPoints})
                });
                $scope.newTask = '';
                $scope.newTaskPoints = '';
            } else {
                alert("Tarkistathan maksimipisteet!!");
            }

        } else {
            alert("Muista lisätä kurssille/tehtävälle nimi!!");
        }

        $scope.order();

    };

    $scope.removeTask = function (index) {
        FirebaseService.removeCourse(index);
        $scope.order();
    };

    $scope.order = function () {
        FirebaseService.sortCourses();
    }

});