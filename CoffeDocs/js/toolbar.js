// Elements de format de text.
const boldButton = document.getElementById("bold");
const italicButton = document.getElementById("italic");
const underlineButton = document.getElementById("underline");
const fontSizeSelect = document.getElementById("font-size");
const textColorButton = document.querySelector(".text-color");
const textColorPicker = document.querySelector(".text-color-picker");
const markColorButton = document.querySelector(".mark-color");
const markColorPicker = document.querySelector(".mark-color-picker");
const textArea = document.getElementById("text-area");

// Executa una ordre de format i recupera el focus de l'editor.
function applyTextFormat(command, value = null) {
  document.execCommand(command, false, value);
  textArea.focus();
}

// Activa o desactiva la negreta.
function toggleBold() {
  applyTextFormat("bold");
}

// Activa o desactiva la cursiva.
function toggleItalic() {
  applyTextFormat("italic");
}

// Activa o desactiva el subratllat.
function toggleUnderline() {
  applyTextFormat("underline");
}

// Obre el selector de color de text.
function openTextColorPicker() {
  textColorPicker.click();
}

// Aplica el color seleccionat al text.
function changeTextColor() {
  applyTextFormat("foreColor", textColorPicker.value);
}

// Obre el selector de color de ressaltat.
function openMarkColorPicker() {
  markColorPicker.click();
}

// Aplica el color seleccionat com a fons del text.
function changeMarkColor() {
  applyTextFormat("backColor", markColorPicker.value);
}

// Canvia la mida del text seleccionat.
function changeFontSize() {
  const selection = window.getSelection();

  // Evita errors quan no existeix cap rang de selecció.
  if (!selection.rangeCount || !selection.toString()) {
    textArea.focus();
    return;
  }

  const range = selection.getRangeAt(0);
  const span = document.createElement("span");

  // Assigna la mida seleccionada en píxels.
  span.style.fontSize = `${fontSizeSelect.value}px`;

  // Envolta el text seleccionat amb l'element span.
  range.surroundContents(span);
  textArea.focus();
}

//botons de format.
boldButton.addEventListener("click", toggleBold);
italicButton.addEventListener("click", toggleItalic);
underlineButton.addEventListener("click", toggleUnderline);

//color.
textColorButton.addEventListener("click", openTextColorPicker);
textColorPicker.addEventListener("input", changeTextColor);

markColorButton.addEventListener("click", openMarkColorPicker);
markColorPicker.addEventListener("input", changeMarkColor);

//mida de lletra.
fontSizeSelect.addEventListener("change", changeFontSize);
