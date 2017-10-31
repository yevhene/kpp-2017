const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600});
  win.on('closed', () => {
    win = null;
  })

  win.setMenu(null);

  win.loadURL(`file://${__dirname}/app/index.html`);
}

app.on('ready', createWindow);

// OSX: Close when all windows closed
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

// OSX: Dock click
app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});
