/* 
Nele, vamos adicionar no prototype de Array o método includes que usa por debaixo dos panos o já conhecido indexOf. Mas, Flávio, é assim que o includes oficial é implementado? Não faço ideia, o importante é que o resultado final seja o mesmo, e usar o indexOfpor debaixo dos panos resolve isso perfeitamente. Veja que o método só é adicionando se ele não existir:

*/


if(!Array.prototype.includes) {

    // Se não existir, adiciona

    console.log('Polyfill para Array.includes aplicado.');

    Array.prototype.includes = function(elemento) {
        return this.indexOf(elemento) != -1;
    };
}