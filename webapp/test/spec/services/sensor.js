'use strict';

describe('Service: sensor', function () {

  // load the service's module
  beforeEach(module('webappApp'));

  // instantiate service
  var sensor;
  beforeEach(inject(function (_sensor_) {
    sensor = _sensor_;
  }));

  it('should do something', function () {
    expect(!!sensor).toBe(true);
  });

});
