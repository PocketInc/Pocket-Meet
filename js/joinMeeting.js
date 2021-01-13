function joinMeeting() {
    let ID = document.getElementById("meeting").value;
    if (!ID || ID == "" || ID == null) return document.getElementById("err").innerHTML = "Invaild Meeting ID.";
    let electron = require("electron").remote;
    const anotherWindow = new electron.BrowserWindow({
        width: 600,
        height: 300,
        title: "Join Meeting",
        resizable: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    anotherWindow.loadFile("join/index.html")
    //anotherWindow.setMenu(null)

}