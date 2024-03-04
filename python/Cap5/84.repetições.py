# Inicializando uma variável de controle
contador = 0

# Definindo a condição inicial do loop
while contador < 5:
    print("Contador:", contador)
    contador += 1  # Incrementando o contador a cada iteração

print("Loop concluído!")



# Inicializando uma variável de controle
contador = 0

# Definindo a condição inicial do loop
while contador < 5:
    # Verificando se o contador é par
    if contador % 2 == 0:
        print(contador, "é par")
    else:
        print(contador, "é ímpar")
    
    contador += 1  # Incrementando o contador a cada iteração

print("Loop concluído!")
