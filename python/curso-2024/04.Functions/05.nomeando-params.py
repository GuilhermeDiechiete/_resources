

def criar_pessoa(nome, idade, cidade="Desconhecida"):
    """
    Cria um dicionário representando uma pessoa com nome, idade e cidade.
    
    Argumentos:
    nome (str): O nome da pessoa.
    idade (int): A idade da pessoa.
    cidade (str, opcional): A cidade onde a pessoa mora. Padrão é "Desconhecida".
    
    Retorna:
    dict: Um dicionário representando a pessoa com as informações fornecidas.
    """
    # Cria um dicionário com as informações da pessoa
    pessoa = {
        "Nome": nome,
        "Idade": idade,
        "Cidade": cidade
    }
    return pessoa

# Chamando a função com argumentos posicionais
pessoa1 = criar_pessoa("João", 30, "São Paulo")

# Chamando a função com argumentos nomeados
pessoa2 = criar_pessoa(nome="Maria", idade=25, cidade="Rio de Janeiro")

# Chamando a função com argumentos posicionais e nomeados misturados
pessoa3 = criar_pessoa("Pedro", idade=40)

# Imprimindo as pessoas criadas
print("Pessoa 1:", pessoa1)
print("Pessoa 2:", pessoa2)
print("Pessoa 3:", pessoa3)
