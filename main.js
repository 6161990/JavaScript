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

//변수 var, let, const
//var는 사용하지 않음을 권장
//재사용이 가능!
let a = 2;
let b = 6;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//let: 값의 재할당 가능
let c  = 9;
console.log(c);
c  = 99;
console.log(c);

//const: 값의 재할당 불가
const d  = 10;
console.log(d);
//d  = 990;
console.log(d); //TypeError : Assignment to constant variable


//예약어 : 특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어
// let this ='Hello!'; //SyntaxError
// let if =123;  //SyntaxError
// let break =true;  //SyntaxError

//함수 
function helloFunc(){
  //실행코드
  console.log(1234);
}

//함수호출
helloFunc(); //1234

function returnFunc(){
  return 123;
}

let aer = returnFunc();

console.log(aer); //123

//함수 선언!
function sum(z,r) { //a,b는 매개변수
  return z+r;
}

//재사용!
let j = sum(1,2); //1과 2는 인수 
let k = sum(7,12);
let y = sum(3,10);
console.log(j,k,y); //3,19,13

//가명(이름이 있는) 함수 
//함수 선언
function hello2(){
  console.log('Hello!');
}

//익명(이름이 없는) 함수
//함수 표현!
let world = function(){
  console.log('World');
}

//함수 호출!
hello2(); //Hello!
world(); //World

//객체 제이터
const yoon = {
  name: 'yoonji',
  age : 27,
  //메소드(method)
  getName:function(){
    return this.name;
  }
};

const herName = yoon.getName();
console.log(herName); //yoonji
console.log(yoon.getName()); //yoonji
console.log(yoon.name); //yoonji


//조건문
let isShow = true;
let checked = false;

if(isShow){
  console.log('Show!'); //Show!
}

if(checked){
  console.log('Checked!');
}

let isShow1 = true;

if(isShow1){
  console.log('Show!'); //Show!
}else {
  console.log('Hide!'); 
}