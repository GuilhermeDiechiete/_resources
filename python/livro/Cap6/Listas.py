# Criando uma lista vazia
lista_vazia = []

# Criando uma lista com alguns elementos
lista_numeros = [1, 2, 3, 4, 5]

# Acessando elementos da lista pelo índice
primeiro_elemento = lista_numeros[0]  # Retorna 1
segundo_elemento = lista_numeros[1]   # Retorna 2

# Adicionando elementos a uma lista
lista_numeros.append(6)  # Adiciona o número 6 ao final da lista
lista_numeros.insert(2, 10)  # Adiciona o número 10 na posição 2 da lista

# Removendo elementos de uma lista
ultimo_elemento = lista_numeros.pop()  # Remove e retorna o último elemento da lista
primeiro_elemento_removido = lista_numeros.pop(0)  # Remove e retorna o primeiro elemento da lista

# Verificando o comprimento de uma lista
tamanho_lista = len(lista_numeros)  # Retorna 5

# Iterando sobre uma lista
for numero in lista_numeros:
    print(numero)

# Verificando se um elemento está na lista
if 3 in lista_numeros:
    print("O número 3 está na lista.")
else:
    print("O número 3 não está na lista.")
