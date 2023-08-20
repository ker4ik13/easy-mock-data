## Mock-Data: Генератор Моковых Данных

Библиотека **mock-data** предоставляет простой и удобный способ генерации моковых данных для тестирования и разработки. Вы можете использовать её для создания моковых строк, чисел, текстов, дат, имён, продуктов и пользователей с минимальными усилиями.

### Установка

Установите библиотеку **mock-data** с помощью npm:
```
npm install mock-data
```

### Примеры Использования

```javascript
const mockData = require('mock-data');

// Генерация моковой строки длиной 10 символов
const randomString = mockData.string(10);

// Генерация случайного числа из 3-х цифр
const randomNumber = mockData.number(3);

// Генерация мокового текста из 5 слов, первая буква в тексте заглавная
const randomText = mockData.text(5, {
    capitalizeFirstLetter: true,
});

// Генерация числа в заданном диапазоне
const randomNumberInRange = mockData.numberInRange(10, 50);

// Генерация даты в заданном диапазоне, вернет дату в формате ISO
const randomDate = mockData.dateInRange(new Date(2000, 0, 1), new Date(), {
    returnIsoDate: true,
});

// Генерация мокового пользователя
const randomUser = mockData.user('ru');

// Генерация мокового email с заданным именем
const randomEmail = mockData.email('name');

// Генерация мокового номера телефона с заданным кодом страны
const randomPhoneNumber = mockData.phoneNumber('ru');

// Генерация мокового имени пользователя
const randomUserName = mockData.name();

// Генерация мокового продукта
const randomProduct = mockData.product();
```
**Автор:** [ker4ik13](https://t.me/ker4ik13)

### Поддержка и Обратная Связь
Если у вас есть вопросы, проблемы или предложения по улучшению, вы можете создать новый Issue на странице репозитория https://github.com/ker4ik13/mock-data/issues
