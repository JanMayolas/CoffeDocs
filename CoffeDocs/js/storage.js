document.addEventListener("DOMContentLoaded", () => {

    // Carregat i guardat del NOM a localStorage
    const file_name = document.querySelector(".input-name");
    const name_saved = localStorage.getItem("document-name");

    if (name_saved) {
        file_name.value = name_saved;
    }

    file_name.addEventListener("input", () => {
        localStorage.setItem("document-name", file_name.value);
    });

    // Carregat i guardat del CONTINGUT a localStorage
    const textArea = document.getElementById("text-area");
    const text_saved = localStorage.getItem("document-content");

    if (text_saved) {
        textArea.innerHTML = text_saved;
    }

    textArea.addEventListener("input", () => {
        localStorage.setItem("document-content", textArea.innerHTML);
    });

});