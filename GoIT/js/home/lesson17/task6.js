function createTree(container, data) {
  container.innerHTML = innerText(data);
};

function innerText(data) {
  var li = '';
  for (var key in data) {
    li += '<li>' + key + innerText(data[key]) + '</li>';
  }
  if (li) {
    var ul = '<ul>' + li + '</ul>';
  }
  return ul || '';
};


var data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

var container = document.getElementById('container');
createTree(container, data);