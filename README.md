# 🚀 Projeto de Testes Web Banco

Bem-vindo ao repositório do projeto de testes web do Banco Mentoria 2.0! Este projeto utiliza o Cypress para automatizar testes end-to-end (E2E) em uma aplicação bancária. Nosso objetivo é garantir a qualidade e o bom funcionamento das principais funcionalidades da aplicação através de testes robustos e confiáveis.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

-   **Cypress**: Framework de automação de testes E2E para aplicações web.
-   **JavaScript**: Linguagem de programação utilizada para escrever os testes.
-   **Node.js**: Ambiente de execução JavaScript.
-   **npm**: Gerenciador de pacotes para Node.js.
-   **cypress-mochawesome-reporter**: Plugin para geração de relatórios de testes HTML interativos e detalhados.

## ⚙️ Instalação e Configuração

Para clonar o projeto e instalar as dependências, siga os passos abaixo:

1.  **Clone o Repositório:**

    ```bash
    git clone https://github.com/RodrigoJose-Silva/banco-web-tests-mentoria-2.0.git
    ```

2.  **Acesse o Diretório do Projeto:**

    ```bash
    cd banco-web-tests-mentoria-2.0
    ```

3.  **Instale as Dependências:**

    ```bash
    npm install
    ```

    Este comando instalará todas as dependências necessárias, incluindo o Cypress e o `cypress-mochawesome-reporter`.

## 📂 Estrutura do Projeto

O projeto segue a estrutura padrão do Cypress, organizada para facilitar a manutenção e a escalabilidade dos testes:

```
banco-web-tests-mentoria-2.0/
├── cypress/
│   ├── e2e/                     # Contém os arquivos de teste E2E (.cy.js)
│   │   ├── login.cy.js          # Testes para a funcionalidade de login
│   │   └── transferencia.cy.js  # Testes para a funcionalidade de transferência
│   ├── fixtures/                # Dados de massa para os testes (ex: credenciais.json)
│   │   └── credenciais.json
│   ├── support/                 # Arquivos de suporte e comandos customizados
│   │   ├── commands/            # Módulos de comandos específicos
│   │   │   ├── common.js
│   │   │   ├── login.js
│   │   │   └── transferencia.js
│   │   ├── commands.js          # Comandos customizados globais
│   │   └── e2e.js               # Configurações que rodam antes de cada teste E2E
├── cypress.config.js            # Arquivo de configuração principal do Cypress
├── package.json                 # Informações do projeto e dependências
└── README.md                    # Este arquivo
```

### Detalhes das Pastas:

-   `cypress/e2e`: Aqui você encontrará os testes principais. Cada arquivo `.cy.js` representa um cenário ou funcionalidade testada.
-   `cypress/fixtures`: Usado para armazenar dados estáticos que podem ser usados em seus testes, como dados de login, informações de usuários, etc.
-   `cypress/support/commands`: Contém comandos customizados que estendem as funcionalidades do Cypress, tornando os testes mais legíveis e reutilizáveis. Por exemplo, comandos para login ou para realizar transferências.
-   `cypress.config.js`: Este arquivo configura o ambiente do Cypress, incluindo a `baseUrl` (`http://127.0.0.1:4000`) e o `reporter` (`cypress-mochawesome-reporter`) para a geração de relatórios.

## ▶️ Como Executar os Testes

Você pode executar os testes de diversas formas, dependendo da sua necessidade:

### 🖥️ Modo Headless (Execução em Segundo Plano)

Para executar todos os testes em modo headless (sem abrir a interface gráfica do navegador), utilize:

```bash
npm test
# ou
cypress run
```

### 👁️ Modo Headed (Com Interface Gráfica)

Para executar os testes com a interface gráfica do navegador visível (útil para depuração), utilize:

```bash
npm run cy:headed
# ou
cypress run --headed
```

### 🚀 Abrir a Interface do Cypress (Cypress Test Runner)

Para abrir o Cypress Test Runner, onde você pode selecionar e executar testes individualmente, além de visualizar os resultados em tempo real, utilize:

```bash
npm run cy:open
# ou
cypress open
```

## 📊 Relatórios de Teste

Após a execução dos testes, o `cypress-mochawesome-reporter` gerará relatórios HTML detalhados na pasta `cypress/reports`. Você pode abrir esses arquivos no seu navegador para visualizar os resultados de cada teste, incluindo capturas de tela e vídeos (se configurado).

## 🤝 Contribuição

Sinta-se à vontade para contribuir com este projeto! Se encontrar bugs, tiver sugestões de melhoria ou quiser adicionar novos testes, por favor, abra uma issue ou envie um pull request.

---