var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor"),
];

var tbody = document.querySelector('table tbody');

document.querySelector(".form").addEventListener("submit", function(event){
    event.preventDefault();
     //toda vez que o vento for disparado vou ter uma var tr 
     //criando um elemento do dom que não faz parte dele ainda
    var tr = document.createElement('tr');
    campos.forEach(function(campo){//pra cada item que valida meu array[]
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);//vai adicionar um filho que vai ser a td
    });
    //no fim do for ele vai ter criado uma td pra cada campo meu

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    campos[0].focus();

});