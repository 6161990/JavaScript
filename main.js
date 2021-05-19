
const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function (boxEl, index){
  boxEl.classList.add(`order-${index +1}`);
  console.log(index,boxEl);
});

const boxEl = document.querySelector('.box');
//Getter 값을 얻는 용도
console.log(boxEl.textContent); //1

//Setter, 값을 지정하는 용도
boxEl.textContent='boxboxbox!';
console.log(boxEl.textContent); //boxboxbox!
