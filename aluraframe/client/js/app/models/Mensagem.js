class Mensagem{
    constructor(texto){
        this._texto = texto || '';// se texto for undefined, vai passar ''
    }

    get texto(){ //getter e set e uma property prop
        return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }
}













// let Mensagem = new Mensagem();
// Mensagem.texto = "x"; posso atribuir por causa do set