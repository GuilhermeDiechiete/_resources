

try:
    name = str(input('Digite seu nome: '))
    age = int(input('Digite sua idade: '))


except ValueError:
    print('Por valor digite um valor valido')

finally:
    print('Seguindo o formulario')