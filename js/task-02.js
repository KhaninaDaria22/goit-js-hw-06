const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const liEl = document.createElement('li');
liEl.textContent = 'Potatoes';
liEl.classList.add('item');

const liEl2 = document.createElement('li');
liEl2.textContent = 'Mushrooms';
liEl2.classList.add('item');

const liEl3 = document.createElement('li');
liEl3.textContent = 'Garlic';
liEl3.classList.add('item');

const liEl4 = document.createElement('li');
liEl4.textContent = 'Tomatos';
liEl4.classList.add('item');

const liEl5 = document.createElement('li');
liEl5.textContent = 'Herbs';
liEl5.classList.add('item');

const liEl6 = document.createElement('li');
liEl6.textContent = 'Condiments';
liEl6.classList.add('item');

list.append(liEl, liEl2, liEl3, liEl4, liEl5, liEl6);

console.log(list);