CourseApp.controller('CourseController', function ($scope, FirebaseService) {

    $scope.tasks = FirebaseService.getTasks();
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
        $scope.tasks = [];
    };

    $scope.addTask = function () {

        if ($scope.courseName != null && $scope.newTask != null) {
            if ($scope.newTaskPoints > 0) {
                FirebaseService.addTask({
                    coursename: $scope.courseName,
                    tasks: ({assigment: ({task: $scope.newTask,
                            points: $scope.newTaskPoints})})
                });

                $scope.newTask = '';
                $scope.newTaskPoints = '';
                $scope.courseName = $scope.courseName;
            } else {
                alert("Tarkistathan maksimipisteet!!");
            }

        } else {
            alert("Muista lisätä kurssille/tehtävälle nimi!!");
        }

        $scope.order();

    };

    $scope.removeTask = function (index) {
        FirebaseService.removeTask(index);
        $scope.order();
    };

    $scope.removeStudent = function (index) {
        FirebaseService.removeStudent(index);
    };

    $scope.order = function () {
        FirebaseService.sortTasks();
    }

    $scope.myFilter = function (item) {
        return false;
    };

});