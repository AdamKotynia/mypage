'use strict';

angular.module('myApp.cameras', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cameras', {
    templateUrl: 'components/cameras/cameras.html',
    controller: 'CamerasCtrl'
  });
}])

.controller('CamerasCtrl', [function() {

}]);