'use strict';

describe('Service: power', function () {

  // load the service's module
  beforeEach(module('webappApp'));

  // instantiate service
  var power;
  beforeEach(inject(function (_power_) {
    power = _power_;
  }));

  it('should do something', function () {
    expect(!!power).toBe(true);
  });

});
