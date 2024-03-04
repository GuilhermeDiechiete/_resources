// O Non-null assertion operator (!) é um recurso do TypeScript que permite aos desenvolvedores informar explicitamente ao compilador que uma expressão não será null ou undefined. Isso é útil quando você tem certeza de que uma determinada expressão não será nula em tempo de execução, mas o TypeScript não pode inferir isso automaticamente. O operador ! é colocado após uma expressão para indicar que você está garantindo que essa expressão não será nula.


let nome: string | null = "João";
let comprimento: number = nome.length; // Erro: Object is possibly 'null'.

let comprimento2: number = nome!.length; // Sem erro, estamos informando ao TypeScript que 'nome' não será nulo.
