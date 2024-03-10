

produtos = ['arroz', 'feijão', 'laranja', 'banana', 'maça']

item1 = produtos[0]
print(item1)

# adicionar valores em variaveis
item1, item2, item3, item4, *outros = produtos
print(item1, item2, item3, item4)



item1, item2, item3, *outros = produtos # * caso tenha mais valores