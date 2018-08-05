function Cat (name, img) {
  this.name = name;
  this.img = img;
  counter = 0;
}

const catOne = new Cat('Sylvester', 'images/tongue.jpg');
const catTwo = new Cat('Oreo', 'images/oreo.jpg');
const catThree = new Cat('Tigress', 'images/tigress.jpg');
const catFour = new Cat('Sneaky Pete', 'images/sneaky-pete.jpg');
const catFive = new Cat('Ivan', 'images/ivan.jpg');
var allCats = [catOne, catTwo, catThree, catFour, catFive];

function catList() {
  for (var i = 0; i < allCats.length; i++) {

    // This is the number we're on...
    var cat = allCats[i];

    // We're creating a DOM element for the number
    var list = document.createElement('li');
    list.textContent = cat.name;

    // ... and when we click, alert the value of `num`
    list.addEventListener('click', (function(catCopy) {
        return function() {
          list.innerHTML = `<div>
            <h4>Cat Name: <span class='name-one'>${cat.name}</span>
            <img class='cat1' src=${cat.img} alt='cat-tongue'>
            <p>Cat Clicked: <span class='counter1'>0</span></p>
          </div>`;
        };
        return catCopy();
    })(cat));

    // finally, let's add this element to the document
    document.body.appendChild(list);
  };
};

catList();

var myCat1 = document.querySelector('.cat1');
//const myCat2 = document.querySelector('.cat2');
let count1 = 0;
//let count2 = 0;

myCat1.addEventListener('click', function(){
    clickCountOne();
}, false);

//myCat2.addEventListener('click', function(){
//    clickCountTwo();
//}, false);

//let catNameOne = document.querySelector('.name-one');
//let catNameTwo = document.querySelector('.name-two');

//function addNameOne() {
//  let kittyOne = "Sylvester";
//  catNameOne.innerHTML = kittyOne;
//};

//function addNameTwo() {
//  let kittyTwo = "Oreo";
//  catNameTwo.innerHTML = kittyTwo;
//};

//addNameOne();
//addNameTwo();

//Clicks counter
let clickCounterOne = document.querySelector('.counter1');
//let clickCounterTwo = document.querySelector('.counter2');

function clickCountOne() {
  count1 +=1;
  clickCounterOne.innerHTML = count1;
};

//function clickCountTwo() {
//  count2 +=1;
//  clickCounterTwo.innerHTML = count2;
//};
