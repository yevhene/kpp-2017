# Лабораторна 1: Розробка браузерного додатку

## Основні положення

### Мета
- Основи JavaScript
- Інтеграція зі сторонніми сервісами

### Завдання
Розробити статичний браузерний додаток, що отримує дані з відкритого API, та відображає їх на мапі.

### [Приклад](https://kpp-lab-1.herokuapp.com/)

## Матеріали

### Google maps
**Для використання Google Maps необхідно зареєструватися та отримати ключ до API. Це можна зробити на будь-якій сторінці документації.**

#### [Документація](https://developers.google.com/maps/documentation/javascript/?hl=ru)

#### Інтеграція з Google Maps
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
[Джерело](https://developers.google.com/maps/documentation/javascript/examples/map-simple?hl=ru)

#### Створення маркера на мапі
```javascript
var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: 'Hello World!'
});
```
[Джерело](https://developers.google.com/maps/documentation/javascript/examples/marker-simple?hl=ru)

### Завантаження даних зі стороннього ресурсу

#### [Документація](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch)

#### Приклад
```javascript
fetch('./api/some.json')
  .then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
```
[Джерело](https://habrahabr.ru/post/252941/)

### Сторонні API

#### [Список](https://github.com/toddmotto/public-apis)

#### Приклади
- Погода [Online Weather](http://openweathermap.org/current)
