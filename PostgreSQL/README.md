
# Comandos Comuns do PostgreSQL (psql)

Bem-vindo! Este repositório contém uma lista dos 50 comandos mais comuns utilizados no PostgreSQL (psql).

## Primeiro - O que é PostgreSQL

O PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto, também conhecido como Postgres. Ele foi desenvolvido inicialmente como um projeto de pesquisa na Universidade da Califórnia, em Berkeley, em 1986. Desde então, tornou-se um dos sistemas de banco de dados mais avançados e robustos disponíveis.

Aqui estão alguns pontos-chave sobre o PostgreSQL:

Banco de Dados Relacional: O PostgreSQL é um sistema de gerenciamento de banco de dados relacional (RDBMS), o que significa que armazena dados em tabelas com relacionamentos entre elas. Ele segue os princípios do modelo relacional proposto pelo matemático Edgar F. Codd.

Código Aberto e Gratuito: O PostgreSQL é distribuído sob a licença PostgreSQL, uma licença de código aberto que permite o uso, modificação e distribuição gratuitos do software.

Suporte a Padrões SQL: O PostgreSQL é conhecido por seu alto nível de conformidade com os padrões SQL estabelecidos pelo ANSI (American National Standards Institute) e pela ISO (International Organization for Standardization). Ele suporta a maioria das funcionalidades padrão do SQL, além de oferecer extensões poderosas.

Extensibilidade: Uma das características mais fortes do PostgreSQL é sua capacidade de ser estendido por meio de recursos como funções definidas pelo usuário, tipos de dados personalizados, gatilhos, procedimentos armazenados (ou funções) e muito mais. Isso permite que os desenvolvedores personalizem e ampliem as capacidades do PostgreSQL conforme necessário.

Confiabilidade e Desempenho: O PostgreSQL é conhecido por sua confiabilidade, robustez e desempenho em ambientes de produção. Ele oferece recursos avançados de otimização de consultas, suporte a índices complexos e transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade) para garantir a integridade e consistência dos dados.

Compatibilidade com Diversos Sistemas Operacionais: O PostgreSQL é compatível com uma ampla variedade de sistemas operacionais, incluindo Linux, Windows, macOS, FreeBSD e outros.

Comunidade Ativa e Suporte: O PostgreSQL possui uma comunidade ativa de desenvolvedores, usuários e contribuidores em todo o mundo. Além disso, existem várias empresas que oferecem suporte comercial ao PostgreSQL, o que garante que os usuários tenham acesso a assistência técnica quando necessário.

Em resumo, o PostgreSQL é um poderoso sistema de gerenciamento de banco de dados relacional de código aberto, conhecido por sua confiabilidade, desempenho, extensibilidade e conformidade com os padrões SQL. Ele é amplamente utilizado em uma variedade de aplicativos, desde pequenos projetos pessoais até grandes sistemas corporativos e governamentais.

## Iniciar PostgreSQL

1. **\sudo service postgresql start**: Inicia o PostgreSQL na maquina
```
sudo -i -u postgres
psql 
```
ou

```
sudo -u postgres psql
```

## Lista de Comandos

1. **\l** ou **\list**: Lista todos os bancos de dados disponíveis.
    ```
    \l
    ```

2. **\c** *nome_do_banco_de_dados*: Conecta-se a um banco de dados específico.
    ```
    \c nome_do_banco_de_dados
    ```

3. **\dt**: Lista todas as tabelas no banco de dados atual.
    ```
    \dt
    ```

4. **\d** *nome_da_tabela*: Mostra a estrutura de uma tabela específica.
    ```
    \d nome_da_tabela
    ```

5. **\du**: Lista todos os papéis de banco de dados (usuários).
    ```
    \du
    ```

6. **\q**: Sai do psql (encerra a sessão).
    ```
    \q
    ```

7. **\h**: Mostra a lista de comandos SQL disponíveis.
    ```
    \h
    ```

8. **\i** *caminho_para_arquivo*: Executa comandos SQL a partir de um arquivo.
    ```
    \i caminho_para_arquivo
    ```

9. **\e**: Abre um editor para escrever um comando SQL.
    ```
    \e
    ```

10. **\timing**: Ativa ou desativa a exibição do tempo de execução dos comandos SQL.
    ```
    \timing
    ```

11. **\conninfo**: Mostra informações sobre a conexão atual.
    ```
    \conninfo
    ```

12. **SELECT**: Usado para selecionar dados de uma tabela.
    ```sql
    SELECT * FROM tabela;
    ```

