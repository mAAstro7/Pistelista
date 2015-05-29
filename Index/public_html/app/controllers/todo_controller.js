TodoApp.controller('TodoController', function ($scope) {
    $scope.kurssit = [];
    $scope.todosDone = 0;

    /*
     *	Mark all todos as done
     */
    $scope.allTodosDone = function () {
        $scope.kurssit.forEach(function (todo) {
            todo.done = true;
            $scope.todosDone++;
        });
    };

    /*
     *	Remove all todos
     */
    $scope.removeAllTodos = function () {
        $scope.kurssit = [];
    };

    /*
     *	Add a todo. The task of the todo is the value of the newTodo variable
     */
    $scope.addTodo = function () {
        if ($scope.newKurssi !== '') {
            $scope.kurssit.push({
                task: $scope.newKurssi,
                op: $scope.newKurssiNopat,
            });

            $scope.newKurssi = '';
            $scope.order();
        }
    };

    /*
     *	Remove a todo from the given index
     */
    $scope.removeTodo = function (index) {
        $scope.kurssit.splice(index, 1);
        $scope.order();
    };

    /*
     *	Sorts todos by the priority value
     */
    $scope.order = function () {
        $scope.kurssit.sort(function (a, b) {
            return a.priority - b.priority
        });
    }

    $scope.$watch('todos', function (newTodos, oldTodos) {
        var todosDone = 0;

        newTodos.forEach(function (todo) {
            if (todo.done) {
                todosDone++;
            }
        });

        $scope.todosDone = todosDone;
    }, true);
});