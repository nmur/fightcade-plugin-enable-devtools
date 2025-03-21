module.exports = (FCADE) => {
    // Plugin code goes here
    document.addEventListener("keydown", (e) => {
        if (e.key === "F12") {
            require("electron").remote.getCurrentWindow().webContents.openDevTools();
        }
    });
};
