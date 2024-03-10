

# Definindo uma lista
lista = [1, 2, 3, 4, 5]

# Solicitando ao usuário que insira um valor
valor = int(input("Digite um número para verificar se está na lista: "))

# Verificando se o valor está na lista
if valor in lista:
    print(f"O elemento {valor} está presente na lista.")
else:
    print(f"O elemento {valor} não está presente na lista.")
