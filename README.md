## Easy-Mock-Data: Генератор Моковых Данных

Библиотека **easy-mock-data** предоставляет простой и удобный способ генерации моковых данных для тестирования и разработки. Вы можете использовать её для создания моковых строк, чисел, текстов, дат, имён, продуктов и пользователей с минимальными усилиями.

### Установка

Установите библиотеку **easy-mock-data** с помощью npm:
```
npm install easy-mock-data
```

### Примеры Использования

```javascript
const mockData = require('mock-data');

// Генерация моковой строки длиной 10 символов
const randomString = mockData.string(10); // OHKGxFarhs

// Генерация мокового текста из 5 слов, первая буква в тексте заглавная
const randomText = mockData.text(5, {
    capitalizeFirstLetter: true,
}); // Wildberrymango mango lemon wildberry

// Генерация случайного числа из 3-х цифр
const randomNumber = mockData.number(3); // 172

// Генерация числа в заданном диапазоне
const randomNumberInRange = mockData.numberInRange(10, 50); // 26

// Генерация даты в заданном диапазоне, вернет дату в формате ISO
const randomDate = mockData.dateInRange(new Date(2000, 0, 1), new Date(), {
    returnIsoDate: true,
}); // 2006-11-23T02:10:48.935Z

// Генерация мокового имени пользователя
const randomUserName = mockData.name(); // Mark

// Генерация моковой фамилии пользователя
const randomUserLastName = mockData.lastName(); // Martinez

// Генерация мокового полного имени
const randomFullName = mockData.fullName(); // John Harris

// Генерация мокового адреса
const randomAddress = mockData.address(); // Main St 101

// Генерация мокового email с заданным именем
const randomEmail = mockData.email('john'); // john@example.com

// Генерация мокового номера телефона с заданным кодом страны
const randomPhoneNumber = mockData.phoneNumber('ru'); // +75820672346

// Генерация мокового пользователя
const randomUser = mockData.user('ru');
// {
//    email: "Margaret@test.net"
//    firstName: "Margaret"
//    lastName: "Moore"
//    phoneNumber: "+78622944804"
// }

// Генерация мокового продукта
const randomProduct = mockData.product();
// {
//     name: GsgTa,
//     category: 'Electronics',
//     price: 6235,
//     description: 'Mango banana date honeydew date mango honeydew mango lemon grape mango cherry banana nectarine lemon honeydew grape date wildberry cherry'
// }
```
**Автор:** [ker4ik13](https://t.me/ker4ik13)

### Поддержка и Обратная Связь
Если у вас есть вопросы, проблемы или предложения по улучшению, вы можете создать новый Issue на странице репозитория https://github.com/ker4ik13/easy-mock-data/issues
