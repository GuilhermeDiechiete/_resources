
frase = "  O rato roeu a roupa do Rei de Roma  "

# tudo minusculo
print(frase.lower())

# tudo maiusculo
print(frase.upper())

# Contar quantas palavras existem em uma frase
print(frase.count("rato"))

# Pesquisa de string ( mostra posição do primeiro caracter )
print(frase.find('roup'))

# REMOVER ESPAÇOS

print(frase.strip()) # inicio e fim
print(frase.lstrip()) # inicio
print(frase.rsplit()) # final