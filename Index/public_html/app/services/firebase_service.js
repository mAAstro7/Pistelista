CourseApp.service('FirebaseService', function ($firebase) {
    var firebaseRef = new Firebase('https://glowing-fire-807.firebaseio.com/courses');
    var sync = $firebase(firebaseRef);
    var courses = sync.$asArray();
    
    this.addCourse = function (course) {
        courses.$add(course);
    }
    
    this.getCourses = function () {
        return courses;
    }

});
