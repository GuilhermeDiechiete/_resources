# Exemplo simples
nome = "João"
idade = 30
print(f"Olá, meu nome é {nome} e eu tenho {idade} anos.")  # Saída: Olá, meu nome é João e eu tenho 30 anos.

# Expressões dentro de f-strings
a = 10
b = 20
print(f"A soma de {a} e {b} é {a + b}.")  # Saída: A soma de 10 e 20 é 30.

# Chamadas de função dentro de f-strings
def saudacao():
    return "Olá"
print(f"{saudacao()}, mundo!")  # Saída: Olá, mundo!

# Formatação numérica
valor = 123.456789
print(f"O valor é {valor:.2f}")  # Saída: O valor é 123.46

# Alinhamento e preenchimento
titulo = "Python"
print(f"{titulo:>10}")  # Saída:    Python
print(f"{titulo:<10}")  # Saída: Python
print(f"{titulo:^10}")  # Saída:  Python
print(f"{titulo:=^10}")  # Saída: ==Python==
