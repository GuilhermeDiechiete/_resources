// Type annotation e type inference são dois conceitos fundamentais em TypeScript relacionados à definição de tipos de variáveis e valores.

/*
Type Annotation:

A type annotation é uma maneira explícita de definir o tipo de uma variável ou valor em TypeScript.
Isso é feito adicionando um tipo após o nome da variável, seguido por dois pontos (:).
A type annotation informa ao compilador TypeScript qual deve ser o tipo da variável.
Exemplo:
*/ 

let user_age: number = 25;
let user_name: string = "João";

/*
Type Inference:

O type inference é a capacidade do TypeScript de deduzir automaticamente o tipo de uma variável com base no valor atribuído a ela.
Quando o TypeScript detecta uma atribuição de valor a uma variável, ele analisa o tipo desse valor e, se possível, atribui automaticamente esse tipo à variável.
O type inference permite que os desenvolvedores escrevam menos código, pois não precisam declarar explicitamente os tipos em todas as variáveis.
Exemplo:
*/ 

let idade = 25; // TypeScript inferirá que 'idade' é do tipo 'number'
let nome = "João"; // TypeScript inferirá que 'nome' é do tipo 'string'


/*
Ambos os conceitos são importantes em TypeScript:

O type annotation é útil quando você deseja fornecer explicitamente o tipo de uma variável, especialmente quando o tipo não pode ser facilmente inferido pelo TypeScript.

O type inference é útil para reduzir a quantidade de código necessário, pois permite que o TypeScript deduza automaticamente os tipos das variáveis com base nos valores atribuídos a elas.

Em muitos casos, o TypeScript pode usar o type inference para inferir os tipos corretamente, tornando a declaração explícita de tipos (type annotation) opcional. 

No entanto, é comum e, às vezes, recomendado fornecer type annotations para tornar o código mais claro e expressivo, especialmente em situações onde a inferência automática pode não ser óbvia ou para fins de documentação do código.

*/ 
