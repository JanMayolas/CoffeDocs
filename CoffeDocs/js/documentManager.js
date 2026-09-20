document.addEventListener("DOMContentLoaded", () => {

    // Descàrrega arxius .md
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

//carregar un arxius del sistema de fitxers local

//obre el sistema de fitxers local
folder.addEventListener("click", () => {
    document.querySelector("input[type='file']").click();
});

const folderInput = document.querySelector(".folder-input");

folderInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
        reader = new FileReader();
    
    
            reader.onload = () => {
                document.getElementById("text-area").textContent = reader.result;

            };

                reader.readAsText(file);

});

//Create a new file

add_file.addEventListener("click", () => {
    const fileName = document.querySelector(".input-name");

    editor.innerHTML = "";
    localStorage.clear();
    fileName.value = "document sense títol";
    fileName.placeholder = "document sense títol";

})
