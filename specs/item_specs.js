var assert = require('assert');
var item = require('../item');

describe('item', function(){
  it('should have price', function(){
   assert.equal(2.49, item.coffee.price);
  });

  

});

