class Bind{
    //bind associação entre meu dado e minha view e essa associacao sera feita quando as propriedades forem acessadas 
    //...props rest operator vai gerar um array com n parametros precisa ser sempre o ultimo parametro

    /**
     * Vimos o parâmetro rest (i.e. resto) nesse capítulo, quando enviamos diversos métodos para serem monitorados no Proxy. 
     * 
     * Mas sobre REST, temos que o correto é utilizarmos "..." antes do último parâmetro, e assim tudo que nós passarmos de "extra" será colocado dentro de um array
     * 
     */
    constructor(model, view, ...props){

        let proxy = ProxyFactory.create(model, props, (model) =>
         view.update(model));//quando as propriedade forem acessadas da um update

         view.update(model);//renderizando pela primeira vez a view

         return proxy; //construtor pode ter retorno 
         

         //sempre que eu executar minha att meu adiciona ou esvazia sempre chama o update model
    }
}

/**
 * Usamos o padrão Factory para isolar ou encapsular a complexidade da criação do proxy, mas uma fábrica pode fazer mais! Quero dizer que existem outros motivos para usar uma fábrica. 
 * 
 * Repare que a Factory possui mais uma outra responsabilidade, instanciar NegociacaoAcao ou NegociacaoOpcao. A fábrica decide então qual implementação usar. Para quem chama, isso pouco importa, pois basta saber que recebemos uma Negociacao.
 * 
 * * class NegociacaoFactory {

    static create(tipoNegociacao, dados) {
        if(tipoNegociacao == "opcao") {
            return new NegociacaoOpcao(dados.data, dados.quantidade, dados.valor);
        }
        return new NegociacaoAcao(dados.data, dados.quantidade, dados.valor);
    }
}

let n = NegociacaoFactory.create("acao", {'data': new Date(), 'quantidade': 2, 'valor': 34.3});
 * 
 * 
 * 
 * 
 */