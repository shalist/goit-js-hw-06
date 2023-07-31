const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");

// ingredients.forEach(ingredient => {
//   const li = document.createElement("li");
//   li.classList.add("item");
//   li.textContent = ingredient;

//   list.append(li)
// })


const liElements = ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  return li;
});

list.append(...liElements);