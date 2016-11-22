angular.module('myApp.cameras')

.service('camerasService', function() {
    this.cameras = [
        {
            ID: '1',
            name: 'camera',
            price: 300
        },
        {
            ID: '2',
            name: 'super camera',
            price: 500
        },
        {
            ID: '3',
            name: 'super duper camera',
            price: 1000
        }
    ];
});