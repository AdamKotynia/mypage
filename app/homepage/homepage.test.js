'use strict';

describe('myApp.homepage module', function() {

  beforeEach(module('myApp.homepage'));

  var homePageService;
  beforeEach(inject(function(_homePageService_) {
    homePageService = _homePageService_;
  }));

  describe('homepage controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });

  describe('homepage service', function() {
    var
  })
});