
#  ATALHOS GLOBAIS 

Ctrl + C [ Cancela o comando atual em funcionamento ]
Ctrl + Z [ Pausa o comando atual, retorna com "fg" em primeiro plano Linux ou "bg" em segundo plano.]
Ctrl + D [ Faz o logout da sessão atual (similar ao comando "exit")]
Ctrl + W [ Apaga uma palavra na linha atual. ]
Ctrl + U [ Apaga a linha inteira ]
Ctrl + R [ Tecle para Exiber um comando recente ]

!! [ Repete o último comando ]
exit [ Faz o logout da sessão atual ]

ls [ Lista de diretórios ]
ls -al [ Lista de diretórios com exibição de arquivos ocultos ]

cd <diretorio> [ Muda do diretório atual para o especificado ]
cd [ Muda para o diretório home ]

pwd [ Exibe o caminho do diretório atual ]

mkdir [ Cria um diretório especificado ]

rm <arq> [ Apaga o arquivo especificado ]
rm -r <diretorio> [ Apaga o diretório especificado ]
rm -f <diretorio> [ Apaga o arquivo especificado forçadamente ]
rm -rf <diretorio> [ Apaga o diretório especificado forçadamente ]

cp -r <arquivo1> <arquivo2> [ Copia o “arquivo1” para o “arquivo2” ]
cp -r <dir1> <dir2> [ Copia o “diretório1” para o “diretório2”; cria o “diretório2” caso não exista ]

mv <arq1> <arq2> [ Dupla função: Pode ser usado para renomear ou mover o “arquivo1” para “arquivo2”. Se o arquivo2 for um diretório existente, move “arquivo1” para dentro do diretório “arquivo2” ]

ln -s <arq> link [ Cria um link simbólico, link (atalho) para o arquivo ]

touch <arq> [ Cria ou atualiza o arquivo ]

cat > <arq> [ Direciona a entrada padrão para um arquivo ]

more <arq> [ Exibe o conteúdo de um arquivo ]
head <arq> [ Exibe as primeiras 10 linhas de um arquivo ]
tail <arq> [ Exibe as últimas 10 linhas de um arquivo ] 
tail -f <arq> [ Exibe o conteúdo de um arquivo enquanto ele é atualizado (aumenta de tamanho), iniciando com as últimas 10 linhas ]

ps [ Exibe os processos dos usuários ativos em tempo real. ]

top [ Exibe todos os processos rodando em tempo real. ]

kill pid [ Mata um processo específico pelo número ID (substituir pid pelo número do processo). ]
killall proc [ Mata todos os processos com o nome especificado proc, de processos (substituir proc pelo nome do processo) ]

bg [ Lista trabalhos parados ou em segundo plano, ou pode continua-los também. ]
fg [ Traz o trabalho mais recente para o primeiro plano. ]

fg trab [ Traz o trabalho “trab” para o primeiro plano (substituir trab pelo nome do processo). ]