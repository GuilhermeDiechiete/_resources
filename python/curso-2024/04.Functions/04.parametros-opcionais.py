

def saudacao(nome, saudacao_padrao="Olá"):
    """
    Cumprimenta uma pessoa com uma saudação personalizada.
    
    Argumentos:
    nome (str): O nome da pessoa a ser cumprimentada.
    saudacao_padrao (str, opcional): A saudação padrão. Padrão é "Olá".
    
    Retorna:
    str: Uma mensagem de saudação personalizada.
    """
    # Concatena o nome com a saudação padrão para formar a mensagem de saudação
    mensagem = saudacao_padrao + ", " + nome + "!"
    return mensagem

# Chamando a função sem especificar o parâmetro opcional
print(saudacao("João"))  # Saída: Olá, João!

# Chamando a função e especificando o parâmetro opcional
print(saudacao("Maria", "Oi"))  # Saída: Oi, Maria!
