const quantityEl = document.querySelectorAll('.item');

console.log(`В списке ${quantityEl.length} категории.`);

quantityEl.forEach((item) => {
  console.log(`Категория: ${item.querySelector(`h2`).textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll(`li`).length}`)
});

