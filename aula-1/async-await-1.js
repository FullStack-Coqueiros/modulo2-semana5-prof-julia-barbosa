// //exemplo 1
function saudacao(){
    return "primeiro eu";
}

console.log(saudacao());

// // //exemplo 2
let ola = async () => { return "olá, arrow function"};
ola().then(console.log);

// // //exemplo 3
async function saudacaoAsync(){
    return saudacao = await Promise.resolve("depois eu!");
}

saudacaoAsync().then(console.log);

//exemplo 4
function primeiraFuncao(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('esperou a promise ser executada');
            resolve()
        }, 5000);
    })
}

async function segundaFuncao(){
    console.log('iniciou');

    await primeiraFuncao();

    console.log('depois terminou');
}

segundaFuncao();
