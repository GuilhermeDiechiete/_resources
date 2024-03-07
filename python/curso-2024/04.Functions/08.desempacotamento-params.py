
def saudar(nome, sobrenome):
    """
    Esta função desempacota os argumentos fornecidos e os usa para criar uma mensagem de saudação.
    
    Argumentos:
    nome (str): O primeiro nome da pessoa.
    sobrenome (str): O sobrenome da pessoa.
    
    Retorna:
    str: Uma mensagem de saudação personalizada.
    """
    return f"Olá, {nome} {sobrenome}!"

# Criando uma lista com os argumentos
argumentos = ["John", "Doe"]

# Chamando a função com a lista desempacotada
mensagem = saudar(*argumentos)

# Imprimindo a mensagem de saudação
print(mensagem)  # Saída: Olá, John Doe!
