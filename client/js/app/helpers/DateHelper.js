class DateHelper {

    dataPataTexto(data){
        return data.getDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear();
    }
    
    textoParaData(texto){
        return new Date(...texto.split('-') //TRANSFORMA A STRING EM UM ARRAY DE TRÊS ELEMENTOS
            .map((item,indice) => item = item - indice % 2)); //ARROW FUNCTION QUE DÁ O RETORNO DO RESULTADO ITEM
    }
}