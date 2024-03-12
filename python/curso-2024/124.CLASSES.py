

# Exemplo 1:

class Televisão: # nova classe - declando novo tipo de dado

    def __init__(self): # metodo init sempre será chamado quando criarmos objetos da classe Televisão

        # self - é tipo a classe televisão, podemos acessar os valores da classe pelo self
        self.ligada = False 
        self.canal = 2

    def muda_canal_para_baixo(self):
        self.canal -= 1

    def muda_canal_para_cima(self):
        self.canal += 1



tv = Televisão()
tv.muda_canal_para_cima()
tv.muda_canal_para_baixo()
print(tv.canal)

tv.muda_canal_para_baixo()
print(tv.canal)