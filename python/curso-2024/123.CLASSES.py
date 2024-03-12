
# Exemplo 1:

class Televisão: # nova classe - declando novo tipo de dado

    def __init__(self): # metodo init sempre será chamado quando criarmos objetos da classe Televisão

        # self - é tipo a classe televisão, podemos acessar os valores da classe pelo self
        self.ligada = False 
        self.canal = 2

tv = Televisão()
print(tv.ligada)
print(tv.canal)