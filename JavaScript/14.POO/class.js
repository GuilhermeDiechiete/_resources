

class User {
    constructor(nome = "Guilherme", idade = 23){
        this.nome = nome 
        this.idade = idade
    }

    registrar(){
        console.log("Codigo registrar")
    }


}

const newUser = new User("Dhaniela", 24)