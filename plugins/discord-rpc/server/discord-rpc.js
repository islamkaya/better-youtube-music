const client = require('discord-rich-presence')('495666957501071390');
const { ipcMain } = require("electron");
module.exports = function discordRpc() {
  ipcMain.on("newSong", (err, songInfo)=>{
    client.updatePresence({
      state: songInfo.songName,
      largeImageKey: songInfo.songImage,
      instance: true,
    });
  });
}

