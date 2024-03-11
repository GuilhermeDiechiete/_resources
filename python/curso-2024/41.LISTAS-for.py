

Lista = [ 9, 6, 10 ]

for item in Lista:
    print(item)


L = [ 3, 5, 3, 11, 55, 9, 0 ]
x = 0
while x < len(L):
    e = L[x]
    print(e)
    x += 1



# Exemplo 3: Range
for item in range(10):
    print(item)


# Exemplo 4: Enumeração
y = 0
for item in L:
    print(f'[{y}] {item}')
    y += 1