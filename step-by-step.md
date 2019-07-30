# **Starter ES6+**

**1.Conceitos**

  1. Introdução

  - [x] slides

  2. Instalando Node & Yarn

  - [x] Instalar o Node
  - [x] Instalar o Yarn

  3. Configurando Babel

  - [x] yarn init
  - [x] yarn add @babel/cli
  - [x] yarn add @babel/preset-env
  - [x] criar .babelrc
  - [x] add configuração .babelrc

  Padroniza codigo js para todos os navegadores.

  **Add .babelrc**
  {
    "presets": ["@babel/preset-env"]
  }

  - [x] yarn add @babel/core
  - [x] criando script "package.json"

  **Add package.json**
    "scripts": {
    "dev": "babel ./main.js -o ./bundle.js -w"
  } 
