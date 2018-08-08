// Model

var model = {
  currentCat: null,
  adminVisible: false,
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
    adminView.init();
    adminView.hidden();
  },

  myCurrentCat: function() {
    return model.currentCat;
  },

  //Get the cat array
  myCats: function() {
    return model.cats;
  },

  //Set the current cat
  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  //Increase the counter
  clickCounter: function() {
    model.currentCat.clickCount ++;
    fullView.render();
  },

  adminOn: function() {
    if (model.adminVisible === false) {
      model.adminVisible = true;
      adminView.visible();
    } else if (model.adminVisible === true) {
      model.adminVisible = false;
      adminView.hidden();
    }
  },

  adminOff: function() {
    adminView.hidden();
  },

  updateCat: function() {
    var newName = document.querySelector('.new-name');
    var newImage = document.querySelector('.new-image');
    var newClicks = document.querySelector('.new-clicks');
    model.currentCat.name = newName.value;
    model.currentCat.image = newImage.value;
    model.currentCat.clickCount = newClicks.value;
    fullView.render();
    listView.render();
    adminView.hidden();
  }

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
          octopus.setCurrentCat(catCopy);
          fullView.render();
        };
      })(cat));
      this.allCats.appendChild(list);
    }
  }
};

var fullView = {
  init: function() {

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
  },
};

var adminView = {
  init: function() {
    this.adminButton = document.querySelector('.admin');
    this.newName = document.querySelector('.new-name');
    this.newImage = document.querySelector('.new-image');
    this.newClicks = document.querySelector('.new-clicks');
    this.cancelChange = document.querySelector('.cancel');
    this.saveChanges = document.querySelector('.save');
    var adminArea = document.querySelector('.options');

    this.adminButton.addEventListener('click', function() {
      octopus.adminOn();
    });

    this.cancelChange.addEventListener('click', function() {
      octopus.adminOff();
    });

    this.saveChanges.addEventListener('click', function() {
      octopus.updateCat();
    });
    this.render();
  },

  render:function() {
    var adminArea = document.querySelector('.options');
    var currentCat = octopus.myCurrentCat();
    this.newName.value = currentCat.name;
    this.newImage.value = currentCat.image;
    this.newClicks.value = currentCat.clickCount;
  },

  visible: function() {
    var adminArea = document.querySelector('.options');
    adminArea.style.display = 'block';
  },

  hidden: function() {
    var adminArea = document.querySelector('.options');
    adminArea.style.display = 'none';
  }
};

octopus.init();
