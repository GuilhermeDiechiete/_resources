
# Conjuntos, set em Python, são uma estrutura de dados  que implementam operações de união, intersecção e diferença, entre outras.
# Não admite repetições de elementos.

a = set() # setando uma variavel

# adicionar valores
a.add(1)
a.add(2)
a.add(3)
print(a)

# não deixa adicionar valores repetidos
a.add(1)
print(a)

# testar se um elemento faz parte de um conjunto
if(1 in a):
    print(True)
else:
    print(False)

# Criar com listas
b = set([2,3])
print(b)

# tamanho do conjunto
print(len(a), len(b))