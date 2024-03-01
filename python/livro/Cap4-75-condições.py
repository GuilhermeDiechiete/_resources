
a = int(input("Digite o primeiro valor:"))
b = int(input("Digite o segundo valor:"))

if a > b:
    print("O primeiro valor é maior")
if b > a:
    print("O segundo valor é maior")


# Exemplo 1: Verificando se um número é positivo, negativo ou zero
numero = 10

if numero > 0:
    print("O número é positivo.")
elif numero < 0:
    print("O número é negativo.")
else:
    print("O número é zero.")

# Saída: O número é positivo.

# Exemplo 2: Verificando se um número é par ou ímpar
numero = 7

if numero % 2 == 0:
    print("O número é par.")
else:
    print("O número é ímpar.")

# Saída: O número é ímpar.

# Exemplo 3: Verificando se um aluno foi aprovado, reprovado ou está de recuperação com base em sua nota
nota = 75

if nota >= 70:
    print("Aluno aprovado.")
elif nota >= 40:
    print("Aluno em recuperação.")
else:
    print("Aluno reprovado.")

# Saída: Aluno aprovado.

# Exemplo 4: Verificando se um ano é bissexto
ano = 2024

if (ano % 4 == 0 and ano % 100 != 0) or (ano % 400 == 0):
    print("O ano é bissexto.")
else:
    print("O ano não é bissexto.")

# Saída: O ano é bissexto.
