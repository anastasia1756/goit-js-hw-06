const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(category => {
    const titleEl = category.querySelector('h2');
    const itemsEl = category.querySelectorAll('li');
    console.log("Category: ", titleEl.textContent);
    console.log("Elements: ", itemsEl.length);
}
);
