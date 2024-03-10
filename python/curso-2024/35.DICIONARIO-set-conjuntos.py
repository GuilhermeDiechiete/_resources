
# Criando um conjunto usando chaves
meu_set = {1, 2, 3, 4, 5}

# Ou criando um conjunto usando o construtor set()
meu_outro_set = set([4, 5, 6, 7, 8])

print("meu_set:", meu_set)                 # Saída: meu_set: {1, 2, 3, 4, 5}
print("meu_outro_set:", meu_outro_set)     # Saída: meu_outro_set: {4, 5, 6, 7, 8}





# União de conjuntos
uniao = meu_set | meu_outro_set
print("União:", uniao)         # Saída: União: {1, 2, 3, 4, 5, 6, 7, 8}

# Interseção de conjuntos
intersecao = meu_set & meu_outro_set
print("Interseção:", intersecao)  # Saída: Interseção: {4, 5}

# Diferença entre conjuntos
diferenca = meu_set - meu_outro_set
print("Diferença:", diferenca)    # Saída: Diferença: {1, 2, 3}

# Diferença simétrica entre conjuntos
diferenca_simetrica = meu_set ^ meu_outro_set
print("Diferença Simétrica:", diferenca_simetrica)  # Saída: Diferença Simétrica: {1, 2, 3, 6, 7, 8}
