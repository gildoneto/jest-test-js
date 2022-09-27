# Estudando JEST

### Pacotes instalados

Jest + tipos- `yarn add -D jest @types/jest`

### Configurações

##### Configuração para o projeto passar a aceitar ES6 Modules

Instalar a dependencia do Babel
`yarn add --dev babel-jest @babel/core @babel/preset-env`
https://jestjs.io/pt-BR/docs/getting-started#usando-babel

Criar o arquivo babel.config.js

###### Adiciona editor config

https://editorconfig.org/

##### Adiciona o pacote lodash

https://lodash.com/

`yarn add lodash`

##### Trabalhando com Inline Snapshot no Jest

Precisa instalar o prettier no projeto

`yarn add -D prettier`

Usar método `toMatchInlineSnapshot()`

Para atualizar os snapshots pressionar o 'u' na janela de opções do Jest

Se preferir que os snapshots fiquem em outra pasta, escolha a método `toMatchSnapshot()`
