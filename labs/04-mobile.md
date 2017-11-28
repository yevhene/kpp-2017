# Лабораторна 4: Розробка мобільної аплікації

## Основні положення

## Мета
Розробити мобільну апплікацію, що інтегрується з серверним API та використовує один з плагінів cordova.

### Теми
- Основи cordova

## cordova
[Документація](https://cordova.apache.org/docs/en/latest/)

### Початок

#### Інсталяція (глобально)
```bash
$ npm install -g cordova
```

#### Генерація аплікації
```bash
cordova create MyApp
```

### Платформа браузер
Використовується під час розробки

#### Додавання платформи
```bash
cordova add browser
```

#### Запуск
```bash
cordova run browser
```

### Платформа Android
Для роботи необхідно встановити [Android SDK](https://developer.android.com/studio/index.html)

#### Додавання платформи
```bash
cordova add android
```

#### Запуск
```bash
cordova run android
```

### Платформа iOS
Для роботи необхідно встановити Xcode з магазину аплікацій OSX (розповсюджеється безкоштовно)

#### Додавання платформи
```bash
cordova add ios
```

#### Запуск
```bash
cordova run ios
```
