//3) для запуска файла используем команду: node index.js
//4)
function sayHi(message) {
    console.log(message);
}

// Вызвает функцию один раз через определённый интервал времени.
function timer() {
    console.log("Привет через 5 секунд");
}
setTimeout(timer, 5000);

// Вызвает функцию регулярно, повторяя вызов через определённый интервал времени.
function repeater() {
    console.log("Привет каждую секунду");
}
setInterval(repeater, 1000);

// 5 и 6) 
const axios = require('axios').default;

axios.get('https://jsonplaceholder.typicode.com/users/1').then(response => console.log(response.data));
axios.get('https://jsonplaceholder.typicode.com/users', {
    headers: { "Accept-Encoding": "gzip,deflate,compress" }
}).then(response => console.log(response.data));

axios.post('https://jsonplaceholder.typicode.com/posts',
    {
        title: 'foo',
        body: 'bar',
        userId: 1,
    },
).then(response => console.log(response.data));

axios.patch('https://jsonplaceholder.typicode.com/posts/1',
    {
        title: 'foo',
    },
).then(response => console.log(response.data));