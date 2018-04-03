class NegociacaoController {        //CRIA UM CONTROLADOR PARA INTERAÇÃO COM USUÁRIO E DOM

    constructor () {            //CRIA O CONSTRUTOR COM OS ATRIBUTOS DA CLASSE (EXECUTADO APENAS UMA VEZ NA CRIAÇÃO DA CLASSE)

        let $ = document.querySelector.bind(document);      //CRIA UM ATALHO PARA O QUERY SELECTOR

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');         //BUSCA OS CAMPOS PELOS SEUS IDENTIFICADORES
        this._inputValor = $('#valor');

    }

    adiciona(event) {           //CRIA UM MÉTODO QUE RECEBE COMO ARGUMENTO O EVENTO UTILIZADO NO 
        
        event.preventDefault();                    //EVITA O RELOAD, AÇÃO PADRÃO DO EVENTO

        let data = new Date(
            ...this._inputData.value.split('-') //TRANSFORMA A STRING EM UM ARRAY DE TRÊS ELEMENTOS
            .map((item,indice) => item = item - indice % 2) //ARROW FUNCTION QUE DÁ O RETORNO DO RESULTADO ITEM
        );

        let negociacao = new Negociacao(           //CRIA UMA INSTANCIA DA NEGOCIACAO COM OS DADOS DOS CAMPOS DOM
            data,                                  //IMPORTANTE, NÃO USAR _INPUTDATA, USAR O VALOR ALTERADO
            this._inputQuantidade.value,           
            this._inputValor.value
        );
        
        console.log(negociacao);

    }

}