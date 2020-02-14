"use strict";

// ----Work 1
// let testObj = {};
// testObj.prop = "test property";
// delete testObj.prop;
// console.log(testObj.prop);
// console.log(testObj["prop"]);

// testObj.pi = Math.PI;
// console.log(testObj["pi"]);

// testObj.sumOfTwo = (a, b) => a + b;
// let res = testObj.sumOfTwo("40", 150);
// console.log(res, typeof res);

// let newObj = Object.assign({}, testObj, {
//   newProp: {
//     x: 10
//   }
// });
// console.log(newObj);

// for (const key in testObj) {
//   delete testObj[key];
// }
// console.log(testObj);

// let copiedObj = { ...newObj };
// console.log(copiedObj);
// copiedObj.newProp.x = 100;
// console.log(copiedObj["newProp"]);
// console.log(newObj.newProp);
// const copyObj = [...Object.keys(copiedObj), ...Object.values(copiedObj)];
// console.log(copyObj);
// Object.keys(obj) – возвращает массив ключей.///
// Object.values(obj) – возвращает массив значений.//

// // -------Work---2

// // function constructObject(
// //   objectName = "noName",
// //   objectNumber = 0,
// //   objectString = ""
// // ) {
// //   return {
// //     objectName,
// //     objectNumber,
// //     objectString,
// //     greet: () => "Hello"
// //   };
// // }
// // const firstCreatedObject = constructObject();
// // const secondCreatedObject = constructObject("test", 10, "i'm a string");
// // const firstArr = [],
// //   secondArr = [];

// // for (let key of Object.keys(firstCreatedObject)) {
// //   firstArr.push(firstCreatedObject[key]);
// // }

// // for (let key of Object.keys(secondCreatedObject)) {
// //   secondArr.push(secondCreatedObject[key]);
// // }

// // console.log(firstArr, secondArr);

// // ------Work-----3

const targetObj = {
  x: 1,
  y: {
    w: "test",
    q: {
      a: true,
      b: () => console.log("useless"),
      c: {
        d: ["a", "b", "c"]
      }
    }
  },
  z: [1, 2, 3, 4, 5]
};

function deepCopy(obj) {
  const cloneObj = {}; //----Ссылка на пустой обьект
  for (const key in obj) {
    //---Перебираем свойства из которго перебираем обьекта
    if (typeof obj[key] == "object") {
      //---Проверка на обьект
      if (Array.isArray(obj[key])) {
        //---Проверка являеться ли обьект массивом
        cloneObj[key] = [...obj[key]];
      } else {
        cloneObj[key] = deepCopy(obj[key]);
        //Если obj являеться обьектом то мы вызываем функцию deepCopy с вложеным обьектом и делаем ее копию.
      }
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}

const copiedObj = deepCopy(targetObj);
console.log(targetObj, copiedObj);

targetObj.y.q.c.d[0] = 100;
const areElementsEqual = targetObj.y.q.c.d[0] === copiedObj.y.q.c.d[0];
console.log(areElementsEqual);
