
'''
Dicionários consistem em uma estrutura de dados similar às listas, mas com propriedades de acesso diferentes.
Um dicionário é composto de um conjunto de chaves e valores.
o dicionário em si consiste em relacionar uma chave a um valor específico.

Em Python, criamos dicionários utilizando chaves {}.
Cada elemento do dicionário é uma combinação de chave e valor.
'''

tabela = {
    "Alface": 0.45,
    "Batata": 1.20,
    "Tomate": 2.30,
    "Feijão": 1.50
}
print(tabela)


# buscar um elemento
print(tabela["Tomate"])


# adicionar um elemento
tabela["Cebola"] = 1.20
print(tabela)

# listar as keys
print(tabela.keys())

# listar os valores
print(tabela.values())

# deletar um elemento
del tabela["Tomate"]
print(tabela)