13. **UPDATE**: Atualiza os valores de uma ou mais colunas em uma tabela.
    ```sql
    UPDATE tabela SET coluna = valor WHERE condição;
    ```

14. **INSERT INTO**: Insere novos registros em uma tabela.
    ```sql
    INSERT INTO tabela (coluna1, coluna2) VALUES (valor1, valor2);
    ```

15. **DELETE FROM**: Remove registros de uma tabela.
    ```sql
    DELETE FROM tabela WHERE condição;
    ```

16. **CREATE TABLE**: Cria uma nova tabela.
    ```sql
    CREATE TABLE nome_da_tabela (
        coluna1 tipo,
        coluna2 tipo
    );
    ```

17. **ALTER TABLE**: Modifica a estrutura de uma tabela existente.
    ```sql
    ALTER TABLE nome_da_tabela ADD COLUMN nova_coluna tipo;
    ```

18. **DROP TABLE**: Exclui uma tabela existente.
    ```sql
    DROP TABLE nome_da_tabela;
    ```

19. **CREATE DATABASE**: Cria um novo banco de dados.
    ```sql
    CREATE DATABASE nome_do_banco;
    ```

20. **DROP DATABASE**: Exclui um banco de dados existente.
    ```sql
    DROP DATABASE nome_do_banco;
    ```

21. **GRANT**: Concede permissões a usuários ou grupos.
    ```sql
    GRANT permissões ON objeto TO usuário;
    ```

22. **REVOKE**: Revoga permissões de usuários ou grupos.
    ```sql
    REVOKE permissões ON objeto FROM usuário;
    ```

23. **COMMIT**: Salva as transações no banco de dados.
    ```sql
    COMMIT;
    ```

24. **ROLLBACK**: Desfaz as alterações desde o último commit.
    ```sql
    ROLLBACK;
    ```

25. **BEGIN**: Inicia uma nova transação.
    ```sql
    BEGIN;
    ```

26. **\df**: Lista todas as funções definidas no banco de dados.
    ```
    \df
    ```

27. **\di**: Lista todos os índices definidos no banco de dados.
    ```
    \di
    ```

28. **\dn**: Lista todos os esquemas (schemas) no banco de dados.
    ```
    \dn
    ```

29. **\dt+**: Lista todas as tabelas no banco de dados atual com detalhes adicionais.
    ```
    \dt+
    ```

30. **\du+**: Lista todos os papéis de banco de dados (usuários) com detalhes adicionais.
    ```
    \du+
    ```

31. **\dp**: Mostra as permissões das tabelas.
    ```
    \dp
    ```

32. **\d+** *nome_da_tabela*: Mostra informações detalhadas sobre a estrutura de uma tabela específica.
    ```
    \d+ nome_da_tabela
    ```

33. **\df+**: Lista todas as funções definidas no banco de dados com detalhes adicionais.
    ```
    \df+
    ```

34. **\di+**: Lista todos os índices definidos no banco de dados com detalhes adicionais.
    ```
    \di+
    ```

35. **\dn+**: Lista todos os esquemas (schemas) no banco de dados com detalhes adicionais.
    ```
    \dn+
    ```

36. **\x**: Ativa ou desativa a exibição de saída expandida.
    ```
    \x
    ```

37. **\copy**: Copia dados de ou para um arquivo.
    ```
    \copy tabela TO 'arquivo.csv' CSV HEADER;
    ```

38. **\des+**: Lista todos os servidores de conexão disponíveis com detalhes adicionais.
    ```
    \des+
    ```

39. **\dS**: Lista as sequências no banco de dados.
    ```
    \dS
    ```

40. **\timing**: Ativa ou desativa a exibição do tempo de execução dos comandos SQL.
    ```
    \timing
    ```

41. **\conninfo**: Mostra informações sobre a conexão atual.
    ```
    \conninfo
    ```

42. **\watch**: Executa repetidamente um comando com intervalos regulares.
    ```
    \watch 5 SELECT * FROM tabela;
    ```

43. **\set**: Define variáveis do psql.
    ```
    \set nome_da_variavel valor
    ```

44. **\unset**: Remove variáveis do psql.
    ```
    \unset nome_da_variavel
    ```

45. **\g**: Reexecuta o último comando SQL.
    ```
    \g
    ```

46. **\ef**: Abre o editor definido na variável de ambiente $EDITOR para editar uma função.
    ```
    \ef nome_da_função
    ```

47. **\ev**: Abre o editor definido
