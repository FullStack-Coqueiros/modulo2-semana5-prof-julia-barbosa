// //ForEach - exec uma funcao em cada elemento do array.
const frutas = ['uva', 'maca', 'limao', 'jaca', 'banana'];

frutas.forEach(element => console.log(element));

// //map - exec uma funcao e manda um novo conjunto de dados
const numero = [1, 4, 9, 16];
console.log(numero);

const map1 = numero.map(element => element * 2);
console.log(map1);

//Filter  - usado pra filter ou remover dados dentro um array
//exemplo 1
const palavras = ['spray', 'limit', 'elite', 'exuberant', 'destruição', 'present'];

const resultado = palavras.filter(words => words.length > 6);
console.log("resultado:", resultado);

// //exemplo 2
const dadosDuplicados = [2, 4, 56, 45, 454, 454, 34, 34, 2, 4, 43, 89, 89];

const novoArray = dadosDuplicados.filter((element, index, arr) => arr.indexOf(element) === index);
console.log("novo array: ", novoArray);

// //Find - retornar o valor do primeiro elemento do array que satisfizer a função.
// //exemplo 1
const numeros = [5, 12, 6, 123, 33];

const encontrarNumeros = numeros.find(element => element > 10);
console.log("numeros maiores que 10:", encontrarNumeros);

//exemplo 2
const pizzas = ['portuguesa', 'calabresa', 'hawai', 'mussarela', 'marguerita'];

const encontrarPizza = pizzas.find(p => p.startsWith('m'));
console.log("pizza: ", encontrarPizza);

//exemplo 3
const pessoas = [
    { name: 'Marcelo', idade: 30 },
    { name: 'Samara', idade: 25 },
    { name: 'Luciano', idade: 30 },
    { name: 'Alessandra', idade: 28 },
    { name: 'Aline', idade: 29 },
]

const encontrarPessoa = pessoas.find(p => p.name === "Aline");
console.log("pessoa encontrada: ", encontrarPessoa);

// //Reduce 
// //exemplo 1
const foguetes = [
    { pais: 'Russia', lanc: 30 },
    { pais: 'Brasil', lanc: 29 },
    { pais: 'Japao', lanc: 300 },
    { pais: 'Alemanha', lanc: 20 },
    { pais: 'Estados Unidos', lanc: 10 }
]

const totalLancamento = foguetes.reduce((prevValor, elem) => prevValor + elem.lanc, 0);
console.log("resulto do lançamento: ", totalLancamento);

//exemplo 2 
const num = [1, 2, 3, 4];

const inicialValor = 0;

const somaValores = num.reduce((prevValor, elemento) => prevValor + elemento, inicialValor);
console.log("resultado da soma dos numeros: ", somaValores);

//every - sempre retorna um booleano
//exemplo 1
const limiteNumeros = [1, 30, 39, 29, 10, 13];

const menorLimite = (menorValor) => menorValor > 40;

console.log(limiteNumeros.every(menorLimite));

//exemplo 2
const turma = [
    { name: 'Marcelo', idade: 30 },
    { name: 'Samara', idade: 25 },
    { name: 'Luciano', idade: 30 },
    { name: 'Alessandra', idade: 28 },
    { name: 'Aline', idade: 29 },
]

console.log("idade:", turma.every((t => t.idade >= 18)));

//Some 
let isPrimo = (value) => {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
        return value > 1;
    }
}

const arrayNumeros = [6, 8, 11, 14, 42];
console.log("algum numero desse array é primo?", arrayNumeros.some(isPrimo));

