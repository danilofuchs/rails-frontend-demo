**Passo a passo**

- [Adicionar webpacker](https://prograils.com/posts/adding-webpacker-legacy-rails-app)
- [Instalar react-rails (webpacker)](https://github.com/reactjs/react-rails)
- Instalar suporte typescript:
  - ```
    $ bundle exec rails webpacker:install:typescript
    $ yarn add @types/react @types/react-dom
    ```
- Tem que deixar webpack-dev-server rodando `bin/webpack-dev-server`

**Contras**

- Difícil debugar o chrome
- Tem que rodar 2 comandos em paralelo
- A única maneira de passar informações para o ruby é através de REST (API ou URL)
