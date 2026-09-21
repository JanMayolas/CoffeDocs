const setting = document.getElementById("setting-button");
const folder = document.getElementById("folder-button");
const add_file = document.getElementById("addfile-button")
const stats = document.getElementById("stats-button");
const statsButton = document.getElementById("stats-button");
const statsPanel = document.querySelector(".stats-panel");
const editor = document.getElementById("text-area");


// Funció per actualitzar el recompte de paraules
function updateStats() {
    const text = editor.textContent;
    const words = text.trim().split(/\s+/);
    const wordCount = document.getElementById("word-count");
    
        if (text.trim() === "") {
            wordCount.textContent = 0;
        } else {
            wordCount.textContent = words.length;
        }
}


// Funció per actualitzar el recompte de caràcters
function updateCharacterCount() {
    const text = editor.textContent;
    const characterCount = document.getElementById("character-count");
    
    if (text.trim() === "") {
        characterCount.textContent = 0;
    }else {
        characterCount.textContent = text.length;
    }
}

// Funció per actualitzar el recompte de paràgrafs
function updateParagraphCount() {
    const paragraphs = editor.querySelectorAll("p, div");
    const paragraphCount = paragraphs.length;

    document.getElementById("paragraph-count").textContent = paragraphCount;
}

stats.addEventListener("click", () => {
    updateStats();
    updateCharacterCount();
    updateParagraphCount();

    statsPanel.classList.toggle("visible");

})




