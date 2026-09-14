//Guardat de memoria a localStorage
const textArea = document.getElementById("text-area");
const text_saved = localStorage.getItem("document-content");

if(text_saved) {
    textArea.innerHTML = text_saved;
}


textArea.addEventListener("input", () => {
    localStorage.setItem("text-area", textArea.innerHTML);
})

// Descarga de memoria amb archius .md

