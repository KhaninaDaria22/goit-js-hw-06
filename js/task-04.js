
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

console.log(decrementBtn);
console.log(incrementBtn);
console.log(counterValue);

const counter = {
    value: 0,
    decrement() {
        console.log('decrement', this);
        this.value -=1;
    },
    increment() {
        console.log('increment', this);
        this.value +=1;
    },
};

decrementBtn.addEventListener('click', function() {
console.log('кликунли на декремент')

counter.decrement()
console.log(counter);

counterValue.textContent = counter.value;
});

incrementBtn.addEventListener('click', function() {

counter.increment()
console.log(counter);
counterValue.textContent = counter.value;

});
