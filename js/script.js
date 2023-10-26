// Criando a promessa
 const  MinhaPromise = new Promise((resolve,reject)=>{
    const nome = "Matheus"

    if(nome === "Matheus"){
        resolve('Usuario Matheus encontrado!'
        )
    }else{
        reject('Usuario Matheus não foi encontrado')

    }
 })
MinhaPromise.then((data)=>{
    console.log(data)
})

// Encadeamento de then's
const  MinhaPromise2 = new Promise((resolve,reject)=>{
    const nome = "Matheus"

    if(nome === "Matheus"){
        resolve('Usuario Matheus encontrado!'
        )
    }else{
        reject('Usuario Matheus não foi encontrado')

    }
 })
MinhaPromise2.then((data)=>{
    return data.toLowerCase()
})
.then((stringModificada)=>{
    console.log(stringModificada)
})

// Retorno do catch
const  MinhaPromise3 = new Promise((resolve,reject)=>{
    const nome = "Lucas"

    if(nome === "Matheus"){
        resolve('Usuario Matheus encontrado!'
        )
    }else{
        reject('Usuario Matheus não foi encontrado')

    }
 })
MinhaPromise3.then((data)=>{
    console.log(data)
}).catch((erro)=>{
    console.log('Aconteceu um erro: ' + erro)
})

// Resolvendo varias promessas com all

const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('P1 ok !')
    }, 2000);
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok !')
})
const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok !')
})

const resolveAll = Promise.all([p1,p2,p3]).then((data)=>{
    console.log(data)
})

// Varias promessas com race

const p4 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('P4 ok !')
    }, 2000);
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok !')
})
const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok !')
})

const resolveAllRace = Promise.race([p4,p5,p6]).then((data)=>{
    console.log(data)
})

// Fetch request na API do GitHub
// Fetch API

const userName = 'matheustellesrodrigues'
fetch(`https://api.github.com/users/${userName}`,{
    method: 'GET',
    headers:{
        Accept: 'application/vnd.github.v3+json',

    },
}).then((response)=>{
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data)=>{
    console.log(`O nome do usuario é: ${data.name}`)
})