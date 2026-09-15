const setting = document.getElementById("setting-button");
const save = document.getElementById("save-button")
const folder = document.getElementById("folder-button")
const add_file = document.getElementById("addfile-button")
const search = document.getElementById("search-button")


setting.addEventListener("click", () => {
    console.log("setting")
});

folder.addEventListener("click", () => {
    console.log("folder")
});

add_file.addEventListener("click", () => {
    console.log("add_file")
});

search.addEventListener("click", () => {
    console.log("search")
});

save.addEventListener("click", () => {
    console.log("download")
});

document.addEventListener("DOMContentLoaded", () => {

    // Descàrrega de memòria amb arxius .md
    const saveButton = document.getElementById("save-button");
    const fileNameInput = document.querySelector(".input-name");
    const textArea = document.getElementById("text-area");

    if (saveButton) {
        saveButton.addEventListener("click", () => {
            const title = fileNameInput.value || "document";
            const content = textArea.innerText; // .innerText per agafar el text net sense etiquetes HTML

            const blob = new Blob([content], { type: "text/markdown" });
            const link = document.createElement("a");
            
            link.href = URL.createObjectURL(blob);
            link.download = `${title}.md`;
            link.click();
            
            URL.revokeObjectURL(link.href);
        });
    }

});