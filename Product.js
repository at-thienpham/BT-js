var products = [{
  id: '1',
  name: 'San pham 1',
  describe: 'Mo ta san pham 1',
  img: 'images/1.png',
  price: '&dollar;100000',
},
{
  id: '2',
  name: 'San pham 2',
  describe: 'Mo ta san pham 2',
  img: 'images/2.png',
  price: '&dollar;200000',
},
{
  id: '3',
  name: 'San pham 3',
  describe: 'Mo ta san pham 3',
  img: 'images/3.png',
  price: '&dollar;300000',
},
{
  id: '4',
  name: 'San pham 4',
  describe: 'Mo ta san pham 4',
  img: 'images/4.png',
  price: '&dollar;400000',
},
{
  id: '5',
  name: 'San pham 5',
  describe: 'Mo ta san pham 5',
  img: 'images/5.png',
  price: '&dollar;500000',
},
{
  id: '6',
  name: 'San pham 6',
  describe: 'Mo ta san pham 6',
  img: 'images/6.png',
  price: '&dollar;600000',
},
{
  id: '7',
  name: 'San pham 7',
  describe: 'Mo ta san pham 7',
  img: 'images/7.png',
  price: '&dollar;700000',
},
{
  id: '8',
  name: 'San pham 8',
  describe: 'Mo ta san pham 1',
  img: 'images/8.png',
  price: '&dollar;800000',
}
];

localStorage.setItem("productvalue", JSON.stringify(products));
var item = [];
item = JSON.parse(localStorage.getItem('productvalue'));

var ul = document.getElementById('listproduct');
var properties = ['id', 'img', 'name', 'describe', 'price'];

function displayTable() {
  for (var i = 0; i < item.length; i++) {
    var product = item[i];
    var row = document.createElement('li');  
    var image = document.createElement('div');
    var name = document.createElement('p');
    var describe = document.createElement('p');
    var price = document.createElement('p');
    var btnadd = document.createElement('div');
    image.innerHTML = ('<img src=" ' + product[properties[1]] + ' ">');
    name.innerHTML = product[properties[2]];
    describe.innerHTML = product[properties[3]];
    price.innerHTML = product[properties[4]];
    btnadd.innerHTML = ('<button id="'+product[properties[0]]+'" onclick="addCart('+product[properties[0]]+')" class="btn-primary">Add to cart</button>');

    row.appendChild(image);
    row.appendChild(name);
    row.appendChild(describe);
    row.appendChild(price);
    row.appendChild(btnadd);
    ul.appendChild(row);
  }
}
displayTable();

var count = 0;
var addToCart = [];
function addCart(x) {
  count += 1;
  document.getElementById("count").innerHTML = count;
  
  addToCart.push(products[x-1]);
  localStorage.setItem('add-cart', JSON.stringify(addToCart));
  var getAddCart= [];
  getAddCart = JSON.parse(localStorage.getItem('add-cart'));
}

var btnClick = document.getElementsByClassName('btn-primary');
for (var i = 0; i < btnClick.length; i++) {
  var indexBtn = btnClick[i];
  indexBtn.addEventListener('click', function() {
    event.target.setAttribute('disabled', 'disabled');
  });
}
