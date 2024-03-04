# Função para contar cédulas
def contar_cedulas(valor):
    # Inicializa as variáveis para contar as cédulas
    cedulas_100 = cedulas_50 = cedulas_20 = cedulas_10 = cedulas_5 = cedulas_1 = 0
    
    # Loop enquanto o valor for maior que 0
    while valor > 0:
        if valor >= 100:
            cedulas_100 += 1
            valor -= 100
        elif valor >= 50:
            cedulas_50 += 1
            valor -= 50
        elif valor >= 20:
            cedulas_20 += 1
            valor -= 20
        elif valor >= 10:
            cedulas_10 += 1
            valor -= 10
        elif valor >= 5:
            cedulas_5 += 1
            valor -= 5
        else:
            cedulas_1 += valor
            break  # Interrompe o loop quando não há mais cédulas a considerar
    
    # Retorna a quantidade de cada tipo de cédula
    return cedulas_100, cedulas_50, cedulas_20, cedulas_10, cedulas_5, cedulas_1

# Teste da função
valor = 156
cedulas = contar_cedulas(valor)
print("Cédulas de 100:", cedulas[0])
print("Cédulas de 50:", cedulas[1])
print("Cédulas de 20:", cedulas[2])
print("Cédulas de 10:", cedulas[3])
print("Cédulas de 5:", cedulas[4])
print("Cédulas de 1:", cedulas[5])
