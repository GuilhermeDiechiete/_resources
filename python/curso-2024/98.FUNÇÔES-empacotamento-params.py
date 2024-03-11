

def minha_funcao(*args):
    """
    Esta função empacota os argumentos fornecidos em uma tupla.
    
    Argumentos:
    *args: Um número variável de argumentos.
    
    Retorna:
    tuple: Uma tupla contendo todos os argumentos fornecidos.
    """
    return args

# Chamando a função com diferentes números de argumentos
resultado1 = minha_funcao(1, 2, 3)
resultado2 = minha_funcao("a", "b", "c", "d")

# Imprimindo os resultados
print("Resultado 1:", resultado1)  # Saída: Resultado 1: (1, 2, 3)
print("Resultado 2:", resultado2)  # Saída: Resultado 2: ('a', 'b', 'c', 'd')
