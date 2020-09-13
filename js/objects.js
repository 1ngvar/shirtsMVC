let user = {};

user.name = "John"
user['surname'] = "Smith"

delete user.name;
delete user.surname;

/* Objects section */





/* Functions section */
function isEmpty(obj) {
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}
// alert(`It is ${isEmpty(user)} that user is empty`)


// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (s in salaries) {
    sum += salaries[s]
}
// console.log(sum)


// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(object) {
    for (let key in object) {
        if (typeof object[key] === "number") {
            console.log(object[key] * 2)
        }
        else console.log("Not a number – " + object[key])
    }

}


multiplyNumeric(menu);









