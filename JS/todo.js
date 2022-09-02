let todo = angular.module("myTodo",[]);

todo.controller("myCtrl",function($scope){
    var workers = [
        {
            sno: 1,
            assigned:"Ashik",
            task:"abc",
            status:"not completed"
        },
        {
            sno: 2,
            assigned:"Ashik",
            task:"abc",
            status:"not completed"
        },
        {
            sno: 3,
            assigned:"Janarthanan",
            task:"abc",
            status:"not completed"
            },
        {
            sno: 4,
            assigned:"Karunagaran",
            task:"abc",
            status:"not completed"
            },
        {
            sno: 5,
            assigned:"Manoj",
            task:"abc",
            status:"not completed"
            },
        {
            sno: 6,
            assigned:"Vignesh",
            task:"abc",
            status:"not completed"
        },
        {
            sno: 7,
            assigned:"Yuvan",
            task:"abc",
            status:"not completed"
        }   
    ];
    $scope.workers = workers;
});

