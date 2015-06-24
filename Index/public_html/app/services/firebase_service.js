CourseApp.service('FirebaseService', function ($firebase) {
    var firebaseRef = new Firebase('https://glowing-fire-807.firebaseio.com/courses');
    var sync = $firebase(firebaseRef);
    var courses = sync.$asArray();
    
    var firebaseReference = new Firebase('https://glowing-fire-807.firebaseio.com/students');
    var sync = $firebase(firebaseReference);
    var students = sync.$asArray();
    
    this.addCourse = function (course) {
        courses.$add(course);
    }
    
    this.getCourses = function () {
        return courses;
    }
    
      this.removeCourse = function (task) {
        courses.$remove(task);
    }
    
    this.sortCourses = function() {
        //jotain tänne
    }
    

    this.addStudent = function (student) {
        students.$add(student);
    }
    
    this.getStudents = function () {
        return students;
    }
    
});
