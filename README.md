# Exercícios

Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado! Para isso, vamos fazer o processo de deploy .

**Exercício 1** : Crie uma API simples no node utilizando express . No arquivo `index.js` , crie uma rota do tipo get com o endereço raiz / que entregue como resposta o texto "Está vivo!!!". Faça o deploy no `Heroku` utilizando o CLI.

**Exercício 2** : Agora, modifique a API para responder a uma nova mensagem:

  1. Crie uma nova variável de ambiente com um texto qualquer;
  2. Modifique o código da sua API para que ela responda na rota get `/` com o mesmo texto contido na variável criada no passo anterior.

**Exercício 3** . Simule o deploy em multi-ambientes (produção e homologação). Para isso:

  1. Renomeie o remote do deploy dos exercícios anteriores para `homolog` ;
  2. Crie um novo remote a partir do mesmo projeto. Dessa vez, o remote deverá se chamar `prod` ;
  3. Em seguida, configure as variáveis de ambiente para terem valores diferentes por ambiente.