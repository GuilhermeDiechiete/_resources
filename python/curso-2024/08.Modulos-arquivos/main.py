

# importar todo o arquivo
import functions

functions.multi()
functions.somar()


# importar apenas o que precisa
from functions2 import somar 
somar()


# importar varias funções 
from functions2 import somar, multi 
multi()
somar()