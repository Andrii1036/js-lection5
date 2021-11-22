// -------------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minValue = (first, second, third) => {
    if (first < second && first < third) {
        console.log('найменше число з ' + first + ', ' + second + ' і ' + third + ' це - "' + first + '"');
    } else if (second < first && second < third) {
        console.log('найменше число з ' + first + ', ' + second + ' і ' + third + ' це - "' + second + '"');
    } else {
        console.log('найменше число з ' + first + ', ' + second + ' і ' + third + ' це - "' + third + '"');
    };
};
minValue(0, -5, 25);
// --------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxValue = (first, second, third) => {
    if (first > second && first > third) {
        console.log('найбільше число з ' + first + ', ' + second + ' і ' + third + ' це - "' + first + '"');
    } else if (second > first && second > third) {
        console.log('найбільше число з ' + first + ', ' + second + ' і ' + third + ' це - "' + second + '"');
    } else {
        console.log('найбільше число з ' + first + ', ' + second + ' і ' + third + ' це - "' + third + '"');
    };
};
maxValue(-5, 2, 0);
// -----------------------------------------------------------------------------------------------------------

// - створити функцію яка повертає найбільше число з масиву
let arr = [
    1, 2, 3, 4, 5, 0, -9, -2, 11, -150
]
let maxVaueFromArray = arr => {
    let maxValue = arr[0];
    for (value of arr) {
        if (value > maxValue) {
            maxValue = value
        };
    };
    return maxValue;
};
maxVaueFromArray(arr);
// ----------------------------------------------------------------------------------------------------------------

// - створити функцію яка повертає найменьше число з масиву

let minVaueFromArray = arr => {
    let minValue = arr[0];
    for (value of arr) {
        if (value < minValue) {
            minValue = value
        };
    };
    return minValue;
};
minVaueFromArray(arr);
// ------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumOfArrayItems = array => {
    let sum = 0;
    for (value of array) {
        sum += value;
    };
    return sum;
};
sumOfArrayItems(arr);
// ----------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let averageOfArrayItems = array => {
    let sum = 0;
    let numberOfValues = array.length;
    for (value of array) {
        sum += value;
    };
    let average = sum / numberOfValues;
    return average;
};
averageOfArrayItems(arr);
// ------------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, 
// а виводить найбільше (Math використовувати заборонено);

let minAndMaxFlexible = (...values) => {
    console.log(maxVaueFromArray(values));
    return minVaueFromArray(values);
};
minAndMaxFlexible(1, 2, 3, 4, 5, 6, 7);
// ------------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка заповнює масив рандомними числами
let arr2 = []
let randomValueToArray = () => {
    for (i = 0; i < 10; i++) {
        arr2.push(Math.random());
    };
    console.log(arr2);
};
randomValueToArray();
// -----------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. 
// limit - аргумент, який характеризує кінцеве значення діапазону.

let arr3 = []
let randomValueToArrayWithLimit = limit => {
    for (i = 0; i < 10; i++) {
        arr3.push(Math.floor(Math.random() * limit));
    };
    console.log(arr3);
};
randomValueToArrayWithLimit(500);
// ----------------------------------------------------------------------------------------------------------------------------

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arr4 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0
];

let reverseArray = array => {
    let reverseArr = [];
    for (value of arr4) {
        reverseArr.unshift(value);
    };
    console.log(reverseArr);
};
reverseArray(arr4);
// ----------------------------------------------------------------------------------------------------------------------------