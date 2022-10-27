class NegociacaoService {
//agora depende de httpservice entao usa costructor
/**
 * Os métodos NegociacaoService devem retornar uma instância de Promise.
 * 
 */
    constructor(){//so pode ser usado por negociacao service
      this._http = new HttpService();
    }

    obterNegociacoesDaSemana(){

      return this._http
      .get('negociacoes/semana')//busca negociações retorna ja parseado a objetos
      .then(negociacoes => {//lista de negociações
          return negociacoes.map(objeto =>  new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
        //converter pra uma nova lista onde eu tenho instancias de negociações
        })
        .catch(erro => {
          console.log(erro);
          throw new Error('Não Foi Possivel Obter as Negociações Da Semana');
        });
  }

obterNegociacoesDaSemanaAnterior(){
    
  return this._http
  .get('negociacoes/anterior')//busca negociações retorna ja parseado a objetos
  .then(negociacoes => {//lista de negociações
      return negociacoes.map(objeto =>  new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
    //converter pra uma nova lista onde eu tenho instancias de negociações
    })
    .catch(erro => {
      console.log(erro);
      throw new Error('Não Foi Possivel Obter as Negociações Da Semana');
    });
  }


    obterNegociacoesDaSemanaRetrasada(){
        
      return this._http
      .get('negociacoes/retrasada')//busca negociações retorna ja parseado a objetos
      .then(negociacoes => {//lista de negociações
          return negociacoes.map(objeto =>  new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
        //converter pra uma nova lista onde eu tenho instancias de negociações
        })
        .catch(erro => {
          console.log(erro);
          throw new Error('Não Foi Possivel Obter as Negociações Da Semana');
        });
      } 
      obterNegociacoes() {

        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ]).then(periodos => {

            let negociacoes = periodos
                .reduce((dados, periodo) => dados.concat(periodo), []);

            return negociacoes;

        }).catch(erro => {
            throw new Error(erro);
        });

    }};

/**
 * 
 * 0: requisição ainda não iniciada.
1: conexão com o servidor estabelecida.
2: requisição recebida.
3: processando requisição.
4: requisição concluída e a resposta esta pronta.
 * 
 * 
 * 
 * O Error-first Callback, ou errorback, é um padrão que foi adotado no mundo Node.js. Como você já aprendeu, o callback é uma função chamada quando uma tarefa for executada, como uma requisição Ajax ou o acesso ao banco de dados. No entanto, a qualquer momento pode acontecer um erro no processamento e aí vem a questão de como lidar com isso.

A convenção é que cada callback receba sempre o erro no primeiro parâmetro. Na função callback, basta então verificar esse parâmetro para saber se ocorreu um erro ou não!
 * 
 *Veja que, com essa alteração, poupamos algumas linhas de código e tornamos o código da classe NegociacaoService mais legível. É claro, isso só funciona porque HttpService devolve uma promise. Se não devolvesse, NegociacaoService precisaria retornar uma promise, como havíamos feito.
 *
 * Veja que no o método obterNegociacoes retorna uma Promise, mas claro, aquela que combina o resultado de outras. Veja também que no método then da nossa Promise estamos retornando a lista de negociacoes. É este retorno que estará disponível para quem usar nossa Promise. Além disso, se um erro ocorrer, lançamos um Error. É a mensagem passada para o Error que estará disponível no catch de quem usar nossa Promise. Resumindo a história: tanto uma Promise quanto o retorno de then são "Thenables".
 * 
  */