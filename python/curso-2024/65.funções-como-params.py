

def dobrar(numero):
    """Dobra o valor do número."""
    return numero * 2

def triplicar(numero):
    """Triplica o valor do número."""
    return numero * 3

def aplicar_operacao(numero, funcao):
    """
    Aplica a função especificada ao número fornecido.
    
    Argumentos:
    numero (int): O número ao qual aplicar a função.
    funcao (function): A função a ser aplicada ao número.
    
    Retorna:
    int: O resultado da aplicação da função ao número.
    """
    return funcao(numero)

# Chamando a função aplicar_operacao() com a função dobrar como parâmetro
resultado_dobrar = aplicar_operacao(5, dobrar)
print("Resultado ao dobrar:", resultado_dobrar)  # Saída: Resultado ao dobrar: 10

# Chamando a função aplicar_operacao() com a função triplicar como parâmetro
resultado_triplicar = aplicar_operacao(5, triplicar)
print("Resultado ao triplicar:", resultado_triplicar)  # Saída: Resultado ao triplicar: 15
