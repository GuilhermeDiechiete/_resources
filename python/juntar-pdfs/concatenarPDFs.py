import PyPDF2 # modulo manipar PDFs
import os # modulo manipular Sistema Operacional

merger = PyPDF2.PdfMerger()

lista_arquivos = os.listdir("arquivos") # identificando a pasta que contém os arquivos em PDF
lista_arquivos.sort() # ordenar a lista de arquivos
print(lista_arquivos) # print para ver os arquivos

# for para rodar todos os PDF que estão na pasta
for arquivo in lista_arquivos:
    if ".pdf" in arquivo:
        merger.append(f"arquivos/{arquivo}") # adicionando os arquivos

merger.write("PDF Final.pdf") # salvar o PDF final