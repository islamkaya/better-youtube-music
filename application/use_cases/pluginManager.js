const fs = require("fs");

class pluginManager {

    initalizeServerPlugins(pluginPath, ...args) {
        fs.readdirSync(pluginPath).forEach(function (pluginName) {
            require(`../../plugins/${pluginName}/server/${pluginName}.js`)(...args);
        });
    }

    initalizeClientPlugins(pluginPath, ...args) {
        fs.readdirSync(pluginPath).forEach(function (pluginName) {
            require(`../../plugins/${pluginName}/client/${pluginName}.js`)(...args);
        });
    }

    fetchAllPlugins() {
        let plugin = {};
        let plugins;
        fs.readdirSync(pluginPath).forEach(function (pluginName) {
            plugin = {
                pluginName: pluginName
            }
            plugins.push(plugin);
        });
        return plugins;
    }

}


const newPluginManager = new pluginManager();

module.exports = newPluginManager;