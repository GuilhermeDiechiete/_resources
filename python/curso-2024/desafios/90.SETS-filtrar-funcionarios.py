

# Banco de dados: 
funcionarios = ['Ana', 'Marcos','Alice','Pedro','Sophia','Bruno', 'Melissa']
turno_dia = ['Ana', 'Marcos', 'Alice', 'Melissa']
turno_noite = ['Pedro', 'Sophia', 'Bruno']
tem_carro = ['Marcos','Alice', 'Bruno', 'Melissa']


# Lista1 - tem que ter carro e trabalhar a noite
lista1 = set(tem_carro).intersection(turno_noite)
print(lista1)

# Lista2 - tem carro e trabalha de dia
lista2 = set(tem_carro).intersection(turno_dia)
print(lista2)

# Lista3 - funcionarios que nao tem carro
lista3 = set(funcionarios).difference(tem_carro)
print(lista3)
