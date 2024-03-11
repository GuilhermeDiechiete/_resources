

# Inicializando uma lista vazia para representar a pilha
pilha = []

# Adicionando elementos à pilha usando o método append()
pilha.append(1)
pilha.append(2)
pilha.append(3)

print("Pilha após adicionar elementos:", pilha)  # Saída: Pilha após adicionar elementos: [1, 2, 3]

# Removendo elementos da pilha usando o método pop()
elemento_removido = pilha.pop()
print("Elemento removido da pilha:", elemento_removido)  # Saída: Elemento removido da pilha: 3
print("Pilha após remover elemento:", pilha)            # Saída: Pilha após remover elemento: [1, 2]

# Adicionando mais elementos à pilha
pilha.append(4)
pilha.append(5)

print("Pilha atualizada:", pilha)  # Saída: Pilha atualizada: [1, 2, 4, 5]
