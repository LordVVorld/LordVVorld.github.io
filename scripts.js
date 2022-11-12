//Калькулятор любви
let firstName = prompt("Введите первое имя");
let secondName = prompt("Введите второе имя");
let compatibility = Math.round(Math.random() * 100);

alert(`${firstName} подходит к ${secondName} на ${compatibility}%`);

//BMI Калькулятор
let growth = prompt("Введите свой рост в сантиметрах");
let weight = prompt("Введите свой вес в килограммах");
let BMI = weight / ((growth / 100) ** 2);

switch (true) {
    case BMI <= 18.5:
        alert("У вас недостаток веса");
      break;
    case BMI <= 25:
        alert("Ваш вес в норме")
      break;
    case BMI <= 30:
        alert("У вас излишек веса")
      break;
    default:
        alert("У вас ожирение, рекомендуем обратиться к врачу")
      break;
}

//Калькулятор високосности
let year = Number(prompt("Введите год"))
if (!(year & 3 || year & 15 && !(year % 25))) {
    alert("Високосный")
}
else {
    alert("Не високосный")
}

//Рулетка плательщика
let names = prompt("Перечислите имена платящих через запятую").split(",");
alert(`Платит ${names[Math.floor(Math.random() * names.length)]}`);