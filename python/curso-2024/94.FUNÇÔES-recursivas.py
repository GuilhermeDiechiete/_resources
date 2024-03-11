

def fatorial(n):
    """
    Calcula o fatorial de um número inteiro não negativo.
    
    Argumentos:
    n (int): O número inteiro para o qual calcular o fatorial.
    
    Retorna:
    int: O fatorial de n.
    """
    # Verifica se o número é 0 ou 1, pois o fatorial de 0 é 1 e o fatorial de 1 é 1
    if n == 0 or n == 1:
        return 1
    else:
        # Chamada recursiva: chama a função fatorial() dentro dela mesma com um argumento menor
        # O fatorial de n é calculado multiplicando n pelo fatorial de n-1
        return n * fatorial(n - 1)

# Chamando a função para calcular o fatorial de 5 e armazenando o resultado em uma variável
resultado = fatorial(5)

# Imprimindo o resultado
print("O fatorial de 5 é:", resultado)  # Saída: O fatorial de 5 é: 120
