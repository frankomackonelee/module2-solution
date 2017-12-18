(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])

  .controller('ToBuyController', ToBuyController )
  .controller('AlreadyBoughtController', AlreadyBoughtController )
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var itemAdder = this;

    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";

    itemAdder.items = ShoppingListCheckOffService.getToBuy();

    itemAdder.allBought = function(){
      var truthValue = ShoppingListCheckOffService.getToBuy().length==0;
      return truthValue;
    };

    itemAdder.removeItem = function(number){
      ShoppingListCheckOffService.buyItem(number);
    }
  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var showList = this;

    showList.items = ShoppingListCheckOffService.getBought();

    showList.noneBought = function(){
      var truthValue = ShoppingListCheckOffService.getBought().length==0;
      return truthValue;
    }
  }


  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var toBuy = [
      { product:"Shoes",
        quantity: 2},
        { product:"Trousers",
          quantity: 1},
          { product:"Jacket",
            quantity: 1},
            { product:"Socks",
              quantity: 5},
              { product:"Pants",
                quantity: 10},
    ];
    var bought = [];

    service.addItem = function (itemName, quantity) {
      var item = {
        product: itemName,
        quantity: quantity
      };
      items.push(item);
    };

    service.buyItem = function (itemIdex) {
        var item = toBuy[itemIdex];
        bought.push(item);
        toBuy.splice(itemIdex,1);
    };

    service.getToBuy = function () {
      return toBuy;
    };

    service.getBought = function () {
      return bought;
    };
  }

})();
