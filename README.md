# `LivePosts App`

### `Circle CI Build Status:` 
[![CircleCI](https://circleci.com/gh/frutuozo29/liveposts-app/tree/master.svg?style=svg)](https://circleci.com/gh/frutuozo29/liveposts-app/tree/master)

### `Netlify Build Status:` 
[![Netlify Status](https://api.netlify.com/api/v1/badges/68db43fb-27b8-4529-ab4a-73fb53994a84/deploy-status)](https://app.netlify.com/sites/liveposts/deploys)

## `Descrição:`
Projeto criado para postar textos livres. Esses textos podem ser votados utilizando upvotes e downvotes. Os textos mais votados aparecerão no topo da listagem. 

### `Como rodar`
```bash
cd liveposts-app
yarn
yarn start
```
Abrir a Url [http://localhost:3000](http://localhost:3000) para visualizar o projeto.

### `Como rodar os testes`

```bash
cd liveposts-app
yarn
yarn test
```

> Para executar o teste com cobertura de código basta rodar o comando **yarn coverage**

### `Como criar o build para produção`

```bash
cd liveposts-app
yarn
yarn build
```

### `Dependências`
  * @emotion/core: ^10.0.10,
  * @fortawesome/fontawesome-free: ^5.9.0,
  * react: ^16.8.6,
  * react-dom: ^16.8.6,
  * react-redux: ^7.1.0,
  * react-scripts: 3.0.1,
  * redux: ^4.0.1,
  * redux-thunk: ^2.3.0,
  * socket.io-client: ^2.2.0
  
### `Dependências de Dev`  
  * @testing-library/react: ^8.0.1,
  * fetch-mock: ^7.3.3,
  * jest-dom: ^3.5.0,
  * node-fetch: ^2.6.0,
  * redux-mock-store: ^1.5.3
  
### `Imagens`
![ImagemMobile](https://raw.githubusercontent.com/frutuozo29/liveposts-app/master/src/assets/img/liveposts-mobile.jpg)

![ImagemMobile](https://raw.githubusercontent.com/frutuozo29/liveposts-app/master/src/assets/img/liveposts-web.jpg)

### License
https://camo.githubusercontent.com/743d6ca437fec2ad80985c1208501b7c7b4b97ae/68747470733a2f2f696d672e736869656c64732e696f2f7061636b61676973742f6c2f646f637472696e652f6f726d2e737667
