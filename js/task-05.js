const inputEl = document.querySelector('#name-input');
console.dir(inputEl);
const spanEl = document.querySelector('#name-output');
console.log(spanEl.textContent);

function currentName(event) {
    const input = event.currentTarget;
    
    if (input.value == ""){
        spanEl.textContent = "Anonymous"
    } else {
        spanEl.textContent = input.value;
    }
}

inputEl.addEventListener("input", currentName);