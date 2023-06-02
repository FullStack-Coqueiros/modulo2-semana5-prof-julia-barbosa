//exemplo 1
// function getUser(id){
//     return fetch(`https://reqres.in/api/users?id=${id}`)
//     .then((data) => data.json())
//     .catch((err) => console.log('aconteceu um erro' + err));
// }

// async function showUserName(id){
//     try {
//         const user  = await getUser(id)
//         console.log(user);
//         console.log(`o nome do usuario é:${user.data.first_name}`)
//     } catch (error) {
//         console.log(`Erro:${error}`);
//     }
// }

// showUserName(3);

//exemplo 2
async function getPeople(){
    try {
        const people = await fetch('https://randomuser.me/api/?results=100');
        return people.json();
    } catch (error) {
        console.log(`error:${error}`);
    }
}

getPeople().then( data => console.log(data) ); //obter dados do servidor

//buscar só mulheres nos dados
getPeople().then( data => {
    const mulheres = data.results
    console.log(mulheres.filter(m => m.gender === 'female'));
})

getPeople().then( data => {
    const nome = data.results
    console.log(nome.find(n => n.name.title === 'Mr'));
})

getPeople().then( data => {
    const maiorIdade = data.results
    console.log(maiorIdade.every(i => i.dob.age >= 18));
})