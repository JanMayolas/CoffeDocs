const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");
const fontSize = document.getElementById("font-size");
const textColorButton = document.querySelector(".text-color");;
const textColorPicker = document.querySelector(".text-color-picker");
const markColorButton = document.querySelector(".mark-color");
const markColorPicker = document.querySelector(".mark-color-picker");


bold.addEventListener("click", () => {
   document.execCommand('bold', false, null);
    document.getElementById('text-area').focus();
});

italic.addEventListener("click", () => {
    document.execCommand(`italic`, false, null)
        document.getElementById('text-area').focus();
})

underline.addEventListener("click", () => {
    document.execCommand(`underline`, false, null)
        document.getElementById('text-area').focus();
})


textColorButton.addEventListener("click", () => {
    textColorPicker.click();
})

    textColorPicker.addEventListener("input", () => {
    const selectedColor = textColorPicker.value;
    document.execCommand("foreColor", false, selectedColor);
        document.getElementById('text-area').focus();
});

markColorButton.addEventListener("click", () => {
    markColorPicker.click();
})

    markColorPicker.addEventListener("input", () => {
    const selectedMarkerColor = markColorPicker.value;
    document.execCommand("backColor", false, selectedMarkerColor);
        document.getElementById('text-area').focus();
});


fontSize.addEventListener("change", () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const hasSelection = selection.toString().length > 0;

    if(hasSelection) {
        //fer debug per a saber com esta creant el span. 
        // perque quan seleccionis un text i canviis de mida, 
        // i tornis a posar una mida sense perdre el focus
        //torni a canviar la mida.

        const span = document.createElement("span");
        span.style.fontSize = fontSize.value.toString()+"px";
        range.surroundContents(span);
        console.log(span);
    } else{
        //crear-ho
        console.log("False")
    }
});

