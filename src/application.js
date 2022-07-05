const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const config = require("./config/siteProps.json");


var openApp = () => {
    const app = new BrowserWindow({
        autoHideMenuBar: true,
         webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    app.loadURL(config.homePage);

}



app.whenReady().then(() => {
    openApp();
});