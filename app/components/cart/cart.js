angular.module('myApp.cart', ['ui.bootstrap'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/cart', {
            templateUrl: 'components/cart/cart.html',
            controller: 'CartCtrl'
        });
    }])


    .controller('CartCtrl', ['$scope', 'cartService', 'dataService', function ($scope, cartService, dataService) {
        dataService.async().then(function(d) {
            $scope.data = d.data;
        });
        $scope.cart = cartService.getCart();
        console.log($scope.cart)
}]);