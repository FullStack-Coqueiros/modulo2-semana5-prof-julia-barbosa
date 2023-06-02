// const minhaPromise = new Promise((resolve, reject) => {
//     const presenca = "f";

//     if(presenca === "p"){
//         resolve(alert('aluno presente.'));
//     } else{
//         reject(alert('aluno faltou :('));
//     }
// })


// minhaPromise.then((presensaAluno) => {
//     console.log(presensaAluno);
// })

//exemplo 2
// const minhaPromise2 = new Promise((resolve, reject) => {
//     const nome = "Marcelo";

//     if(nome === "Marcelo"){
//         resolve('o usuario ' + nome + ' foi encontrado');
//     } else{
//         reject('o usuario ' + nome + ' não foi encontrado');
//     }
// })

// minhaPromise2.then((dado) => {
//     console.log("dado antes da modificação:", dado);
//     return dado.toUpperCase();
// }).then((dadoModificado) =>{
//     console.log("dado alterado: ", dadoModificado);
// });

//exemplo 3
// const minhaPromise3 = new Promise((resolve, reject) => {
//     const nome = "Anita";

//     if(nome === "Marcelo"){
//         resolve('o usuario ' + nome + ' foi encontrado');
//     } else{
//         reject('o usuario ' + nome + ' não foi encontrado');
//     }
// })

// minhaPromise3.then((dado) =>{
//     console.log("resultado feliz: ", dado);
// }).catch((err) =>{
//     console.log(alert("ocorreu um erro: ", err));
// })

//exemplo 4
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("promise p1 ok");
    }, 5000);
})

const p2 = new Promise((resolve, reject) => {
    resolve("promise p3 ok");
})

const p3 = new Promise((resolve, reject) => {
    resolve("promise p3 ok");
})

const resultadoAllPromisses = Promise.all([p1,p2,p3]).then((resultPromisses) =>{
    console.log("resultado das promisses: ",resultPromisses);
})

console.log("ola");