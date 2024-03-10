
numeros = [2, 3, 4, 5]
letras = ['a', 'b', 'c', 'd']


# duplicar listas
duplicar = numeros * 2
print(duplicar)

concatenar = numeros + letras
print(concatenar)


numeros.extend(letras) # correto
print(numeros)


# listas dentro de listas
itens = [['item1', 'item2'], ['item3', 'item4']]
print(itens) # lista maior
print(itens[0]) # lista 1 de itens
print(itens[1]) # lista 2 de itens

print(itens[0][1]) # item indice 1 da lista 1