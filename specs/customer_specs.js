var assert = require('assert');
var customer = require('../customer');

describe('customer', function(){
  it('should get loyalty', function(){
    assert.equal(true, customer.getLoyalty());
  });
});
