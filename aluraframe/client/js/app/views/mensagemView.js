class MensagemView extends View {
    constructor(elemento){//elemento do dom
        super(elemento);
    }

    template(model){
        return model.texto? `<p class="alert alert-info">${model.texto}</p>`: '<p></p>'//sempre usando o parametro a model
    }

}