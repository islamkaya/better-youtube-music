const { app, BrowserWindow } = require("electron");
const path = require("path");
const config = require("./config/app-props.json");
const pluginManager = require("./application/use_cases/pluginManager");
const userAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${process.versions.chrome} Safari/537.36`;
const pluginsPath = require("path").join(__dirname, "/plugins");


  


var openApp = () => {
     const app = new BrowserWindow({
        autoHideMenuBar: true,
        minWidth: config.minWidth,
        maxHeight: config.maxHeight,
        icon: __dirname + "/better-youtube-music.ico",
        titleBarStyle: 'hidden',
      
        titleBarOverlay: {
            color: "#FF0000"
        },
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            userAgent: userAgent,
            nodeIntegration: true
        },
    });
 
 

    pluginManager.initalizeServerPlugins(pluginsPath);

    app.loadURL(config.homePage);

}



app.whenReady().then(() => {
    openApp();
});