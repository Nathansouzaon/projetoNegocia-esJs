class listaNegociacoes{
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){//recebe uma negociacao
        //adiciona
       this._negociacoes.push(negociacao);
    }
    //metodo pra ler pra pedir pra minha lista a lista de negociações ter acesso a lista para exibir

    get negociacoes(){
        //metodo get eu listar essas negociacoes
        return [].concat(this._negociacoes);//criou uma nova lista novo objeto array com os dados da negociacao se der um push vai conseguir mas vai dar em uma copia não na original
        ////concatenar com a lista atual e com a negociacao que estou recebendo 
    }

    
    esvazia(){
        this._negociacoes = []; 
    }
  
    get volumeTotal(){
        return this._negociacoes.reduce((total, n) => total += n.volume, 0.0);
        //então no nosso caso ele soma o valor anterior (total) pelo valor da iteração atual (n) 
                    //pra cada item da minha lista o total começa com 0 primeiro item da lista pega 0 e soma com volume o segundo pega o que ja tinha antes e soma com volume sempre me retorna o resultado de total total e a variavel que vai acumular  n e a var que vai ter acesso ao elemento do meu array
    } 

    ordena(criterio){
        this._negociacoes.sort(criterio);
    }

    inverteOrdem(){
        this._negociacoes.reverse();
    }
}

/**
 * 
 * 
 *         Reflect.apply(this._armadilha, this._contexto, [this]);//apply recebe como parametro 1 o metodo que eu quero chamar 2 qual e o contexto que eu quero executar dessa função this dessa função tem que ser oque? e quais sao os parametro atravez de um array que essa funçao vai receber ela vai receber this que e minha propria lista de negociacoes
 */