

# Classe base (ou superclasse)
class Animal:
    def __init__(self, nome):
        self.nome = nome

    def fazer_som(self):
        print("Fazendo algum som...")

# Classe derivada (ou subclasse) que herda de Animal
class Cachorro(Animal):
    def fazer_som(self):
        print("Au au!")

# Classe derivada (ou subclasse) que herda de Animal
class Gato(Animal):
    def fazer_som(self):
        print("Miau!")

# Criando instâncias das subclasses
cachorro = Cachorro("Rex")
gato = Gato("Frajola")

# Chamando métodos das instâncias
print(cachorro.nome)  # Saída: Rex
cachorro.fazer_som()  # Saída: Au au!

print(gato.nome)      # Saída: Frajola
gato.fazer_som()      # Saída: Miau!
