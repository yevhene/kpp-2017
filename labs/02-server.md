# Лабораторна 2: Розробка серверної аплікації

## Основні положення

### Мета
Розробити серверну апплікацію, що надає API для керування певними даними. Та браузерну аплікацію що інтегрується з цим API.

### Теми
- Основи node.js
- Менеджер пакетів npm
- Фреймворк express.js
- Розгортування heroku
- Манеджер компонентів foreman
- Документо-орієнтована база MongoDB

### [Приклад](https://vntu-kpp.herokuapp.com/examples/02-server/)

## node.js та npm

### Інсталяція
`npm` встановлюється разом із `node.js` з [сайту](https://nodejs.org/uk/).

#### Linux
```
$ sudo apt install nodejs
```

### Налаштування Proxy (тільки для роботи в межах ВНТУ)
```
$ npm config set proxy http://proxy.lan:3128
```

### Створення проекту
Вам необхідно створити папку для проекту. Перейти до неї за допомогою терміналу, та виконати команду `npm init`. Дайте відповідь на запитання що вам поставить `npm`. По результатм він створить `package.json` файл, з описом проекту.

### Інсталяція пакетів
```
$ npm install
```

### Додавання пакету
```
$ npm install --save express
```

### Запуск проекту
```
$ node app.js
```

## Express

### Інсталяція
```
$ npm install --save express
```

### Ініціалізація
```javascript
var express = require('express');

var app = express();
```

### Обробка запиту
```javascript
app.get('/tasks', function(req, res) {
  res.send('Немає задач на сьогодні!');
});
```
Зверніть увагу що замість `get`, можна використати будь який з стандартних http методів: `post`, `put` або `delete`.
Зазвичай для отримання даних використовується `get`, для створення `post`, для оновлення `put`, для видалення `delete`.

### Обробка параметрів
```javascript
app.get('/tasks/:id', function(req, res) {
  res.send(
    'Ви хочете отримати задачу з id=' +
    req.params.id +
    ', але на сьогодні задач немає!'
  );
});
```
Для обробки параметрів перданих через `?` використовується об'єкт `req.query`.

### Відправка статусу
```javascript
res.sendStatus(201);
```

### Відправка тіла
```javascript
res.send({ name: 'Задача' });
```

### Обробка статичних файлів
```javascript
app.use('/', express.static(__dirname + '/static'));
```

### Запуск сервера
```javascript
app.listen(3000);
```
Сервер запуститься на `3000` порту.

## Body parser
Необхідний для обробки тіл запитів.

### Інсталяція
```
npm install --save body-parser
```

### Інтеграція з express
```javascript
var bodyParser = require('body-parser');
app.use(bodyParser.json());
```

### Доступ до тіла
```javascript
app.post('/tasks', function(req, res) {
  res.send(
    'Ви хочете створити задачу з ім\'ям "' +
    req.body.name +
    '", але на сьогодні задач не було і не буде!'
  );
});
```

## Робота з DOM

### Вставка HTML
```javascript
document.getElementById('#tasks').innerHTML = '<h1>Добрий вечір</h1>';
```

## MongoDB
Документо-орієнтована база даних.

### Інсталяція бази даних
З [сайту](https://www.mongodb.com/download-center#community).

#### Linux
```
$ sudo apt install mongodb
```

### Інсталяція драйверу
```
$ npm install --save mongodb
```

### Під'єднання
```javascript
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var mongoUrl = 'mongodb://localhost:27017/02-server';
var mongo;
MongoClient
  .connect(mongoUrl)
  .then(function(db) {
    mongo = db;
  });
```
Зверніть увагу на `mongoUrl`:
- `localhost:27017` - очікує на те що база розгорнута локально на порту `27017`. Це стандартний порт. Якщо ви його при інсталяції змінили вкажіть свій порт.
- `02-server` - назва бази даних, якщо такой немає вона створиться автоматично.

### Отримання списку
```javascript
mongo
  .collection('tasks').find().toArray()
  .then(function(tasks) {
    // Робота зі списком tasks
  });
```
`collection` - вказує назву колекції (аналог в реляційних базах даних "таблиця").

### Пошук елементів
```javascript
mongo
  .collection('tasks').find({ name: 'Задача1' }).toArray()
  .then(function(task) {
    // Робота зі списком tasks
  });
```
Знаходить всі задачі з ім'ям 'Задача1'.

### Пошук одного елементу
```javascript
mongo
  .collection('tasks').findOne({ name: 'Задача1' })
  .then(function(tasks) {
    // Робота з task
  });
```
Повертаю першу знайдену задачу з ім'ям 'Задача1'.

### Створення
```javascript
mongo
  .collection('tasks').insert({ name: 'Нова задача' })
  .then(function() {
    // Виконується після створення
  });
```

### Оновлення
```javascript
mongo
  .collection('tasks').update({ name: 'Задача1' }, { name: 'Задача2' })
  .then(function() {
    // Виконується після оновлення
  });
```
Змінює ім'я всіх задач 'Задача1', на 'Задача2'.

### Видалення
```javascript
mongo
  .collection('tasks').remove({ name: 'Задача1' })
  .then(function() {
    // Виконується після видалення
  });
```
Видаляє всі задачі з ім'ям 'Задача1'.
