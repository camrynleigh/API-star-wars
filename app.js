var app = angular.module('MyApp', []);

app.controller('MainController', ['$scope', '$http', function ($scope, $http) {
        $http.get('http://swapi.co/api/films/1/').then(function (response) {
         $scope.target = response.data;
     });

}]);