/*
Crie o HttpService para encapsular o codigo referente ao XMLHttpRequest



*/
class HttpService {
    get(url){
        return new Promise((resolve,reject) =>{
            let xhr = new XMLHttpRequest();//criando uma instancia
  
            xhr.open('GET', url);//abrindo endereço e qual verbo http quero usar?url endpoint
        
            /**configurações**/
            xhr.onreadystatechange = () => {//vai ser chamada toda vez que o estado do meu xhr mudar
        //toda vez que uma requisição ajax executa ela ta mudando de estado chama essa função toda hora 
        
              if(xhr.readyState == 4){
                  //recuperar os dados
        
                  if(xhr.status == 200){
                    resolve(JSON.parse(xhr.responseText));//vai me dar o que veio retornado pelo servidor os dados  //convertendo o texto para JSON e converte para objeto java script objeto js posso manipular
                  } else {
                    reject(xhr.responseText);
                  }
              }
            };
            xhr.send();//pra executar essa operação tem que chamar o metodo send
            //recebendo primeiro parametro null pra indicar que não teve o erro e no segundo o retorno
        });
    } 

    post(url, dado) {


      return new Promise((resolve, reject) => {

          let xhr = new XMLHttpRequest();
          xhr.open("POST", url, true);
          xhr.setRequestHeader("Content-type", "application/json");
          xhr.onreadystatechange = () => {

              if (xhr.readyState == 4) {

                  if (xhr.status == 200) {

                      resolve(JSON.parse(xhr.responseText));
                  } else {

                      reject(xhr.responseText);
                  }
              }
          };
          xhr.send(JSON.stringify(dado)); // usando JSON.stringifly para converter objeto em uma string no formato JSON.
      });

  }
}

    //se eu quiser criar um post put delete eu posso nessa minha classe implmentar esses metodos
    //usando o padrao promise

    //Veja que usamos JSON.parse para converter o JSON (String) retornado pelo servidor em um objeto JavaScript. Mas perceba que ainda falta a chamada do método xhr.send que recebe com parâmetro os dados que queremos enviar. Mas atenção: como HTTP é um protocolo textual, não podemos enviar um objeto JavaScript diretamente, precisamos convertê-lo para uma string no formato JSON. Para isso, usamos JSON.stringify:
