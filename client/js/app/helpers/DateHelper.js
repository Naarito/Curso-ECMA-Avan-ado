class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada');     //DECLARA ERRO CASO DATE HELPER SEJA INSTANCIADA
    }

    static dataPataTexto(data){         //METODO ESTÁTICO PODE SER ACESSADO SEM CRIAR UMA NOVA INSTANCIA
        return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`;  //UTIIZA TEMPLATE STRINGS PARA UNIFICAR DADOS E TEXTO
    }
    
    static textoParaData(texto){
        
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){           //CONFERE SE OS DADOS RECEBIDOS ESTÃO NO PADRÃO
            throw new Error('Data deve estar no formato aaaa-mm-dd ao entrar no textoParaData');
        }

        return new Date(...texto.split('-') //TRANSFORMA A STRING EM UM ARRAY DE TRÊS ELEMENTOS
            .map((item,indice) => item = item - indice % 2)); //ARROW FUNCTION QUE DÁ O RETORNO DO RESULTADO ITEM
    }
}