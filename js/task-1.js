document.addEventListener("DOMContentLoaded", () => {
const categoriesList = document.querySelector("#categories");
const items = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
  });
