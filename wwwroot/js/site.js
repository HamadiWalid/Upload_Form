let fileInput = document.getElementById("file-input");
let fileList = document.getElementById("files-list");
let numOfFiles = document.getElementById("num-of-files");

fileInput.addEventListener('change', () => {
    fileList.innerHTML = "";
    let files = fileInput.files;

    if (files.length === 0) {
        numOfFiles.textContent = "No files chosen";
    } else {
        numOfFiles.textContent = `${files.length} file(s) selected`;
    }

    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let listItem = document.createElement("li");
        let fileName = file.name;
        let fileSize = (file.size / 1024).toFixed(1); // Size in KB

        if (fileSize >= 1024) {
            fileSize = (fileSize / 1024).toFixed(1) + " MB";
        } else {
            fileSize += " KB";
        }

        listItem.innerHTML = `<span>${fileName}</span><span>${fileSize}</span>`;
        fileList.appendChild(listItem);
    }
});
