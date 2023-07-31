const items = document.querySelectorAll("ul#categories > li.item");
console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
    const titleName = item.querySelector("h2").textContent;
    const numberOfElements = item.querySelectorAll("ul li").length;
    console.log(`Category: ${titleName}`);
    console.log(`Elements: ${numberOfElements}`);
})

