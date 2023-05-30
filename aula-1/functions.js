// let ola = function(){
//     return "ola";
// }

// let olaa = () => {
//     return "ola";
// }

// let hello = () => "hello";

// let soma = (numero) => "2" + numero;

// let subtrair = numero => "2" + numero;

//exemplo 1 
let a = 5;
let b = 10;

let soma = (num1, num2) => num1 + num2;

console.log("o resultado da soma é:", soma(a, b));

//exemplo 2
const conta = (x, y) => {
    let operacao;

    if (x > 5) {
        operacao = x * y;
    } else {
        operacao = x / y; // 5 / 10 = 0.5
    }

    return operacao;
}

console.log("o resultado da conta foi: ", conta(a, b));










