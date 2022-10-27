//e minha classe negociacao view que vai ter a definição de como e uma tabela que vou exibir pro usuario
class NegociacoesView extends View{

    constructor(elemento){//preciso passar super class pra classe pai ele ta falando pai recebi o elemento agora passa pro seu construtor
        super(elemento);
    }

    template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                <th onclick="negociacaoController.ordena('data')">DATA</th>
                <th onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
                <th onclick="negociacaoController.ordena('valor')">VALOR</th>
                <th onclick="negociacaoController.ordena('volume')">VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map(n =>  `
                         <tr>
                            <td>${dateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                         </tr>

                      `).join('')}
            </tbody>

            <tfoot>
                <td colspan="3"></td>
                <td>
                  ${model.volumeTotal}
            </td>
            </tfoot>
        </table>
        `;
    }
    //reduce processa o array e no final me um unico resultado 
    // Com essa alteração, nosso template NegociacaoView pode acessar esse getter para obter o volume total das negociações. 
    //Perfeito! Sempre que alguém precisar saber o volume total pedirá ao modelo ListaNegociacoes
}

/*
    nao precisei usar essa função ife por que meu reduce retornou um valor
       (function(){
                        let total = 0;
                        model.negociacoes.forEach(n => total += n.volume);
                        return total;
                    })() 
                    //executar esse bloco de uma vez 
*/
/**
 * 
 * A palavra super, como já vimos, nos dá acesso à superclasse, ou seja, a classe que foi herdada. Em nosso caso, estamos passando para o construtor de view o elemento recebido pelo construtor de negociacaoview. O segundo parâmetro, funcionario, só diz respeito à secretária, por isso a propriedade foi adicionada em this._funcionario.
 * 
 */