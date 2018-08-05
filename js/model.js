// Model

var model = {
  currentCat: null,
  cats: [
    {
      name: 'Sylvester',
      image: 'images/tongue.jpg',
      clickCount: 0,
    },
    {
      name: 'Oreo',
      image: 'images/oreo.jpg',
      clickCount: 0,
    },
    {
      name: 'Tigress',
      image: 'images/tigress.jpg',
      clickCount: 0,
    },
    {
      name: 'Sneaky Pete',
      image: 'images/sneaky-pete.jpg',
      clickCount: 0,
    },
    {
      name: 'Ivan',
      image: 'images/ivan.jpg',
      clickCount: 0,
    }
  ]
};

// Octopus

var octopus = {
  init: function() {
    model.currentCat = model.cats[0];
    listView.init();
    fullView.init();
  },

  myCurrentCat: function() {
    return model.currentCat;
  },

  //Get the cat array
  myCats: function() {
    return model.cats;
  },

  //Set the current cat
  currentCat: function(cat) {
    model.currentCat = cat;
  },

  //Increase the counter
  clickCounter: function() {
    model.currentCat.clickCount ++;
    fullView.render();
  },
};

// View

var listView = {
  init: function() {
    this.allCats = document.querySelector('.cat-list');
    this.render();
  },

  render: function() {
    //Create a variable for the array
    var cats = octopus.myCats();

    this.allCats.innerHTML = '';

    for (i = 0; i < cats.length; i++) {
      cat = cats[i];
      list = document.createElement('li');
      list.textContent = cat.name;

      list.addEventListener('click', (function(catCopy) {
        return function() {
          octopus.currentCat(catCopy);
          fullView.render();
        };
      })(cat));
      this.allCats.appendChild(list);
    }
  }
};

var fullView = {
  init: function() {
    this.catElem = document.querySelector('.cat');
    this.catPic = document.querySelector('.cat-image');
    this.name = document.querySelector('.cat-name');
    this.count = document.querySelector('.counter');

    this.catPic.addEventListener('click', function() {
      //TODO add clickCounter() method
      octopus.clickCounter();
    });
    this.render();
  },

  render: function() {
    var currentCat = octopus.myCurrentCat();

    //TODO add counter method with count variable
    this.count.textContent = currentCat.clickCount;
    this.name.textContent = currentCat.name;
    this.catPic.src = currentCat.image;
  }
};

octopus.init();
