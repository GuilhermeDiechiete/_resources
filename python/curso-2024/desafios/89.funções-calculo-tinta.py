

rendimento = int(input('Qual é o rendimento da lata? '))
largura = int(input('Qual é a largura da parede? '))
altura = int(input('Qual é a altura da parede? '))

def calculo_rendimento():
    area = largura * altura
    total = area / rendimento
    print(f'Você precisa de {total} latas de tinta')

calculo_rendimento()