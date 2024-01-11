//getters -> ler   setters -> alterar

const sequencia = {
    _valor: 1, // _ -> convenção (pretendida ser acessada apenas dentro desse objeto)

    get valor(){ return this._valor++},
    set valor(valor){
        if(valor > this._valor){ // validação, nao pode voltar o valor
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900 // vai ignorar porque é um valor menor
console.log(sequencia.valor, sequencia.valor)