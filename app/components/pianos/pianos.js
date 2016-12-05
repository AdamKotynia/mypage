'use strict';

angular.module('myApp.pianos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/pianos', {
        templateUrl: 'components/pianos/pianos.html',
        controller: 'PianosCtrl'
    });
}])

.controller('PianosCtrl', ['$scope', 'dataService', 'cartService', function($scope, dataService, cartService){
    dataService.async().then(function(d) {
        $scope.data = d.data;
    });
    $scope.add = function(id){
        cartService.addProduct(id);
    };

}]);