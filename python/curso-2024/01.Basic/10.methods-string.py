

# Método capitalize(): Retorna uma cópia da string com o primeiro caractere em maiúsculo e o restante em minúsculo.
texto = "ola mundo"
print(texto.capitalize())  # Saída: Ola mundo

# Método upper(): Retorna uma cópia da string com todos os caracteres em maiúsculo.
texto = "ola mundo"
print(texto.upper())  # Saída: OLA MUNDO

# Método lower(): Retorna uma cópia da string com todos os caracteres em minúsculo.
texto = "OLA MUNDO"
print(texto.lower())  # Saída: ola mundo

# Método strip(): Remove espaços em branco (ou outros caracteres especificados) do início e do fim da string.
texto = "   Olá Mundo   "
print(texto.strip())  # Saída: Olá Mundo

# Método split(): Divide a string em uma lista de substrings com base em um delimitador especificado.
texto = "Olá,Mundo,Python"
print(texto.split(','))  # Saída: ['Olá', 'Mundo', 'Python']

# Método join(): Junta os elementos de uma lista em uma única string, usando a string original como separador.
lista = ['Olá', 'Mundo', 'Python']
print(','.join(lista))  # Saída: Olá,Mundo,Python

# Método replace(): Substitui todas as ocorrências de uma substring por outra substring.
texto = "Olá Mundo"
print(texto.replace('Mundo', 'Python'))  # Saída: Olá Python

# Método find(): Retorna o índice da primeira ocorrência de uma substring na string (ou -1 se não encontrada).
texto = "Olá Mundo"
print(texto.find('Mundo'))  # Saída: 4

# Métodos startswith() e endswith(): Verifica se a string começa ou termina com uma determinada substring.
texto = "Olá Mundo"
print(texto.startswith('Olá'))  # Saída: True
print(texto.endswith('Mundo'))  # Saída: True
