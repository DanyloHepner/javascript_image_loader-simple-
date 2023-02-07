//Fires when user pushes button
const SelectButtonClickHandler = () => {
    document.getElementById("file-box").click();
}

//Fires when selected file
const FileBoxChangeHandler = () => {
    const fileReader = new FileReader();
    if(document.getElementById("file-box").files[0].type.indexOf("image") == -1) {
        alert("Only image file can be accepted, re-try please.");
        return ;
    }
    fileReader.readAsDataURL(document.getElementById("file-box").files[0]);
    fileReader.onloadend = () => {
        document.getElementById("img-display-section").src = fileReader.result;
    };
}