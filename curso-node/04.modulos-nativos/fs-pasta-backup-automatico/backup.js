const fs = require('fs');
const fsExtra = require('fs-extra');

const pastaOrigem = '/home/diechiete/Área de Trabalho/repository';

const pastaDestino = '/home/diechiete/Área de Trabalho/backup';


// Função para copiar um arquivo
function copiarArquivo(caminhoOrigem, caminhoDestino) {
    fsExtra.copy(caminhoOrigem, caminhoDestino, err => {
        if (err) {
            console.error('Erro ao copiar o arquivo:', err);
        } else {
            console.log('Arquivo copiado com sucesso:', caminhoOrigem);
        }
    });
}

// Função para observar mudanças na pasta de origem
function observarPasta() {
    fs.watch(pastaOrigem, (evento, nomeArquivo) => {
        if (evento === 'rename') {
            const caminhoOrigem = `${pastaOrigem}/${nomeArquivo}`;
            const caminhoDestino = `${pastaDestino}/${nomeArquivo}`;
            copiarArquivo(caminhoOrigem, caminhoDestino);
        }
    });
}

// Iniciar a observação da pasta de origem
observarPasta();
