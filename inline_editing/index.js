const inputElement = document.querySelector(".main-input");

const handleTextClick = (e) => {
  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.classList.add("main-input");
  inputElement.value = e.target.textContent;

  e.target.replaceWith(inputElement);
  inputElement.focus();

  inputElement.addEventListener("focusout", (e) => changeInputToText(e));
  inputElement.addEventListener("keyup", (e) => handleKeyUpAction(e));
};

const changeTextToInput = (textElement) => {
  textElement.addEventListener("click", (e) => handleTextClick(e));
};

const changeInputToText = (e) => {
  const inputValue = e.target.value;
  if (inputValue) {
    const textElement = document.createElement("h1");
    textElement.textContent = inputValue;
    e.target.replaceWith(textElement);
    changeTextToInput(textElement);
  }
};

const handleKeyUpAction = (e) => {
  if (e.key === "Enter") {
    e.target.blur();
    changeInputToText(e);
  }
};

inputElement.addEventListener("keyup", (e) => handleKeyUpAction(e));
