const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const menuEl = document.querySelector('#ingredients');
ingredients.forEach(function (ingredient) {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = `${ingredient}`;
  menuEl.append(listEl);
});