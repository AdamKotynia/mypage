angular.module('myApp.coffee', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/coffee', {
        templateUrl: 'components/coffee/coffee.html',
        controller: 'CoffeeCtrl'
    });
}])

.controller('CoffeeCtrl', ['$scope', function($scope) {

}]);