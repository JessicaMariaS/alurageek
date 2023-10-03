const  elementoParaInserirLivros  =  document . getElementById ( 'livros' )

function  exibirOsLivrosNaTela ( listaDeLivros )  {
    elementoParaInserirLivros . internoHTML  =  ''
    listaDeLivros . forEach ( livro  =>  {
        // deixa disponibilidade = verificarDisponibilidadeDoLivro(livro)
        let  disponibilidade  =  livro . quantidade  >  0 ? 'livro__imagens' : 'livro__imagens indisponivel' 
        elementoParaInserirLivros . innerHTML  +=  `
        <div class="livro">
        <img class=" ${ disponibilidade } " src=" ${ livro . imagem } "
          alt=" ${ livro . alt } " />
        <h2 class="livro__titulo">
          ${ livro . título }
        </h2>
        <p class="livro__descricao"> ${ livro . autor } </p>
        <p class="livro__preco" id="preco">R$ ${ livro . preco . toFixed ( 2 ) } </p>
        <div class="tags">
          <span class="tag"> ${ livro . categoria } </span>
        </div>
      </div>
        `
    } )
}

// função verificarDisponibilidadeDoLivro(livro) {
// if (livro.quantidade > 0 ){
// return 'livro__imagens'
// } outro {
// return 'livros__imagens indisponivel'
// }
// }
