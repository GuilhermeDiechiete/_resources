
# Variável global
global_var = 10

# Função que usa uma variável global e define uma variável local
def minha_funcao():
    # Usando a variável global dentro da função
    print("Variável global dentro da função:", global_var)
    
    # Definindo uma variável local
    local_var = 5
    print("Variável local dentro da função:", local_var)

# Chamando a função
minha_funcao()

# Tentando acessar a variável local fora do escopo da função resultará em um erro
# print("Variável local fora da função:", local_var)  # Isso resultará em um erro

# Imprimindo a variável global fora da função
print("Variável global fora da função:", global_var)
