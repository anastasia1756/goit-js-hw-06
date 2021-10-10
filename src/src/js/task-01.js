const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

const titleEl = document.querySelectorAll('h2');


titleEl.forEach((titleEl, index) => {
    console.log(`Category: ${titleEl.textContent}`);
    // const itemsEl = document.querySelectorAll('li > ul');
    // console.log(itemsEl);
    console.log(`Elements: ${itemsEl.length}`);
  });
// titleEl.forEach(function (titleEl) {
//     console.log(`Category: ${titleEl.textContent}`);
//   });

// const getTitleEl = () => {
//     for (const el of titleEl) {
//         return `Category: ${el.textContent}`;
//     }
// }

// console.log(getTitleEl());
// console.log(getTitleEl());
// console.log(getTitleEl());

// titleEl.forEach = titleEl => console.log(`Category: ${titleEl.textContent}`);
// titleEl.forEach((titleEl, index) => {
//     console.log(`Индекс ${index}, значение ${titleEl.textContent}`);
//   });