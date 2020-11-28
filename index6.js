let input = confirm();
const numbers = [];
let total = 0;
while (input) {
    input = prompt("Введите число");
    if (isNaN(input)) {
        alert("Вы ввели не число");
        continue;
    }
    if (input === null) {
        if (numbers.length > 0) {
            for (let num of numbers) {
                total += num;
            }
            console.log(`Общая сумма чисел равна ${total}`);
        } else {
            alert("Было введено не число, попробуйте еще раз");
        }
    }
    numbers.push(+input);
}
