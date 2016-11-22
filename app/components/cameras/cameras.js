'use strict';

angular.module('myApp.cameras', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cameras', {
    templateUrl: 'components/cameras/cameras.html',
    controller: 'CamerasCtrl'
  });
}])

.controller('CamerasCtrl',['camerasService', '$scope', function(camerasService, $scope) {
  this.cameras = camerasService.cameras;

}]);