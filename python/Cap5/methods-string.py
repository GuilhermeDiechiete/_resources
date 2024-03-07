
# Metodos para string

message = "  meu nome é Guilherme"

print(message.lower()) # tudo em minusculo
print(message.upper()) # tudo em maiusculo
print(message.capitalize()) # coloca a primeira letra da string em upper
print(message.find("u")) # mostra em qual index está a letra ( case )
print(message.find('nome')) # mostra onde uma palavra inicia ( -1 == nao encontrou )
print(message.replace('é', 'e')) # alterar ( antigo para o novo ) funciona palavras tbm
print(message.strip()) # retira os espaços no inicio da string

# buscar outros metodos

