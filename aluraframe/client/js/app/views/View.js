class View{
    constructor(elemento){//elemento do dom
        this._elemento = elemento;
    }

    template(){//como ele e privado nem as classes filhas podem sobrescrever esse metodo    
        //so a classe pai pode mexer nesse metodo

        throw new Error('O Método template deve ser implementado');
    }
    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}