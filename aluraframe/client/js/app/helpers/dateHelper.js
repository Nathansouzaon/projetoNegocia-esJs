class dateHelper {

        constructor(){
            throw new Error('Esta Classe Não pode ser instaciada');
        }

      static dataParaTexto(data){
            return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
        }
    
  static textoParaData(texto){
        //expressão regular se não tiver digitos de 4 ou 2 ou 2 ele testa se segue esse padrao
        if(!/\d{2}\/\d{2}\/\d{4}/.test(texto))        //quero saber se não segue essa padrão
        throw new Error('Deve Estar No Formato  aaaa-mm-dd');
     
            

        return new Date(...texto.split('/').reverse().map((item, indice) => item - indice % 2));//conversao para data //date vira um array
        //... extrai os parametros e passa pra minha data
        }
}
//static são metodos que eu invoco diretamente na classe nao precisa ter uma instancia da classe pra trabalhar com ele ou seja construtctor 
//nao precisa instancia porque a classe date nao tem metodos nenhum