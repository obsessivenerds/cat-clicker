const myCat = document.getElementById('cat');
let count = 0;

myCat.addEventListener('click', function(){
    clickCount();
}, false);

//Clicks counter
let clickCounter = document.querySelector('.counter');

function clickCount() {
  count +=1;
  clickCounter.innerHTML = count;
};
