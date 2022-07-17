const { ipcRenderer } = require('electron');

module.exports = function discordRpc() {
    let playButton = window.document.querySelector(".play-pause-button");
    let nextButton = window.document.querySelector(".next-button");
    let previousButton = window.document.querySelector(".previous-button");
    let allControlsEvent = [playButton, nextButton, previousButton];


    function updateDiscordRPC() {
       let songInfo = {
           songName: window.document.querySelector("title").innerHTML,
           songImage: window.document.querySelector(".ytmusic-player img").src
       };
       
       ipcRenderer.send("newSong", songInfo);
    }
    allControlsEvent.forEach((event)=>{
       event.addEventListener("click", updateDiscordRPC);
    })
}