module.exports = function adblocker() {
    try {


    const { ElectronBlocker } = require("@cliqz/adblocker-electron");

    const fetch = require("node-fetch");
    const SOURCES = [
        "https://raw.githubusercontent.com/kbinani/adblock-youtube-ads/master/signed.txt",
        // uBlock Origin
        "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters.txt",
        "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters-2021.txt",
        // Fanboy Annoyances
        "https://secure.fanboy.co.nz/fanboy-annoyance_ubo.txt",
    ];

    ElectronBlocker.fromLists(
		fetch,
		SOURCES
	);
}
catch(e) {
    console.log('Error in adblocker :>> ', e);
}
}