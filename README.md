# Projeto basico Cypress + Cucumber + allure-plugin

### Instalando NODE
- Baixar diretamente do site: https://nodejs.org/en/

### Instalando o Cypress

#### npm install

- Instale o Cypress usando npm:

```
cd /caminho/do/projeto
npm install --save-dev cypress cypress-cucumber-preprocessor
```

- Ainda dentro da pasta do seu projeto, execute o seguinte comando para que o Cypress termine de criar os arquivos locais:

```
npx cypress open
```


### Executando teste com Allure Repost

- Execute o teste com o comando: 

```
npx cypress run --config video=false --browser chrome --env allure=true
```

- Gerar o relatório:

```
allure generate allure-results —clean
```

- Abrir o relatorio gerado em html

```
allure open allure-report
```
