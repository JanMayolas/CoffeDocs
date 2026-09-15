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