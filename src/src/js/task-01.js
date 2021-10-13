const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

const itemsEl = document.querySelectorAll('.item > ul');  
const titleEl = document.querySelectorAll('h2');

console.log(`Category: ${titleEl[0].textContent}`);
console.log(`Elements: ${itemsEl[0].children.length}`);

console.log(`Category: ${titleEl[1].textContent}`);
console.log(`Elements: ${itemsEl[1].children.length}`);

console.log(`Category: ${titleEl[2].textContent}`);
console.log(`Elements: ${itemsEl[2].children.length}`);
