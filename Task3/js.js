var goods = {
  12321 : {
   "name": "Перфоратор",
   "producer" : "Bosch",
   "name2" : "BFG 3000",
   "cost_1" : 3550,
   "cost_2" : 3394,
   "batteries" : 1,
   "image" : "bosch3000.jpg",
   "new" : 0
  },
  12322 : {
   "name": "Перфоратор",
   "producer" : "Bosch",
   "name2" : "BFG 6000",
   "cost_1" : 3500,
   "cost_2" : 2500,
   "batteries" : 1,
   "image" : "bosch6000.jpg" ,
   "new" : 1
  },
  12323 : {
   "name": "Перфоратор",
   "producer" : "Bosch",
   "name2" : "BFG 2900",
   "cost_1" : 3700,
   "cost_2" : 3491,
   "batteries" : 1,
   "image" : "bosch2900.jpg",
   "new" : 0
  },
  12324 : {
   "name": "Перфоратор",
   "producer" : "TexAc",
   "name2" : "TA-01-352",
   "cost_1" : 1399,
   "cost_2" : 1279,
   "batteries" : 1,
   "image" : "tex352.jpg",
   "new" : 0
  },
  12325 : {
   "name": "Перфоратор",
   "producer" : "Craft",
   "name2" : "CBH 1100",
   "cost_1" : 2250,
   "cost_2" : 1550,
   "batteries" : 1,
   "image" : "craft1110.jpg",
   "new" : 1
  },
  76423 : {
   "name": "Перфоратор",
   "producer" : "Днепр-М",
   "name2" : "ПЕУ-2485",
   "cost_1" : 1199,
   "cost_2" : 1069,
   "batteries" : 0,
   "image" : "dnepr85.jpg",
   "new" : 0
  },
   76424 : {
   "name": "Перфоратор",
   "producer" : "Титан",
   "name2" : "БП75-24",
   "cost_1" : 0,
   "cost_2" : 1285,
   "batteries" : 0,
   "image" : "titan.jpg",
   "new" : 1
  },
   76425 : {
   "name": "Перфоратор",
   "producer" : "Metabo",
   "name2" : "KHE 2444",
   "cost_1" : 4434,
   "cost_2" : 3299,
   "batteries" : 0,
   "image" : "metabo.jpg",
   "new" : 0
  }
};

// console.log(goods);

var SKU_info="";
for (var key in goods) {
  SKU_info += '<div class="SKU_details">';
  SKU_info += '<img class = "img" src="images/' + goods[key].image + '" alt="!">';
  SKU_info += '<p class="name">' + goods[key].name + '</p>';
  SKU_info += '<p class="producer">' + goods[key].producer + '</p>';
  SKU_info += '<p class="name2">' + goods[key].name2 + '</p>';
  SKU_info += '<p class="cost_1">' + goods[key].cost_1 + '</p>';
  SKU_info += '<p class="cost_2">' + goods[key].cost_2 + '</p>';
  SKU_info += '</div>';
  document.querySelector('.SKU_info').innerHTML = SKU_info;
}
console.log(document.querySelector('#range').value);
document.querySelector('#range').onchange = priceLimit;
function priceLimit() {
  var cost_2_limit = document.querySelector('#range').value;
  SKU_info = "";
  for (var key in goods) {
    if (goods[key].cost_2<cost_2_limit) {
      console.log(cost_2_limit);
SKU_info += '<img class="image" src="images/' + goods[key].image + '" alt="!">' + '<p class="name">' + goods[key].name + '</p>' + '<p class="producer">' + goods[key].producer + '</p>' + '<p class="name2">' + goods[key].name2 + '</p>' + '<p class="cost_1">' + goods[key].cost_1 + '</p>' + '<p class="cost_2">' + goods[key].cost_2 + '</p>' + '<p class="batteries">' + goods[key].batteries + '</p>' + '<p class="new">' + goods[key].new + '</p>';
      console.log(SKU_info);
      document.querySelector('.SKU_info').innerHTML = SKU_info;
    }
  }
}
