CourseApp.controller('CourseController', function ($scope, FirebaseService) {

    $scope.tasks = FirebaseService.getTasks();
    $scope.students = FirebaseService.getStudents();
    $scope.currentCourse = FirebaseService.getCurrentCourse();
    $scope.addStudent = function () {
        if ($scope.studentNumber > 0) {
            FirebaseService.addStudent({
                number: $scope.studentNumber,
                points: "",
                course: ""
            });
        } else {
            alert("Tarkista opiskelijanro!!");

        }
    }

    $scope.removeAll = function () {
        FirebaseService.removeAll();
    };

    $scope.addTask = function () {

        if ($scope.courseName != null && $scope.newTask != null) {
            if ($scope.courseName.length !== 0) {
                if ($scope.newTaskPoints > 0) {
                    FirebaseService.addTask({
                        coursename: $scope.courseName,
                        tasks: ({assigment: ({task: $scope.newTask,
                                points: $scope.newTaskPoints})})
                    });
                    FirebaseService.updateCurrentCourse({name: $scope.courseName});
                    $scope.newTask = null;
                    $scope.newTaskPoints = '';
                    $scope.currentCourse = $scope.courseName;

                } else {
                    alert("Tarkistathan maksimipisteet!!");
                }
            } else {
                alert("Muista laittaa kurssin nimi takaisin!");
            }

        } else {
            alert("Muista lisätä kurssille/tehtävälle nimi!!");
        }

    };

    $scope.removeTask = function (index) {
        FirebaseService.removeTask(index);
        $scope.order();
    };

     $scope.getCourse = function () {
 
        return "Ohpe"
    };
    
    $scope.removeStudent = function (index) {
        FirebaseService.removeStudent(index);
    };

    $scope.order = function () {
        FirebaseService.sortTasks();
    }


});