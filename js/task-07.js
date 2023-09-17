const inputEl = document.querySelector('#font-size-control');
console.dir(inputEl);
const spanEl = document.querySelector('#text');
console.dir(spanEl);

spanEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', inputHadler)

function inputHadler(event) {
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
};

