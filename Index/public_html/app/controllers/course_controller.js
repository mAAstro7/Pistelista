KurssiApp.controller('KurssiController', function ($scope) {
    $scope.kurssit = [];
    $scope.students = [];


    $scope.removeAllCourses = function () {
        $scope.kurssit = [];
    };

    $scope.addKurssi = function () {
        if ($scope.newKurssi !== '') {
            $scope.kurssit.push({
                task: $scope.newKurssi,
                op: $scope.newKurssiNopat
            });

            $scope.newKurssi = '';
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