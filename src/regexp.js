'use strict';
// Create a regexp
let str1 = 'Malong';
let str2 = 'Trolo Trololo TroLolo';

let reg1 = /lo/gi;
let reg2 = new RegExp(str1, 'gi')
let reg3 = new RegExp(()=>{})
// String methods

// const arrMatch =str2.match(reg1);
// console.log(arrMatch);

// console.log(str2.search(reg1));
// console.log(str2.search(reg1));
// console.log(str2.split(reg1));
// console.log(str2.replace(reg1, '--'));
// RegExp methods
// console.log(reg1.test(str2))
console.log(reg1.exec(str2));
console.log(reg1.exec(str2));
console.log(reg1.exec(str2));
console.log(reg1.exec(str2));
console.log(reg1.exec(str2));
console.log(reg1.exec(str2));
// console.log(reg1.exec(str2));
console.dir(reg1);

// console.log(reg3)
// Flags
/* 
i - ignore case A === a;
g - all text;
u - UNICODE;
s - dotAll;
m - multy string search ^/$;
y - position in the text
 */
// Symbol groups and metasymbols
let str3 = 'Donic Stiga DHS TSP Bonic';
const reg4 = /[A-Z]/g;
const reg5 = /[^A-Za-z]/g;
// console.log(reg4.test(str3))
// console.log(reg5.test(str3))
/* 
\w = [A-Za-z0-9_]
\W = [^A-Za-z0-9_]
\d = [0-9]
\D = [^0-9]
\s = '_'
\S = '^_'
. (\n) flag s
\b word border
\B no word border
*/
const str6 = 'Языки обучения: Java, JavaScript, C++';
const reg6 = /\bJava\b/g;

const lanArr = str6.replace(reg6, 'C#');
// console.log(lanArr)
// Modifyers
const password =  '12_EEOsdsdsdssadfd'
function checkPassword(str){
    const reg = /^\w{8,15}$/g;
    if(reg.test(str)){
        return 'Success';
    }
    return 'Error';
}

console.log(checkPassword(password))
/* 
 Email должен содержать знак @ со знаками латиницы в любом регистре, цифр, знака подчеркивания 
        перед ним (в начале).
        Знаки перед ним могут разделяться одной точкой, а могут и нет. После него должны быть буквы латиницы в 
        количестве от 3 до 8. И заканчиваться он должен групой знаков с точкой и буквы латиницы от 2 до 5.
        yan.brav777@gmail.com
*/
const strEmail = 'yan.brav777@gmail.com'
function checkEmail(str){
    const reg = /^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/gi;
    if(reg.test(str)){
        return 'Success';
    }
    return 'Error';
}

console.log(checkEmail(strEmail))

// Groups
let htmlImg = '<img src="picture.png"/>'

const regHtml = /[a-z]+\.(?<ext>jpg|png|gif)/i;
const res = htmlImg.match(regHtml);

console.log(res)

const strData = '2021-09-06';
const dataReg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
const res1 = dataReg.exec(strData);

console.log(res1);
console.log(res1.groups.year);


