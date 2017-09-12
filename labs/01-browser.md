# Лабораторна 1: Розробка браузерної аплікації

## Основні положення

### Мета
- Основи JavaScript
- JavaScript HTML5 API
- Інтеграція зі сторонніми API

### Завдання
Розробити статичний браузерну аплікацію, що отримує дані з відкритого API, та відображає їх на мапі.

### [Приклад](https://kpp-lab-1.herokuapp.com/)

## Мапи

### Google maps *[Документація](https://developers.google.com/maps/documentation/javascript/?hl=ru)*
**Для використання Google Maps необхідно зареєструватися та отримати ключ до API. Це можна зробити на будь-якій сторінці документації.**

#### Інтеграція з Google Maps *[Джерело](https://developers.google.com/maps/documentation/javascript/examples/map-simple?hl=ru)*
```html
<div id="map"></div>
<script>
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
async defer></script>
```

#### Створення маркера на мапі *[Джерело](https://developers.google.com/maps/documentation/javascript/examples/marker-simple?hl=ru)*
```javascript
var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: 'Hello World!'
});
```

## Завантаження даних зі стороннього ресурсу

### fetch *[Документація](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch)*

#### Приклад *[Джерело](https://habrahabr.ru/post/252941/)*
```javascript
fetch('./api/some.json')
  .then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
```

## Сторонні API *[Список](https://github.com/toddmotto/public-apis)*

### Приклад: Online Weather *[Документація](http://openweathermap.org)*

#### Точки доступну до поточної погоди *[Джерело](http://openweathermap.org/current)*

*Кожний URL вимагає параметр `appid` в який має бути переданий ключ. Ключ можна отримати зареєстревавшись на ресурсі. Якщо ваш ключ не працює ви можете **тимчасово** використати цей: `1b5ee5a1a74d624a74750350327ea372`*

Поточна погода в місті:

`https://api.openweathermap.org/data/2.5/weather?q=Vinnytsia&appid=1b5ee5a1a74d624a74750350327ea372`

Поточна погода в місті, з уточненням країни:

`https://api.openweathermap.org/data/2.5/weather?q=Vinnytsia,ua&appid=1b5ee5a1a74d624a74750350327ea372`

Поточна погода в місці з координатами lat (широта) і lon (довгота):

`https://api.openweathermap.org/data/2.5/weather?lat=49.23&lon=28.48&appid=1b5ee5a1a74d624a74750350327ea372`

#### Посилання на отримання іконки погоди *[Джерело](https://openweathermap.org/weather-conditions)*

*Необхідно замінити параметр $weather на код погоди*

`http://openweathermap.org/img/w/$weather.png`

#### Інтерпретація відповіді сервера *[Джерело](https://openweathermap.org/current#current_JSON)*
```javascript
{
  "coord": {                            // + Координати точки
    "lon": 28.48,                       // - Широта
    "lat": 49.23                        // - Довгота
  },
  "weather": [{                         // + Список реузльтатів
    "id": 802,                          // - Ідентифікатор погодних умов
    "main": "Clouds",                   // - Категорія погодних умов
    "description": "scattered clouds",  // - Підкатегорія погодних умов
    "icon": "03d"                       // - Код іконки
  }],
  "base": "stations",                   // + (не використовується)
  "main": {                             // + Основні параметри
    "temp": 291.78,                     // - Температура
    "pressure": 985.85,                 // - Тиск
    "humidity": 80,                     // - Вологість
    "temp_min": 291.78,                 // - Мінімальна температура
    "temp_max": 291.78,                 // - Максимальна температура
    "sea_level": 1018.82,               // - Тиск на рівні моря
    "grnd_level": 985.85                // - Тиск на рівні землі
  },
  "wind": {                             // + Вітер
    "speed": 6.11,                      // - Швидкість
    "deg": 147.501                      // - Напрямок
  },
  "clouds": {                           // + Хмарність
    "all": 44                           // - Процент закритого неба
  },
  "dt": 1505200551,                     // + Час (UNIX Time)
  "sys": {                              // + Загальна інформація
    "message": 0.003,                   // - (не використовується)
    "country": "UA",                    // - Країна
    "sunrise": 1505187511,              // - Час сходу (UNIX Time)
    "sunset": 1505233498                // - Час заходу (UNIX Time)
  },
  "id": 689558,                         // + Ідентифікатор міста
  "name": "Vinnytsya",                  // + Назва міста
  "cod": 200                            // + (не використовується)
}
```
