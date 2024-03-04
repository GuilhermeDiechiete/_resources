// Type aliases (apelidos de tipos) em TypeScript permitem que você dê um nome a um tipo existente ou defina um novo tipo com base em outros tipos. Isso é útil para criar tipos complexos, reutilizáveis e autoexplicativos. Aqui estão alguns exemplos de como você pode usar type aliases:

// Criando um apelido para um tipo existente:

type Idade = number;
let idade: Idade = 25;


//Definindo um tipo complexo com base em outros tipos:
type Coordenada = {
    x: number;
    y: number;
};

type Retângulo = {
    cantoSuperiorEsquerdo: Coordenada;
    largura: number;
    altura: number;
};

let retângulo: Retângulo = {
    cantoSuperiorEsquerdo: { x: 0, y: 0 },
    largura: 100,
    altura: 50
};
