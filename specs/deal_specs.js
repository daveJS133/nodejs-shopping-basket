var assert = require('assert');
var basket = require('../basket');
var item = require('../item');
var deals = require('../deals');

describe('deals', function(){
  it('can get ten percent off', function(){
    basket.addItem(item.coffee);
    basket.addItem(item.coffee);
    basket.addItem(item.coffee);
    basket.addItem(item.coffee);
    basket.addItem(item.coffee);
    basket.addItem(item.coffee);
    basket.addItem(item.coffee);
    basket.addItem(item.coffee);
    basket.addItem(item.coffee);
    basket.totalPrice();
    console.log(basket.totalPrice());
    assert.equal(21.29, basket.netPrice);
  });
  it('can reduce by five percent for loyalty', function(){
    assert.equal(21.29, basket.netPrice);
  });
});