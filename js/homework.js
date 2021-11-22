// ----------------------------------------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу прямокутника висотою

let areaOfRectangle = (sideA, sideB) => sideA * sideB;
console.log('площа прямокутника зі сторонами 2 і 5 = ' + areaOfRectangle(2, 5));
// ------------------------------------------------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу кола

let areaOfCyrcle = radius => 2 * Math.PI * radius;
console.log("площа круга з радіусом 4 = " + areaOfCyrcle(4));
// --------------------------------------------------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу циліндру
// 2πR2 + 2πRH

let areaOfCylinder = (radius, height) => (2 * Math.PI * radius * radius) + (2 * Math.PI * radius * height);
console.log('площа циліндра з радіусом 5 і висотою 10 = ' + areaOfCylinder(5, 10));
// ---------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0
]
let itemOfArray = array => {
    for (item of array) {
        console.log("item of array is: " + item);
    }
};
itemOfArray(array);
// ----------------------------------------------------------------------------------------------------

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let someTxt = 'Hello my name is Andrii'
let createParagraph = txt => {
    let p = document.createElement('p');
    p.innerText = txt;
    document.body.appendChild(p);
}
createParagraph(someTxt);
// ----------------------------------------------------------------------------------------------------

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUl = txt => {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerText = txt;
    let cloneLi = li.cloneNode(true)
    let cloneLi2 = li.cloneNode(true)
    ul.appendChild(li)
    ul.appendChild(cloneLi)
    ul.appendChild(cloneLi2)
    document.body.appendChild(ul);
};
createUl(someTxt);
// ------------------------------------------------------------------------------------------------------

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. 
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createUlDynamical = (txt, countLi) => {
    let ul = document.createElement('ul');
    for (i = 0; i < countLi; i++) {
        let li = document.createElement('li');
        li.innerText = someTxt;
        ul.appendChild(li);
    };
    document.body.appendChild(ul);
};
createUlDynamical(someTxt, 3);
// -----------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr = [
    1, 2, 5, true, 'Andrii', false, 'JS'
]
let createUlForItem = array => {
    let ul = document.createElement('ul');
    for (item of array) {
        let li = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
    };
    document.body.appendChild(ul)
};
createUlForItem(arr);
// ----------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. 
// Для кожного об'єкту окремий блок.

let arr2 = [{
        id: 1,
        name: 'Andrii',
        age: 30,
    },
    {
        id: 2,
        name: 'Andrii2',
        age: 302,
    },
    {
        id: 3,
        name: 'Andrii3',
        age: 303,
    },
    {
        id: 4,
        name: 'Andrii4',
        age: 304,
    },
];
let createOwnBlock = array => {
    let mainDiv = document.createElement('div');
    mainDiv.className = 'main';
    for (item of array) {
        let ownDiv = document.createElement('div')
        ownDiv.className = 'divForOneUser'
        for (key in item) {
            let p = document.createElement('p');
            p.innerText = item[key]
            ownDiv.appendChild(p)
        };
        mainDiv.appendChild(ownDiv);
    };
    document.body.appendChild(mainDiv)
};
createOwnBlock(arr2)
    // ----------------------------------------------------------------------------------------------------------------------------