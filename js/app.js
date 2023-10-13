// app.js
const clickText = document.getElementById('amount');
const clickBtn = document.querySelector('.click');
const store = document.getElementById('store');

let clickValue = 0;
let increment = 1;
let items = [
   { price: 10, multiplier: 2 },
   { price: 20, multiplier: 4 },
   { price: 40, multiplier: 6 },
   { price: 50, multiplier: 10 }
];

clickBtn.addEventListener('click', () => {
   incrementClick(increment);
});

const incrementClick = (increment) => {
   clickValue += increment;
   clickText.textContent = clickValue;
}

const updateStore = () => {
   store.innerHTML = '';
   items.forEach((item, index) => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('click__item');
      itemElement.innerHTML = `
         <span class="click__price">${item.price}</span>
         <button class="click__choose" data-index="${index}">x${item.multiplier}</button>
      `;
      store.appendChild(itemElement);
   });
}

const buyItem = (index) => {
   const item = items[index];
   if (clickValue >= item.price) {
      clickValue -= item.price;
      increment = item.multiplier;
      clickText.textContent = clickValue;
      items.splice(index, 1);
      updateStore();
   } else {
      alert('Not enough coins');
   }
}

store.addEventListener('click', (e) => {
   if (e.target.classList.contains('click__choose')) {
      const index = e.target.dataset.index;
      buyItem(index);
   }
});

updateStore();
