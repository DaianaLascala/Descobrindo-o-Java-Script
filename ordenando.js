// swap
const swap = (array, posicao1, posicao2) => {
  const temp = array[posicao1];
  array[posicao1] = array[posicao2];
  array[posicao2] = temp;
};

// shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}

// bubble_sort
const bubble_sort = (array) => {
  const len = array.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
};

// selection_sort
const selection_sort = (array) => {
  const len = array.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(array, i, minIndex);
    }
  }
};

// quick_sort
const quick_sort = (array, inicio = 0, fim = array.length - 1) => {
  if (inicio < fim) {
    const pivotIndex = particionamento(array, inicio, fim);
    quick_sort(array, inicio, pivotIndex - 1);
    quick_sort(array, pivotIndex + 1, fim);
  }
};

// particionamento
const particionamento = (array, inicio, fim) => {
  const pivot = array[fim];
  let i = inicio - 1;
  for (let j = inicio; j < fim; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, fim);
  return i + 1;
};

function add() {
  var valor = document.getElementById("valor").value;
  var ul = document.getElementById("valores");
  var node = document.createElement("li");
  var textNode = document.createTextNode(valor);
  node.appendChild(textNode);
  ul.appendChild(node);
}

function ordenar() {
  var ul = document.getElementById("valores");
  var select = document.getElementById("metodoOrdenacao");
  var valores = Array.from(ul.children).map(item => parseFloat(item.textContent));
  var metodo = select.value;

  if (metodo === "bubble") {
      bubble_sort(valores);
  } else if (metodo === "selection") {
      selection_sort(valores);
  } else if (metodo === "quick") {
      quick_sort(valores);
  }

  ul.innerHTML = valores.map(item => "<li>" + item + "</li>").join("");
}

function misturar() {
  var ul = document.getElementById("valores");
  var valores = Array.from(ul.children).map(item => parseFloat(item.textContent));
  
  if (valores.length > 0) {
    shuffle(valores);
    ul.innerHTML = valores.map(item => "<li>" + item + "</li>").join("");
  }
}