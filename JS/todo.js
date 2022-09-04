var todo = angular.module("myTodo",["ui.router"]);

todo.config(["$stateProvider",function($stateProvider,$locationProvider,$urlRouterProvider){
    $stateProvider
    .state('page2', {
        url: '/page2',
        templateUrl :"page2.html",
        controller : "page1controller"
    })
    .state("page1",{
        url: "/page1",
        templateUrl: "page1.html",
        controller: "myCtrl",
    });
    // $urlRouterProvider.otherwise('/')
}]);

todo.controller("myCtrl",function($scope,$state){
    $scope.secondFunction = function(){
        $state.go("page1");
    };
});
todo.controller("page1controller",function($scope,$state){
    $scope.firstFunction = function(){
        $state.go("page2");
    }
    let names = [
        {names: ""},
        {names:"Ashiq"},
        {names:"Ashik"},
        {names:"Janarthanan"},
        {names:"Karunakaran"},
        {names:"Manoj"},
        {names:"Vignesh"},
        {names:"Yuvan"}
    ];
    $scope.names = names;
    // document.addEventListener('DOMContentLoaded', function() {
    //     var elems = document.querySelectorAll('.datepicker');
    //     var instances = M.Datepicker.init(elems);
    //     console.log(instances);
    //     elems.datepicker();
    //     elems.setDate(new Date());
    //     console.log(elems);
    //   });
});
todo.controller("page2controller",function($scope,$state){
    let workers = [
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





  









