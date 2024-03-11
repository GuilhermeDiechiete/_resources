
frase = "Python é uma linguagem de programação poderosa"


# DIVIDINDO A STRING

# Dividindo a string em uma lista de palavras usando espaço como delimitador padrão
palavras = frase.split()

print("Lista de palavras:", palavras)  

frase_csv = "Maçã, Banana, Laranja, Morango"
frutas = frase_csv.split(", ")

print("Lista de frutas:", frutas)  



# SUBSTITUIR UMA PALAVRA

# Substituindo uma palavra por outra
nova_frase = frase.replace("Python", "JavaScript")

# Imprimindo a nova frase
print("Nova frase:", nova_frase)  

# Substituindo todos os espaços em branco por hífens
frase_formatada = frase.replace(" ", "-")

print("Frase formatada:", frase_formatada)  
