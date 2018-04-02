var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),    //ARRAY DE CAPTURA DOS INPUTS
    document.querySelector('#valor')
];

console.log(campos);    //IMPRIME OS LOCAIS CAPTURADOS

var tbody = document.querySelector('table tbody');       //CRIA UMA VARIÁVEL PARA CAPTURA DO TBODY

document.querySelector('.form').addEventListener('submit', function(event){   //FUNLÇÃO DE CRIAÇÃO DE LINHA

    event.preventDefault();         //EVITA O EVENTO PADRÃO DO SUBMIT, O RELOAD

    var tr = document.createElement('tr');         //CRIA A LINHA
    
    campos.forEach(function(campo){                //PARA CADA ITEM DO ARRAY CAMPOS

        var td = document.createElement('td');     //CRIA UM ITEM NA LINHA
        td.textContent = campo.value;              //ATRIBUI VALOR AO ITEM
        tr.appendChild(td);                        //AFIXA O ITEM À LINHA

    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;   //FAZ A CONTA DO VOLUME DA TRANSAÇÃO
    tr.appendChild(tdVolume);                                   //AFIXA O VOLUME A LINHA

    tbody.appendChild(tr);            //AFIXA A LINHA AO CORPO DA TABELA

    campos[0].value = '';
    campos[1].value = 1;              //ZERANDO OS CAMPOS DE PREENCHIMENTO
    campos[2].value = 0;

    campos[0].focus();                //RETORNANDO O FOCO AO CAMPO DE DATA

});