

# Classes são utilizadas para agrupar dados e funções, podendo reutilizar


# criar uma classe Construtora
class Funcionarios:

    def __init__( self, name, lastname, age ):
        self.name = name
        self.lastname = lastname
        self.age = age

    def saudação(self):
        return f"Olá {self.name} {self.lastname}, tudo bem?"

# criar o objeto
user1 = Funcionarios('Guilherme', 'Diechiete', 24)
user2 = Funcionarios('Dhaniela', 'Souza', 25)

print(user1.name)
print(user2.name)

print(user1.saudação())
#ou
print(Funcionarios.saudação(user1)) # mais correto



 
