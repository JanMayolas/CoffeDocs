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

// Canvia la mida de la lletra del text seleccionat i recupera el focus de l'editor.
function changeFontSize() {

const selection = window.getSelection();

if (!selection.rangeCount) {
    // ...
    return;
}

const range = selection.getRangeAt(0);

const spans = [];


const walker = document.createTreeWalker(
    range.commonAncestorContainer.parentElement,
    NodeFilter.SHOW_ELEMENT
);

let node = walker.nextNode();

while (node) {
  if (node.tagName === "SPAN") {
  if (range.intersectsNode(node)) {
    spans.push(node);
  }

  
}

  node = walker.nextNode();
}

console.log("Spans seleccionats:", spans);

const span = document.createElement("span");
span.style.fontSize = `${fontSizeSelect.value}px`;

if (selection.toString().length > 0) {
  

  range.surroundContents(span);

} else {
  

  span.innerHTML = "&#8203;"; 
  
  range.insertNode(span);
  
  range.setStart(span, 0);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
}
}

//botons de format.
boldButton.addEventListener("click", toggleBold);
italicButton.addEventListener("click", toggleItalic);
underlineButton.addEventListener("click", toggleUnderline);

//color.
textColorButton.addEventListener("click", openTextColorPicker);
textColorPicker.addEventListener("input", changeTextColor);

//mida de lletra.
fontSizeSelect.addEventListener("change", changeFontSize);
