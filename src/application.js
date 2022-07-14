const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const config = require("./config/appProps.json");
try {
    require('electron-reloader')(module)
  } catch (_) {}

var openApp = () => {
    const app = new BrowserWindow({
        autoHideMenuBar: true,
         webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    async function loadPlugins() {
        console.log('Update');
    }

    loadPlugins();

    app.loadURL(config.homePage);

}



app.whenReady().then(() => {
    openApp();
});