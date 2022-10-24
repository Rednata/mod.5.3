const doc = document;
const olList = doc.querySelector('ol');
const liText = '';

// Функция для добавления элемента списка
const addItem = (liText) => {
  olList.insertAdjacentHTML('beforeend', `<li>${liText}</li>`);

// Что правильнее использовать?? 
  /* const elem = doc.createElement('li');
    elem.textContent = liText;
    olList.append(elem); */
}

// Функция для удаления последнего элемента
const deleteLastItem = (lastItem, ) => {
  lastItem.remove();
}

// Функция для очистки списка
const clearList = (items) => {  
  items.forEach(item => {
    item.remove();
  });  
}

while (liText !== 'exit' || liText === null) {

  let liText = prompt('Введите наименование');

  if (liText === 'exit' || liText === null) {
    break;
  }

  if (
    liText === '' ||
    liText.trim().length === 0
  ) {
    continue;
  }

  if (liText === 'del') {    
    deleteLastItem(olList.lastChild);    

  } else if (liText === 'clear') {    
    clearList(doc.querySelectorAll('li'));

  } else {
    addItem(liText);
  }
}











