function createMeeting() {
    let electron = require("electron").remote;
    const anotherWindow = new electron.BrowserWindow({
        width: 600,
        height: 300,
        title: "Create Meeting",
        resizable: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    anotherWindow.loadFile("meeting/index.html")
    anotherWindow.setMenu(null)
}