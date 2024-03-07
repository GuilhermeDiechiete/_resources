

# Exemplo 1: Função para somar dois números
def somar(a, b):
    """
    Esta função recebe dois números como parâmetros e retorna a soma deles.
    """
    resultado = a + b
    return resultado

# Chamando a função e armazenando o resultado em uma variável
resultado_soma = somar(5, 3)

# Imprimindo o resultado
print("A soma é:", resultado_soma)  # Saída: A soma é: 8


# Exemplo 2: Função para verificar se um número é par ou ímpar
def par_ou_impar(numero):
    """
    Esta função recebe um número como parâmetro e retorna uma string indicando se é par ou ímpar.
    """
    if numero % 2 == 0:
        return "Par"
    else:
        return "Ímpar"

# Chamando a função e imprimindo o resultado diretamente
print("O número é:", par_ou_impar(10))  # Saída: O número é: Par


# Exemplo 3: Função para calcular o fatorial de um número
def fatorial(n):
    """
    Esta função recebe um número inteiro positivo como parâmetro e retorna o seu fatorial.
    """
    resultado = 1
    for i in range(1, n + 1):
        resultado *= i
    return resultado

# Chamando a função e armazenando o resultado em uma variável
resultado_fatorial = fatorial(5)

# Imprimindo o resultado
print("O fatorial de 5 é:", resultado_fatorial)  # Saída: O fatorial de 5 é: 120
