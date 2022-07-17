const { app, BrowserWindow, ipcMain } = require("electron");

module.exports = function options() {
    ipcMain.on("by::options", () => {
        let app = new BrowserWindow({
            autoHideMenuBar: true,
            titleBarStyle: 'hidden',
            titleBarOverlay: {
                color: "#FF0000"
            },
        })

        app.loadFile(__dirname + "./options-gui/index.html");
    });
}
