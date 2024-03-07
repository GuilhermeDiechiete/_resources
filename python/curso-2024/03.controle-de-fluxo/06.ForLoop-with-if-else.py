

status_compra = False

dados_compra = 'Compra no valor de R$12.50 e entrega confirmada...'



for enviar in range(3):
    if status_compra:
        print(dados_compra)
        print('Detalhes enviados para o seu e-mail.')
        break
    else: 
        print('Não foi possivel efetuar a compra')
