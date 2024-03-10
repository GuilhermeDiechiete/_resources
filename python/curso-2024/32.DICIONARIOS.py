


# Criando um dicionário com pares chave-valor
meu_dicionario = {"nome": "João", "idade": 30, "cidade": "São Paulo"}

# Acessando valores através das chaves
print("Nome:", meu_dicionario["nome"])    # Saída: Nome: João
print("Idade:", meu_dicionario["idade"])  # Saída: Idade: 30
print("Cidade:", meu_dicionario["cidade"])# Saída: Cidade: São Paulo

# Adicionando um novo par chave-valor
meu_dicionario["profissão"] = "Engenheiro"
print("Profissão:", meu_dicionario["profissão"])  # Saída: Profissão: Engenheiro

# Modificando um valor existente
meu_dicionario["idade"] = 35
print("Idade atualizada:", meu_dicionario["idade"])  # Saída: Idade atualizada: 35

# Removendo um par chave-valor
del meu_dicionario["cidade"]
print("Dicionário após remover 'cidade':", meu_dicionario)  # Saída: {'nome': 'João', 'idade': 35, 'profissão': 'Engenheiro'}

# Verificando se uma chave existe no dicionário
if "profissão" in meu_dicionario:
    print("A chave 'profissão' está presente no dicionário.")  # Saída: A chave 'profissão' está presente no dicionário.

# Iterando sobre as chaves do dicionário
print("Chaves do dicionário:")
for chave in meu_dicionario:
    print(chave)
# Saída:
# Chaves do dicionário:
# nome
# idade
# profissão
