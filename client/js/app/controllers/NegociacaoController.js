class NegociacaoController {        //CRIA UM CONTROLADOR PARA INTERAÇÃO COM USUÁRIO E DOM

    constructor () {            //CRIA O CONSTRUTOR COM OS ATRIBUTOS DA CLASSE (EXECUTADO APENAS UMA VEZ NA CRIAÇÃO DA CLASSE)

        let $ = document.querySelector.bind(document);      //CRIA UM ATALHO PARA O QUERY SELECTOR

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');         //BUSCA OS CAMPOS PELOS SEUS IDENTIFICADORES
        this._inputValor = $('#valor');

    }

    adiciona(event) {           //CRIA UM MÉTODO QUE RECEBE COMO ARGUMENTO O EVENTO UTILIZADO NO 
        
        event.preventDefault();           //EVITA O RELOAD, AÇÃO PADRÃO DO EVENTO

        let helper = new DateHelper();          //INVOCA O HELPER DE DATAS
      

        let negociacao = new Negociacao(        //CRIA UMA INSTANCIA DA NEGOCIACAO COM OS DADOS DOS CAMPOS DOM
            helper.textoParaData(this._inputData.value),       //APLICA O METODO CONVERSOR DO HELPER PARA FORMATO DATA
            this._inputQuantidade.value,           
            this._inputValor.value
        );
        
        console.log(negociacao);
        console.log(negociacao.volume);

        let diaMesAno = helper.dataPataTexto(negociacao.data);   //APLICA O METODO CONVERSOR DO HELPER PARA FORMATO TEXTO

        console.log(diaMesAno);

    }

}