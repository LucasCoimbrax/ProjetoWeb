# ProjetoWeb

### 1º: Instalando o Repositório
    
    1. Clone o repositório do Github;

    2. Instale as dependências máquina:

        `npm i`

    3. Rode o programa utilizando:

        `npm run start`

### 2º: Criando o Banco de Dados no Microsoft SQL Server

    1. Crie um DataBase:

        `CREATE DATABASE **projetoweb**`

    2. Crie um usuário:

        `login: ProjetoWeb Vacinas`
        `senha: Pr0j3t0W3bV4c1n45`


-----------------------------------------------------------------

### Páginas criadas

    1. '/' - Login User:
        -> Página de login do usuário, tem 2 campos como parametros de 
        entrada para acessar a página de Perfil User;
        
            - Edv;
            - Data de nascimento;

    2. '/loginAdmin' - Login Admin:
        -> Página de login do Admin, possui 2 campos como parametros de 
        entrada para acessar a página de Perfil Admin;

            - Login;
            - Senha;

    3. '/perfilUser' - Perfil user:

    4. '/perfilAdmin' - Perfil Admin:
        -> Página onde é possível pesquisar os usuários pelo EDV, visualizar
        seu perfil e quais vacinas foram tomadas, como também os dados da vacina;

    5. '/cadasterUser' - Cadastro User:
        -> Página onde o Admin consegue cadastrar novos usuários, passando os 
        seguintes dados:

            - Nome;
            - Email;
            - Telefone;
            - Edv;
            - Data de nascimento;

    6. '/cadasterVacine' - Cadastro Vacine:
        -> Página onde o Admin consegue cadastrar novas vacinas, passando os 
        seguintes dados:

            - Nome;
            - Doses;
            - Batch:;
            - Manufacturer;
            - Date;