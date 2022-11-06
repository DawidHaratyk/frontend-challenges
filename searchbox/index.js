const inputElement = document.querySelector(".main-input");
const clearValueButton = document.querySelector(".clear-btn");
const colorsContainer = document.querySelector(".colors-container");

const colorsList = [
  "black",
  "red",
  "blue",
  "white",
  "purple",
  "brown",
  "orange",
  "green",
  "gray",
  "beige",
];

const handleChangeTextColor = (e) => {
  e.target.style.color = "green";
};

for (let i = 0; i < colorsList.length; i++) {
  const liElement = document.createElement("li");
  liElement.textContent = colorsList[i];
  colorsContainer.append(liElement);

  liElement.addEventListener("click", (e) => handleChangeTextColor(e));
}

const handleInputValueChange = (e) => {
  const currentQuery = e.target.value.toLowerCase();
  const liElements = Array.from(document.querySelectorAll("li"));

  const filteredColors = liElements.filter((liElement) => {
    if (liElement.textContent.toLowerCase().includes(currentQuery)) {
      liElement.style.display = "list-item";
      return liElement;
    } else {
      liElement.style.display = "none";
    }
  });

  document.title = filteredColors.length
    ? filteredColors[0].textContent
    : "There is no matching color :|";
};

const handleClearInputValue = () => {
  inputElement.value = "";
  const liElements = Array.from(document.querySelectorAll("li"));
  liElements.map((liElement) => (liElement.style.display = "list-item"));
  document.title = "Document";
};

inputElement.addEventListener("input", (e) => handleInputValueChange(e));
clearValueButton.addEventListener("click", handleClearInputValue);
