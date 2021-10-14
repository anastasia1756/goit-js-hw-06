const textInput = document.querySelector('#validation-input');

textInput.addEventListener("blur", onInputBlur); 

function onInputBlur() {
    textInput.textContent = event.currentTarget.value;
    const num = Number(textInput.dataset.length);
    if( textInput.textContent.length === num) {
       textInput.classList.add("valid");
       textInput.classList.remove("invalid");
    } else {
      textInput.classList.add("invalid");
    }
};