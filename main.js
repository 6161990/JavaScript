console.log('yoonji');

// Data type
// String (문자 데이터) 따옴표 사용
//큰 따옴표, 작은 따옴표 가리지 않음
let myName = "HEROPY";
let email = '6161990src@gmail.com';
//그레이브(백틱) 기호 사용해 보간법 ${} 이용
let hello = `Hello ${myName}?!`

console.log(myName);
console.log(email);
console.log(hello);

//Number(숫자 데이터)
//정수 및 부동소수점 숫자를 나타냄
let number = 123;
let opacity = 1.46;
console.log(number);
console.log(opacity);

//Boolean(불린 데이터)
//true, false 두 가지 값 밖에 없는 논리 데이터
let checked = true;
let isShow = false;
console.log(checked);
console.log(isShow);


//Undefined
//값이 할당되지 않은 상태
let undef;
let obj = { 
  abc:123 //abc - 속성 (값이 할당된 obj의 속성)
}; 

console.log(undef); //Undefined
console.log(obj.abc); //123
console.log(obj.xyz); //Undefined //xyz - 속성(값이 할당되지 않은 obj의 속성)


//Null
//어떤 값이 의도적으로 비어있음을 의미.
let empty = null;
console.log(empty); //null

//Object (객체 데이터) {중괄호{}}
//여러 데이터를 Key:Value 형태로 저장하는 데이터의 집합
let user = {
  //Key : Value,
  name:'HEROPY',
  age:54,
  isValid: true
};

console.log(user.name); //HEROPY
console.log(user.age); //54
console.log(user.isValid); //true


// Array(배열 데이터)
// 여러 데이터를 순차적으로 저장합니다. [대괄호[]]
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); //Apple
console.log(fruits[1]); //Banana
console.log(fruits[2]); //Cherry

