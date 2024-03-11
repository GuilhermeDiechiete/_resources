

# Exemplo de uma função que divide dois números
def dividir(x, y):
    """
    Divide dois números e retorna o resultado.
    
    Argumentos:
    x (int): O numerador.
    y (int): O denominador.
    
    Retorna:
    float: O resultado da divisão.
    """
    try:
        resultado = x / y  # Tenta realizar a divisão
    except ZeroDivisionError:
        # Se ocorrer um erro de divisão por zero, trata a exceção
        print("Erro: Divisão por zero!")
        resultado = None  # Define o resultado como None em caso de erro
    finally:
        # O bloco finally é opcional e é executado sempre, independentemente de ocorrer uma exceção ou não
        print("Operação de divisão concluída.")
    
    return resultado

# Chamando a função para dividir 10 por 2
resultado1 = dividir(10, 2)
print("Resultado da divisão de 10 por 2:", resultado1)  # Saída: Resultado da divisão de 10 por 2: 5.0

# Chamando a função para dividir 10 por 0 (o que resultará em uma exceção)
resultado2 = dividir(10, 0)
print("Resultado da divisão de 10 por 0:", resultado2)  # Saída: Resultado da divisão de 10 por 0: None
