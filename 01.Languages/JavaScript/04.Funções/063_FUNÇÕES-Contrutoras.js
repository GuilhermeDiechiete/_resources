function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidade = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}