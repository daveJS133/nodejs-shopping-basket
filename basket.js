var item = require('./item');
var deals = require('./deals');

var basket = {
  basketArray: [],
  grossPrice: 0,
  netPrice: 0,
  addItem: function(item) {
    this.basketArray.push(item);
    this.totalPrice();
  }, 
  
  removeItem: function(item) {
    for (var addedItem of this.basketArray){
      if (addedItem == item){
        this.basketArray.splice(this.basketArray.indexOf(addedItem), 1);
        this.totalPrice();
        break;
      } else {
        console.log("Item not found in basket");
      }
    }
    
  },
  totalPrice: function(){
    this.grossPrice = 0;
    for (var addedItem of this.basketArray){

      this.grossPrice += addedItem.price;
      }
      this.finalPrice();
      return this.grossPrice;
      
  },
  finalPrice: function(){
    this.netPrice = deals.tenPcOff(this.grossPrice);
    this.netPrice = deals.loyaltyDeal(this.netPrice);
    this.netPrice = parseFloat(this.netPrice).toFixed(2);
  }
};



module.exports = basket;