
# Listas são um tipo de variável que permite o armazenamento de vários valores, acessados por um índice.
# Uma lista pode conter zero ou mais elementos de um mesmo tipo ou de tipos diversos, podendo inclusive conter outras listas.

Lista = [] # lista vazia

Lista = [ 15, 18, 11, 90 ] 
Nomes = ['Dhaniela', 'Guilherme', 'Antonio', 'Neusa', 'Luana']

# pegar um valor pelo indice
print(Lista[0]) 
print(Lista[2])


# Utilizando o nome da lista e um indice, podemos mudar o conteúdo de um elemento.
Lista[2] = 888
print(Lista)

# Ver o tamanho da lista
print(len(Lista))

# Adicionar um elemento no final da lista
Lista.append(444)
print(Lista)

# Remover um item da lista pelo nome
Lista.remove(18)
print(Lista)

# Inserir um item na posição correta
Lista.insert(3, 'Inserido' )
print(Lista)

# Retirar um item
Lista.pop(1)
print(Lista)

# Colocar em ordem - str
Nomes.sort()
print(Nomes)