class ProxyFactory{
//invocar um metodo statico para nao ter que instaciala

    static create(objeto, props, acao){
//objeto que eu quero criar a proxy, propriedades que eu quero observar e a ação que eu quero executar pra essas propriedade quando forem acessadas

    return new Proxy(objeto, {
    //interceptar uma operação de leitura para colocar uma armadilha
        get(target, prop, receiver){
        //quando get for executado quero perguntar se ele esta na minha lista de metodos que quero interceptar 

        if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])){//se o metodo que estou interceptando e adiciona ou esvazia se isso contem prop e e uma função
            //se a propriedade esta na minha lista ad ou es e é uma função eu vou retornar uma função

            return function(){
                //se eu cair no metodo que quero interceptar eu vou substituir esse metodo proxy por outro essa função vai substituir adiciona
                Reflect.apply(target[prop], target, arguments);//var implicita que me da acesso a todos os parametros da função quando ela e chamada via um get consigo ter acesso aos parametro dda função
               return acao(target);//acao me devolve um valor entao dou return

            }
        }
        
        return Reflect.get(target,prop,receiver);
    },
        set(target,prop,value,receiver){

            if (props.includes(prop)) {//so pode ser executada se nao for em qualquer propriedade se for executa minha ação
                target[prop]=value;
                acao(target);//depois que alterar a propriedade executa meu interceptador
            }

           return Reflect.set(target,prop,value,receiver);//sempre ter return no reflect
        }

    }); 
}
    static _ehFuncao(func){//se eu quero saber se uma função criei um metodo static privado so faz sentido ser chamado pelo proxyFactory
      return typeof(func) == typeof(Function);
    }

}
// self._negociacoesView.update(target);//target e meu objeto original
// //com isso eu consigo escolher quem eu quero interceptar de metodo e executar um codigo