angular.module('myApp.cart', ['ui.bootstrap'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/cart', {
            templateUrl: 'components/cart/cart.html',
            controller: 'CartCtrl'
        });
    }])


    .controller('CartCtrl', ['$scope', function ($scope) {

}]);