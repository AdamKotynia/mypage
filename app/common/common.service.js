'use strict';

angular.module("myApp.common")
.factory('dataService', ['$http', function($http) {
    return {
        async: function() {
            return $http.get('../src/data.json');
        }
    };
}])
.service('cartService', function(){
    this.cart = [];

    this.addProduct = function(id) {
        if (this.cart.length == 0) {
            this.cart.push({id: id, quantity: 1});
            return;
        }
        for (var i = 0; i < this.cart.length; i++) {
            if (id = i.id) {
                i.quantity++;
                return;
            }
            else {
                //this.cart.push({id: id, quantity: 1});
                //TODO: Read about break and return, figure this function out
            }
        }

    };

    this.getCart = function() {
        return this.cart;
    }
}); 