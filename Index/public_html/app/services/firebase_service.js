CourseApp.service('FirebaseService', function ($firebase) {
    var firebaseRef = new Firebase('https://glowing-fire-807.firebaseio.com/tasks');
    var sync = $firebase(firebaseRef);
    var tasks = sync.$asArray();

    var firebaseReference = new Firebase('https://glowing-fire-807.firebaseio.com/students');
    var sync = $firebase(firebaseReference);
    var students = sync.$asArray();


    this.addTask = function (task) {

        tasks.$add(task);

    }


    this.getTasks = function () {
        return tasks;
    }

 
    this.removeTask = function (task) {
        tasks.$remove(task);
    }
    
      this.removeStudent = function (student) {
        students.$remove(student);
    }

    this.sortTasks = function () {
        //jotain tänne
    }


    this.addStudent = function (student) {
        students.$add(student);
    }

    this.getStudents = function () {
        return students;
    }

});
