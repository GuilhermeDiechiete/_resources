

# Definindo uma lista de listas (lista aninhada)
lista_aninhada = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Acessando elementos da lista aninhada
print("Elemento na linha 0, coluna 1:", lista_aninhada[0][1])  # Saída: 2
print("Elemento na linha 2, coluna 0:", lista_aninhada[2][0])  # Saída: 7

# Modificando elementos da lista aninhada
lista_aninhada[1][1] = 10
print("Lista aninhada após modificação:", lista_aninhada)  # Saída: [[1, 2, 3], [4, 10, 6], [7, 8, 9]]

# Adicionando uma nova linha à lista aninhada
nova_linha = [10, 11, 12]
lista_aninhada.append(nova_linha)
print("Lista aninhada após adição de nova linha:", lista_aninhada)  # Saída: [[1, 2, 3], [4, 10, 6], [7, 8, 9], [10, 11, 12]]
