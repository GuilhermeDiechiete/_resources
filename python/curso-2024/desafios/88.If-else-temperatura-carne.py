

temp_cel = int(input('Qual a temperatura da carne? '))

if temp_cel < 48:
    print('Cozinhar por mais alguns minutos')
elif temp_cel in range(54, 59):
    print('Selada')
elif temp_cel in range(54, 59):
    print('Ao ponto para o mal')
elif temp_cel in range(60, 64):
    print('Ao ponto')
elif temp_cel in range(65, 70):
    print('Ao ponto para o bem')
elif temp_cel >= 71:
    print('Bem passada')
elif temp_cel > 100:
    print('Carne queimada')