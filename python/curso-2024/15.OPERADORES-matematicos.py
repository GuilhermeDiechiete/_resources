# Adição (+): Usado para adicionar dois valores.
resultado = 10 + 5
print(resultado)  # Saída: 15

# Subtração (-): Usado para subtrair um valor de outro.
resultado = 10 - 5
print(resultado)  # Saída: 5

# Multiplicação (*): Usado para multiplicar dois valores.
resultado = 10 * 5
print(resultado)  # Saída: 50

# Divisão (/): Usado para dividir um valor por outro. Retorna um resultado de ponto flutuante.
resultado = 10 / 5
print(resultado)  # Saída: 2.0

# Divisão inteira (//): Usado para dividir um valor por outro e retornar apenas a parte inteira do resultado.
resultado = 10 // 3
print(resultado)  # Saída: 3

# Módulo (%): Retorna o resto da divisão do primeiro valor pelo segundo.
resultado = 10 % 3
print(resultado)  # Saída: 1

# Exponenciação (**): Usado para elevar um valor à potência de outro.
resultado = 2 ** 3
print(resultado)  # Saída: 8



# Exemplo 1: Aumento de valor em uma porcentagem

valor = 100
taxa_aumento = 10  # 10%

# Calculando o aumento em valor usando parenteses para garantir a precedência
aumento = valor * (taxa_aumento / 100)

print(aumento)  # Saída: 10.0


# Exemplo 2: Desconto de valor em uma porcentagem

valor = 100
taxa_desconto = 20  # 20%

# Calculando o desconto em valor usando parenteses para garantir a precedência
desconto = valor * (taxa_desconto / 100)

print(desconto)  # Saída: 20.0


# Exemplo 3: Calculando o valor total com base em uma porcentagem

valor = 100
taxa_aumento = 10  # 10%

# Calculando o aumento em valor e adicionando ao valor original
total = valor + valor * (taxa_aumento / 100)

print(total)  # Saída: 110.0
