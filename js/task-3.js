const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const inputText = event.target.value.trim();

  nameOutput.textContent = inputText ? inputText : "Anonymous";
});
