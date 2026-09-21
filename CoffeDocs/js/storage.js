document.addEventListener("DOMContentLoaded", () => {

    // Carregat i guardat del NOM a localStorage
    const fileName = document.querySelector(".input-name");
    const name_saved = localStorage.getItem("document-name");

    if (name_saved) {
        fileName.value = name_saved;
    }

    fileName.addEventListener("input", () => {
        localStorage.setItem("document-name", fileName.value);
    });

    // Carregat i guardat del CONTINGUT a localStorage
    const editor = document.getElementById("text-area");
    const text_saved = localStorage.getItem("document-content");

    if (text_saved) {
        editor.innerHTML = text_saved;
    }

    editor.addEventListener("input", () => {
        localStorage.setItem("document-content", editor.innerHTML);

        updateStats();
        updateCharacterCount();
        updateParagraphCount();
    });

});