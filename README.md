## 1. Instalação do `nvm` (Node Version Manager)

O `nvm` é uma ferramenta que permite gerenciar múltiplas versões do Node.js em sua máquina. Siga os passos abaixo para instalá-lo:

### Linux/MacOS

1. Abra o terminal.
2. Execute o seguinte comando para instalar o `nvm`:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
   ```
3. Reinicie o terminal ou carregue o `nvm` no ambiente atual:
   ```bash
   source ~/.bashrc
   ```
   Ou, se estiver usando Zsh:
   ```bash
   source ~/.zshrc
   ```

---

## 2. Instalação da Versão 21 do Node.js

Com o `nvm` instalado, você pode facilmente instalar e usar a versão 21 do Node.js:

1. Instale a versão 21 do Node.js:

   ```bash
   nvm install 21
   ```

2. Configure o `nvm` para usar a versão 21 como padrão:

   ```bash
   nvm use 21
   ```

3. Verifique se a versão correta está sendo usada:

   ```bash
   node -v
   ```

   O comando acima deve retornar algo como:

   ```
   v21.x.x
   ```

---

## 3. Instalação do Angular CLI (versão 16)

O Angular CLI é uma ferramenta essencial para criar e gerenciar projetos Angular. Siga os passos abaixo para instalá-lo:

1. Instale o Angular CLI na versão 16 globalmente:

   ```bash
   npm install -g @angular/cli@16
   ```

2. Verifique se a versão instalada está correta:

   ```bash
   ng version
   ```

   O comando acima deve exibir a versão 16 do Angular CLI.

---

## 4. Instalação das Dependências do Projeto

Antes de rodar o projeto Angular, você deve instalar as dependências necessárias:

1. No diretório do projeto, execute:

   ```bash
   npm install
   ```

---

## 5. Rodando o Projeto Angular

Para iniciar o servidor de desenvolvimento e visualizar o projeto:

1. Execute o comando abaixo no diretório do projeto:

   ```bash
   ng serve
   ```

2. Acesse o projeto no navegador através do endereço:

   ```
   http://localhost:4200
   ```

---

## 6. Formatar Indentação do código

Antes de rodar o projeto Angular, você deve instalar as dependências necessárias:

1. No diretório do projeto, execute:

   ```bash
   npm run format
   ```

---
