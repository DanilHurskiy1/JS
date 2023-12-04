function processInput() {

    var X = prompt("Введіть перше число X:");

    var Y = prompt("Введіть число Y (діапазон 0-4):");

    if (Y >= 0 && Y <= 4) {

        switch (parseInt(Y)) {
            case 0:
                console.log(X + " в ступені 0 дорівнює 1");
                break;
            case 1:
                console.log(X + " в ступені 1 дорівнює " + X);
                break;
            case 2:
                console.log(X + " в ступені 2 дорівнює " + (X * X));
                break;
            case 3:
                console.log(X + " в ступені 3 дорівнює " + (X * X * X));
                break;
            case 4:
                console.log(X + " в ступені 4 дорівнює " + (X * X * X * X));
                break;
            default:
                console.log("Невідомий Y");
        }
    } else {
        console.log("Y повинно бути числом в діапазоні від 0 до 4");
    }
}

while (confirm("Натисніть OK для введення чисел або Cancel для завершення")) {
    processInput();
    break;
}

console.log("Робота програми завершена");