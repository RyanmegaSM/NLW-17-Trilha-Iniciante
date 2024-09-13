// Hello world

/*let mensagem = "Hello world"
console.log(mensagem);
*/


//arrays, objetos

/*let metas = ["Ryan", "alô"]

console.log(metas[1] + " " + metas[0])
*/

/*
let meta = {
    value: 'Ler um livro por mês',
    checked: false
}


let metas = [
    meta,
    {value: 'Caminhar 20 minutos todos os dias',
    checked: false
    }
]


console.log(metas[0].value)
//functions

const criarMeta = () => {} 
    */

const {select, input} = require('@inquirer/prompts')

let meta = {
    value: "Tomar 3l de agua por dia",
    checked: false,

}

let metas =[meta]



const cadastrarMeta = async() =>{
    const meta = await input({message:"Digite a meta: "})


    if(meta.length == 0){
        console.log("Necessario digitar algo!!")
        return cadastrarMeta()
    }
    metas.push({value: meta, checked:false})
}


const start = async()=>{
   while(true){
        const opcao = await select({
            message:"Menu >",
            choices:[
                {
                name: "Cadastrar meta",
                value: "cadastrar"
                }, 
                {
                    name:"Listar metas",
                    value:"listar"
                },
                {
                    name: "Sair",
                    value:"sair"
                }
            ]
    }) 
    
    
    
    switch(opcao){
        case "cadastrar":
            await cadastrarMeta()
            console.log(metas)
            break
        case "listar":
            console.log("Vamos listar")
            return listar()
            break
        case "sair":
        console.log("Até a proxima")   
        return    
    }

    
    }
}
    start()

