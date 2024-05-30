let createBtn = document.getElementById("createBtn")
createBtn.addEventListener("click", createAuth)
let dataFile;

async function myData () {
fetch ("./index.json")
.then (response => response.json())
.then (jsonData => {
    dataFile = jsonData;
})
.catch(error => {
    console.error("Couldn't Fetch")
})
}

function createAuth () {
    let emailData = document.getElementById("myEmail").value  
    let passwordData = document.getElementById("myPassword").value
    let x = new Object ([ email= emailData, password = passwordData])
    dataFile.push(x)
}

console.log(dataFile)