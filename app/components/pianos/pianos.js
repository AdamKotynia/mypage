'use strict';

angular.module('myApp.pianos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/pianos', {
        templateUrl: 'components/pianos/pianos.html',
        controller: 'PianosCtrl'
    });
}])

.controller('PianosCtrl', ['$scope', function($scope){

}]);