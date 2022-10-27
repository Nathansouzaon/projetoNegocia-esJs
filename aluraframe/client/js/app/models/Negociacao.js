class Negociacao {
    //como defino os atributos de uma classe?
    
    constructor(data, quantidade, valor){//passar parametros pro atributo da classe
        this._data = new Date(data.getTime());//nao vai conseguir mais alterar
        this._quantidade = quantidade;//toda negociação vai ter a data atual
        this._valor = valor;//this sempre aponta para instacia que ta executando a operação naquele momento
        
        Object.freeze(this);//this faz eu ter acesso a instancia que eu to trabalhando esse this e meu n1
        //me devolve uma instancia ja congelada 
        //data nao entra nas propriedades de congelado
        //se esse cara e um objeto e dentro dele tem outras propriedade nao estao congeladas
    }
    //quando crio uma classe posso definir metodos e uma especie de uma função
    //se crio uma função dentro de uma classe chama metodo mas se for fora chamo de função



    //metodos acessadores metodos de leitura para acessar as varaiveis
    get volume(){
        return this._quantidade * this._valor;//me diz qual e o seu volume
    }

    get data(){
        return new Date(this._data.getTime());//data baseado na data da minha negociação
        //e outro objeto se tentar alterar a data la fora so vai alterar a copia nao  o interno  


       // return  this._data;//invez de eu devolver uma referencia para data que a negociação tem
        //vai retornar this.data e  me dar uma referencia pra data e posso alterar o dia mes e ano
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

}

//nas propriedade de uma classe que nao pode ser modificada so pode ser alterada pela propria
//classe usamos um underline _ so pode acessar pelos proprios metodos da classe ninguem de fora
//pode acessa lo

/**
 * 
 * 
 * Adotamos a convenção _ para indicar que determinada propriedade é privada, isto é, só pode ser acessado por métodos da classe
 */