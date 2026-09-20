const setting = document.getElementById("setting-button");
const folder = document.getElementById("folder-button");
const add_file = document.getElementById("addfile-button")
const stats = document.getElementById("stats-button");
const statsButton = document.getElementById("stats-button");
const statsPanel = document.querySelector(".stats-panel");

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

//setting.addEventListener("click", () => {
//    console.log("setting");
//});

stats.addEventListener("click", () => {
    updateStats();

    statsPanel.classList.toggle("visible");

})




