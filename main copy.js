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
let isShow1 = true;
let checked1 = false;

if(isShow1){
  console.log('Show!'); //Show!
}

if(checked1){
  console.log('Checked!');
}

let isShow2 = true;

if(isShow2){
  console.log('Show!'); //Show!
}else {
  console.log('Hide!'); 
}


//Dom
//HTML 요소 (Element) 1개 검색/ 찾기 (제일 첫번재)
//document ; 브라우저에서 제공하는 객체 데이터 
//querySelector ; html요소를 검색하고 찾아주는 명령(메소드)
//('.box'); css 선택자
let boxEl = document.querySelector('.box');
console.log(boxEl);

//HTML 요소에 적용할 수 있는 메소드!
//boxEl.addEventListener();

//인수 추가기능!
//boxEl.addEventListener(1,2);

// 1-이벤트(Event,상황)
//boxEl.addEventListener('click',2);

// 2-핸들러(Handler, 실행할 함수)
//classList ; 해당하는 요소가 가지고 있는 클래스에 대한 정보를 가진 객체
boxEl.addEventListener('click',function(){
  console.log('Click~!');
  boxEl.classList.add('active');
});

// 요소의 클래스 정보 객체 활용!
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains); //true

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains); //false

//HTML 요소 모두 검색/ 찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

//boxEls; 배열처럼 사용되는 유사 배열
//찾은 요소들 반복해서 함수 실행!
//익명 함수를 인수로 추가!
boxEls.forEach(function() {});

//첫번째 매개변수(boxEl) : 반복 중인 요소.
//두번째 매개변수(index) : 반복 중인 번호
boxEls.forEach(function(boxEl, index){});

//출력!
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index +1}`);
  console.log(index,boxEl);
});

//const boxEl = document.querySelector('.box');
//Getter 값을 얻는 용도
console.log(boxEl.textContent); //1!!

//Setter, 값을 지정하는 용도
boxEl.textContent='boxboxbox!';
console.log(boxEl.textContent); //boxboxbox!

//메소드 체이닝
const chain = '화이팅';
//split ; 문자를 인수 기준으로 쪼개서 배열로 반환.
//reverse ; 배열을 뒤집기
//join ; 배열을 인수 기준으로 문자로 병합해 반환.
const chainme =chain.split('').reverse().join(''); //메소드 체이닝..
console.log(chain); //화이팅
console.log(chainme); //팅이화 


