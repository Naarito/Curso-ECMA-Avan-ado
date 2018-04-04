class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada');     //DECLARA ERRO CASO DATE HELPER SEJA INSTANCIADA
    }

    static dataPataTexto(data){         //METODO ESTÁTICO PODE SER ACESSADO SEM CRIAR UMA NOVA INSTANCIA
        return data.getDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear();
    }
    
    static textoParaData(texto){
        return new Date(...texto.split('-') //TRANSFORMA A STRING EM UM ARRAY DE TRÊS ELEMENTOS
            .map((item,indice) => item = item - indice % 2)); //ARROW FUNCTION QUE DÁ O RETORNO DO RESULTADO ITEM
    }
}