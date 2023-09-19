const inputBtn = document.querySelector("#validation-input");
console.dir(inputBtn);

inputBtn.addEventListener("blur", oninputBlur);
const maxLength = inputBtn.getAttribute('data-length');


function oninputBlur() {
    const inputValue = inputBtn.value;
    if(inputValue.trim().length === Number(maxLength)) {
        inputBtn.classList.remove('invalid');
        inputBtn.classList.add('valid');
    } else {
        inputBtn.classList.remove('valid');
        inputBtn.classList.add('invalid');
    }
}

