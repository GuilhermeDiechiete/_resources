# Loop externo
i = 1
while i < 4:
    print(f"Iteração externa {i}")
    
    # Loop interno
    j = 1
    while j < 4:
        print(f"Iteração interna {j}")
        j += 1
    
    i += 1

# Exemplo com listas aninhadas
matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Loop externo para acessar as sublistas
linha = 0
while linha < len(matriz):
    # Loop interno para acessar os elementos de cada sublista
    coluna = 0
    while coluna < len(matriz[linha]):
        print(matriz[linha][coluna], end=" ")
        coluna += 1
    print()  # Para pular para a próxima linha após imprimir uma linha da matriz
    linha += 1
