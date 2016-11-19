'use strict';

describe('myApp.homepage module', function() {

  beforeEach(module('myApp.homepage'));

  var $controller;

  //beforeEach(inject(function(_$controller_) {
  //  $controller = _$controller_;
  //}));

  var homePageService;
  beforeEach(inject(function(_homePageService_) {
    homePageService = _homePageService_;
  }));

  describe('homepage controller', function(){

    it('should ....', inject(function($controller) {
      var homepagectrl = $controller('HomePageCtrl');
      expect(homepagectrl).toBeDefined();
    }));

  });

  describe('homepage service', function() {
    it('should', inject(function(homePageService, $controller) {
      var $scope = {};
      var controller = $controller('HomePageCtrl', {$scope: $scope});
      expect($scope.slides.length).toEqual(4);
    }));
  });
});