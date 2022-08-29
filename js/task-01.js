// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
 


const refs = {
    menuItemsByTagName: document.querySelectorAll("li.item"),
    categoryName: document.querySelectorAll('h2'),
    categoryTypes: document.querySelectorAll('.item ul')

};
console.log(`Number of categories: ${refs.menuItemsByTagName.length}`);

refs.menuItemsByTagName.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
   console.log(`Elements: ${item.querySelectorAll('.item li').length}`)

    
})

 


