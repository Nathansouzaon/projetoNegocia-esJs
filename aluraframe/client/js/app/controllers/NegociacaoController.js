
/*
Em NegociacaoController, use Promise.all para resolver todas as promises retornadas pelos métodos de NegociacaoService. Com Promise.all, os resultados virão na ordem em que cada promise foi processada.
binding (associação de dados) entre o model e view, no qual a alteração no modelo automaticamente renderiza a view ao qual foi associado.

precisamos atualizar a view quando o método ordena do nosso modelo for chamado, para isso, precisamos adicioná-lo na lista de métodos ou propriedades que desejamos monitorar do nosso modelo. Alterando NegociacaoController:
*/
class NegociacaoController{

    constructor(){
             //capturando os dados
             let $ = document.querySelector.bind(document);
            this._inputData = $("#data");
            this._inputQuantidade = $("#quantidade");
            this._inputValor = $("#valor"); 
           //att da view
            this._listaNegociacoes = new Bind(
                new listaNegociacoes(),//model
                new NegociacoesView($('#negociacoesView')),//view
              'adiciona', 'esvazia', 'ordena', 'inverteOrdem');//metodos 

            this._ordemAtual = '';
            
            this._mensagem = new Bind(
                new Mensagem(), 
                new MensagemView($('#mensagemView')), 
                'texto');

                
        };
          

    

    adiciona(event){//metodo
        event.preventDefault();
        
        try{
            this._listaNegociacoes.adiciona(this._criaNegociacao());
            this._mensagem.texto = "Negociação Adicionado Com Sucesso";
            this._limpaFormulario();    
        }catch(erro){
            this._mensagem.texto = erro;
        }
        

    }

             
    importaNegociacoes() {

        let service = new NegociacaoService();
        service
        .obterNegociacoes()
        .then(negociacoes => {
          negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
          this._mensagem.texto = 'Negociações do período importadas com sucesso';
        })
        .catch(error => this._mensagem.texto = error);  
    }
    
    apaga(){
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações Apagadas Com Sucesso';
    }
    
    
        _criaNegociacao(){
            return new Negociacao(
                //vai receber
                dateHelper.textoParaData(this._inputData.value),
                this._inputQuantidade.value,
                this._inputValor.value
                )
            }
    
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
   ordena(coluna){
    if(this._ordemAtual == coluna) {
        //E para invertermos a lista? Precisamos criar em nosso modelo ListaNegociacoes o método inverteOrdem, que chama this._negociacoes.reverse() para nós: 
        //E claro, não podemos nos esquecer de adicionar o método inverteOrdem como um dos métodos que estamos monitorando para atualizar automaticamente a View:
        this._listaNegociacoes.inverteOrdem();
    } else {
        this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
    }
    this._ordemAtual = coluna;
}
   }
