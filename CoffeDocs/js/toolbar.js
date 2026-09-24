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

let savedRange = null;


// Executa una ordre de format i recupera el focus de l'editor.

function applyTextFormat(command, value = null) {

    document.execCommand(command, false, value);

    textArea.focus();
}


// Negreta.

function toggleBold() {

    applyTextFormat("bold");

}


// Cursiva.

function toggleItalic() {

    applyTextFormat("italic");

}


// Subratllat.

function toggleUnderline() {

    applyTextFormat("underline");

}


// Guarda la selecció actual.

function saveSelection() {

    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
        savedRange = selection.getRangeAt(0).cloneRange();
    }

}


// Recupera la selecció.

function restoreSelection() {

    if (!savedRange) {
        return;
    }

    const selection = window.getSelection();

    selection.removeAllRanges();
    selection.addRange(savedRange);

}


// Color de text.

function openTextColorPicker() {

    saveSelection();

    textColorPicker.click();

}

function changeTextColor() {

    restoreSelection();

    applyTextFormat("foreColor", textColorPicker.value);

}


// Color de ressaltat.

function openMarkColorPicker() {

    saveSelection();

    markColorPicker.click();

}

function changeMarkColor() {

    restoreSelection();

    applyTextFormat("backColor", markColorPicker.value);

}


// Mida de la lletra.

function changeFontSize() {

    const selection = window.getSelection();

    if (!selection.rangeCount) {
        return;
    }

    const range = selection.getRangeAt(0);
    const newFontSize = `${fontSizeSelect.value}px`;

    if (!range.collapsed) {

        const textNode = range.startContainer;

        if (textNode.nodeType !== Node.TEXT_NODE) {
            return;
        }

        const parentSpan = textNode.parentElement;

        if (!parentSpan || parentSpan.tagName !== "SPAN") {
            applyTextFormat("fontSize", "7");
            return;
        }

        const text = textNode.textContent;

        const before = text.slice(0, range.startOffset);
        const selected = text.slice(
            range.startOffset,
            range.endOffset
        );
        const after = text.slice(range.endOffset);

        const fragment = document.createDocumentFragment();

        if (before) {
            const beforeSpan = parentSpan.cloneNode(false);
            beforeSpan.textContent = before;
            fragment.appendChild(beforeSpan);
        }

        const selectedSpan = parentSpan.cloneNode(false);
        selectedSpan.style.fontSize = newFontSize;
        selectedSpan.textContent = selected;
        fragment.appendChild(selectedSpan);

        if (after) {
            const afterSpan = parentSpan.cloneNode(false);
            afterSpan.textContent = after;
            fragment.appendChild(afterSpan);
        }

        parentSpan.replaceWith(fragment);

        const newSelection = window.getSelection();
        const newRange = document.createRange();

        newRange.selectNodeContents(selectedSpan);

        newSelection.removeAllRanges();
        newSelection.addRange(newRange);

    } else {

        const span = document.createElement("span");

        span.style.fontSize = newFontSize;
        span.innerHTML = "&#8203;";

        range.insertNode(span);

        range.setStart(span, 1);
        range.collapse(true);

        selection.removeAllRanges();
        selection.addRange(range);
    }

    textArea.focus();
}


// Botons de format.

boldButton.addEventListener("click", toggleBold);
italicButton.addEventListener("click", toggleItalic);
underlineButton.addEventListener("click", toggleUnderline);


// Color.

textColorButton.addEventListener("click", openTextColorPicker);
textColorPicker.addEventListener("input", changeTextColor);


// Mark color.

markColorButton.addEventListener("click", openMarkColorPicker);
markColorPicker.addEventListener("input", changeMarkColor);


// Mida de lletra.

fontSizeSelect.addEventListener("change", changeFontSize);
