const items = document.querySelectorAll("ul#categories > li.item").length;
items.forEach((item) => {
    const titleName = item.querySelector("h2").textContent;
    const numberOfElements = item.querySelectorAll("ul li").length;
})
