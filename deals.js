var deals = {
  tenPcOff: function(totalPrice) {
    var totalPrice;
    var finalPrice = totalPrice -= (totalPrice/10);
      return finalPrice;
  },
  loyaltyDeal: function(totalPrice) {
    var totalPrice;
    var finalPrice = totalPrice -= (totalPrice/20);
      return finalPrice;
  }
}

module.exports = deals;