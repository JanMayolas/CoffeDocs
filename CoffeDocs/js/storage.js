

//Guardat de memoria a localStorage

const textArea = document.getElementById("text-area");
const saved = localStorage.getItem("document-content");

if(saved) {
    textArea.innerHTML = saved;
}


textArea.addEventListener("input", () => {
    localStorage.setItem("document-content", textArea.innerHTML);
})

// Guardat de memoria amb archius .md

