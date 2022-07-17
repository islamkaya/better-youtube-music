const { ipcRenderer } = require("electron");

module.exports = function options() {
    let optionsposition = window.document.querySelector(".button-group");
    window.document.querySelector(".style-scope .ytmusic-app").style.marginTop = "2%";
    let navbarDivider = window.document.querySelector("#nav-bar-divider");
    navbarDivider.style.marginTop = "2%";
    navbarDivider.style.backgroundColor = "black !important";

    
    const gear_icon = document.createElement("a");
    gear_icon.innerHTML = '<img src="https://i.ibb.co/ncpQFy8/Settings-1.png" height="35em">'
    gear_icon.href = "#"
    gear_icon.style.textDecoration = "none"
    gear_icon.className = "better-youtube-options"
    optionsposition.appendChild(gear_icon);

    gear_icon.addEventListener("click", ()=>{
    ipcRenderer.send("by::options");
    })
}