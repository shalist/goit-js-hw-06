// визначаємо всі "li" з класом "item" в загальному "ul"
const items = document.querySelectorAll("ul#categories > li.item").length;
// пребираємо кожен елемент наших елементів за допомогою "ForEach"
items.forEach((item) => {
    // створюємо змінну "titleName", яка показує назву секції
    const titleName = item.querySelector("h2").textContent;
    // створюємо змінну "numberOfElements", яка рахує кількість елементів в секції
    const numberOfElements = item.querySelectorAll("ul li").length;
})
