class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        if(this.tipo == "guerreiro"){
            console.log(`O ${this.tipo} atacou usando espada`)
        }
        else if(this.tipo == "ninja"){
            console.log(`O ${this.tipo} atacou usando shuriken`)
        }
        else if(this.tipo == "monge"){
            console.log(`O ${this.tipo} atacou usando Artes Marciais`)
        }
        else if(this.tipo == "mago"){
            console.log(`O ${this.tipo} atacou usando Magia`)
        }



    }
}

let resultado = new hero(nome = "Vinicius", idade = 18, tipo = "monge")
resultado.atacar()
