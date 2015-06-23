KurssiApp.controller('KurssiController', function ($scope) {
    $scope.kurssit = [];
    $scope.students = [];


    $scope.removeAllCourses = function () {
        $scope.kurssit = [];
    };

    $scope.addTehtava = function () {
        if ($scope.newTehtava !== '') {
            $scope.kurssit.push({
                task: $scope.newTehtava,
                op: $scope.newKurssiNopat
            });

            $scope.newTehtava = '';
            $scope.newKurssiNopat = '';

        }
    };

    $scope.addStudent = function () {
        if ($scope.newStudent !== '') {
            $scope.students.push({
                name: $scope.newStudent
            });

            $scope.newStudent = '';

        }
    };
    
    $scope.removeKurssi = function (index) {
        $scope.kurssit.splice(index, 1);
        $scope.order();
    };

});