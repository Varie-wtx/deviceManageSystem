'use strict';

describe('Filter: yunzhiSex', function () {

  // load the filter's module
  beforeEach(module('webappApp'));

  // initialize a new instance of the filter before each test
  var yunzhiSex;
  beforeEach(inject(function ($filter) {
    yunzhiSex = $filter('yunzhiSex');
  }));

  it('should return the input prefixed with "yunzhiSex filter:"', function () {
    var text = 'angularjs';
    expect(yunzhiSex(text)).toBe('yunzhiSex filter: ' + text);
  });

});
