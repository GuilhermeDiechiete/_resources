
# Criando uma lista
lista = ['a', 'b', 'c', 'd', 'e']

# Usando slice para acessar os elementos da lista a partir do índice 1 até o índice 3 (exclusivo)
fatia = slice(1, 4)
print(lista[fatia])  # Saída: ['b', 'c', 'd']

# Criando uma lista
lista = ['a', 'b', 'c', 'd', 'e']

# Usando slice para atribuir novos valores à parte da lista
fatia = slice(1, 4)
lista[fatia] = ['x', 'y', 'z']
print(lista)  # Saída: ['a', 'x', 'y', 'z', 'e']

# Criando uma lista
lista = ['a', 'b', 'c', 'd', 'e']

# Usando slice para acessar elementos com um intervalo específico (cada segundo elemento)
fatia = slice(0, len(lista), 2)
print(lista[fatia])  # Saída: ['a', 'c', 'e']

# Criando uma string
string = "abcdef"

# Usando slice para acessar uma parte da string
fatia = slice(1, 4)
print(string[fatia])  # Saída: 'bcd'
