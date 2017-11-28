# Лабораторна 3: Розробка настільної аплікації

## Основні положення

## Мета
Розробити настільну апплікацію, що інтегрується з серверним API.

### Теми
- Основи electron

### [Приклад](https://vntu-kpp.herokuapp.com/examples/03-desktop/)

## electron
[Документація для швидкого початку](https://electron.atom.io/docs/tutorial/quick-start/)

### Інсталяція
```bash
$ npm install --save electon
```

### Імпорт
```javascript
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
```

### Події рівня аплікації
```javascript
app.on('ready', function() {
  //...
});
```

### Створення вікна для відображення сторінки
```javascript
win = new BrowserWindow({width: 800, height: 600});
```

### Відкриття сторінки
```javascript
win.loadURL(`file://${__dirname}/app/index.html`);
```

### Видалення стандартного меню
```javascript
win.setMenu(null);
```

### Модифікації поведінки для OSX

#### Вийти коли всі вікна зачинені
```javascript
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
```

#### Подія кліку на док
```javascript
app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})
```

### Розповсюдження аплікації
[Документація](https://electron.atom.io/docs/tutorial/application-distribution/)
