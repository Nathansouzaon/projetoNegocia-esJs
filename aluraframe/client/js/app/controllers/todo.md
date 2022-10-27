//controller são as ações do usuario

class NegociacaoController{
//adicionar uma negociação nessa tabela

    constructor(){
             //capturando os dados
             let $ = document.querySelector.bind(document);//bind meu queryselector vai vir pra var dolar
             //mas ainda vai manter uma associação com o document
            this._inputData = $("#data");
            this._inputQuantidade = $("#quantidade");
            this._inputValor = $("#valor"); 

            this._negociacoesView = new NegociacoesView($('#negociacoesView'));
           //att da view
            this._listaNegociacoes = new Bind(
                new listaNegociacoes(),
                 this._negociacoesView,
              ['adiciona', 'esvazia']);//minha view so vai ser atualizada se alguem chamar o metodo adiciona e o esvazia desse modelo
    
            //quando minha negociacao for criada pela primeira vez ele vai buscar esses elementos
            //dos dom do meu document vai guardar nas propriedades da minha classe
            
            this._mensagemView = new MensagemView($('#mensagemView'));//onde eu quero incluir essa mensagem?
            
            this._mensagem = new Bind(
                new Mensagem(), 
                this._mensagemView, 
                ['texto'])
        }

    adiciona(event){//metodo
        event.preventDefault();//cancela o comportamento padrão do formulario
        //se eu quero uma data
        // let helper = new dateHelper();//preciso invocar pra chamar os metodos
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação Adicionado Com Sucesso";
        this._limpaFormulario();    
//quero que esse metodo datehelper nao seja um metodo de uma instacia do meu datehelper  
//quero que ele seja um metodo da classe quero invocar ele direto da definição da classe 
         //adicionar a negociação em uma lista
    }




    _criaNegociacao(){
        return new Negociacao(
            //vai receber
            dateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
            )
        }

    apaga(){
        this._listaNegociacoes.esvazia();//quando eu chamo apaga
        // this._negociacoesView.update(this._listaNegociacoes);//peço pra minha view que minha tabela se renderizar com a lista  de negociações atualizadas
        this._mensagem.texto = 'Negociações Apagadas Com Sucesso';//mudo a mensagem
    }

    //metodo so pode ser chamado pela classe negociacaoController
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

}

/*
minha negociacaocontroller e  as propriedades que ele tem sao os campos ou elementos da minha pagina
*/
        // console.log(typeof(this._inputData.value)); 

        // replace(/-/g, ',') ele vai pegar o valor da string e vai trocar todo mundo que hifen por ,
        //split transforma o array em string e usa como separador virgula    split('-')   
        
        //3 pontos ele entende que esse array que esta sendo passado pro date  tem que ser
        //desmembrado primeiro item do array e o primeiro parametro do construtor do date 
        //2 parametro do array e  o segundo parametro do construtor do date 
        //e o 3 item do array e o terceiro parametro do date

   /*
   
        if(indice == 1){//segundo elemento do array
            return item - 1; //item e uma string com dou menos ele entende que estou fazendo
            //se não e o indice 2 se nao estou na posição do mes eu retorno a posição o valor do array normal
        }
   */ 


        /*
              return item - indice % 2;//primeira posição do array que e meu ano primeira posição do array e 0 e 0 % de 2 e 0 ai vai ficar segunda posição do array o indice vai ser 1 e 1 modulo de 2 vai dar 1 vai ficar item - 1 
            //e a terceira posição do meu array que e o dia 2 modulo de 2 e 0 e nao vai subtrair 
            fazendo o ajuste so no mês
        
        
        */
       //... o primeiro elemento do array vai ser o primeiro parametro passado pra essa função ou construtor o segundo item do array vai o segundo parametro passado pra esse construtor ou função


       /*
       O retorno da função bind é a função querySelector, que tem como contexto o document, ou seja, seu this será document
       
       A variável $ passa a ser querySelector, mas seu this deixará de ser document, porque estará sendo executada fora deste contexto. 



       let dataString = '17-05-2016';

let data = new Date(dataString.split('-').reverse().join('/'));
console.log(data);



this de uma função normal e dinamico varia de acordo com o contexto de uma arrow function e lexico ele mantem o  mesmo this ao longo de todas as chamadas no qual ela e chamada ela pega o this no momento de sua criação e mantem ate o final
    


O padrão de projeto Proxy nada mais é do que um objeto "falso", "mentiroso", que envolve e encapsula o objeto real que queremos interagir. É como se fosse uma interface, entre o objeto real e o resto do código. Conseguimos assim controlar o acesso aos seus atributos e métodos. Nele também podemos pendurar códigos que não cabem de estar alocados nos nossos modelos, mas que necessitam ser executados no caso de uma alteração ou atualização do mesmo.

Como segundo argumento de um proxy, passamos um handler, que é um objeto JavaScript que contém as armadilhas (traps) do nosso Proxy. Neste objeto, podemos criar uma propriedade get e passar para ela uma função com 3 parâmetros.

O target é o objeto real que é encapsulado pela proxy. É este objeto que não queremos "sujar" com armadilhas ou qualquer código que não diga respeito ao modelo.

O prop é a propriedade em si, que está sendo lida naquele momento.

O receiver é a referência ao próprio proxy. É na configuração do handler do Proxy que colocamos armadilhas.

*/