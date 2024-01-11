class Filmes {
    constructor(titulo, ano, genero, diretor, atores, duracao){

        this.titulo = '',
        this.ano = '',
        this.genero = '',
        this.diretor = '',
        this.atores = [],
        this.duracao = 0
    }

    Reproduzir(){
        console.log("Reproduzindo...")
    }
    Pausar(){
        console.log("Pausado")
    }
    Avançar(){
        console.log("Avançar...")
    }
    Fechar(){
        console.log("Fechar...")
    }

}