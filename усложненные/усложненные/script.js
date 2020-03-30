let num = 266219;
let multiply = 1;

num = num.toString();

for (let i = 0; i < num.length; i++){
    multiply *= num[i];
    console.log(multiply);
}

let multiply2 = multiply ** 3; 
console.log('После возведения в степень: ' + multiply2 );
multiply2 = multiply2.toString();
console.log('Первые 2 цифры: ' + multiply2.substr(0, 2));