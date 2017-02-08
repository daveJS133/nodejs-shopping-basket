var assert = require('assert');
var basket = require('../basket');
var item = require('../item');

describe('basket', function(){
  it('should be empty', function(){
   assert.equal(0, basket.basketArray.length);
  });
  it('can add item', function(){
    basket.addItem(item.coffee);
   assert.equal(1, basket.basketArray.length);
  });
  it('can remove item', function(){
    basket.addItem(item.coffee);
    basket.removeItem(item.coffee);
   assert.equal(1, basket.basketArray.length);
  });

  it('can total price', function(){
    assert.equal(2.49, basket.totalPrice());
  });

  
});


