

# BREAK - sai do for ou while

# Itera sobre os números de 1 a 99
for i in range(1, 100):
    # Verifica se o número é divisível por 7
    if i % 7 == 0:
        # Se for divisível por 7, imprime o número e sai do loop
        print("O primeiro número divisível por 7 é:", i)
        break  # interrompe o loop imediatamente após encontrar o número


# CONTINUE - termina uma operação e continua no bloco
    
# Itera sobre os números de 1 a 9
for i in range(1, 10):
    # Verifica se o número é igual a 6
    if i == 6:
        # Se for igual a 6, pula para a próxima iteração
        continue  # pula para a próxima iteração sem executar o restante do código no loop
    # Verifica se o número é par
    if i % 2 == 0:
        # Se for par (e diferente de 6), imprime o número
        print("Número par:", i)
