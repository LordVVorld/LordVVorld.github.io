//3
let message = "Hello World"
console.log(message);

//4
let firstNumber = 125;
let secondNumber = 2;
console.log(`Первое число: ${firstNumber}`);
console.log(`Второе число: ${secondNumber}`);

//5
console.log(`Их сумма: ${firstNumber + secondNumber}`);

//6
console.log(`Сообщение в нижнем регистре: ${message.toLowerCase()}`);
console.log(`Сообщение в верхнем регистре: ${message.toUpperCase()}`);

//7
console.log(`Сумма: ${firstNumber + secondNumber}`)
console.log(`Разность: ${firstNumber - secondNumber}`)
console.log(`Произведение: ${firstNumber * secondNumber}`)
console.log(`Частное: ${firstNumber / secondNumber}`)
console.log(`Возведение в степень: ${firstNumber ** secondNumber}`)
console.log(`Остаток от деления: ${firstNumber % secondNumber}`)

//8
//Вывести кубический корень первого числа
console.log(`Кубический корень первого числа: ${Math.cbrt(firstNumber)}`)
//Вывести квадратный корень из суммы квадратов чисел
console.log(`Квадратный корень из суммы квадратов чисел: ${Math.hypot(firstNumber, secondNumber)}`)