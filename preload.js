const { initalizeClientPlugins } = require("./application/use_cases/pluginManager");
const pluginsPath = require("path").join(__dirname, "/plugins");



window.addEventListener("DOMContentLoaded",  () => {
    initalizeClientPlugins(pluginsPath);
});
