class NegociacaoController {        //CRIA UM CONTROLADOR PARA INTERAÇÃO COM USUÁRIO E DOM

    constructor () {            //CRIA O CONSTRUTOR COM OS ATRIBUTOS DA CLASSE (EXECUTADO APENAS UMA VEZ NA CRIAÇÃO DA CLASSE)

        let $ = document.querySelector.bind(document);      //CRIA UM ATALHO PARA O QUERY SELECTOR

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');         //BUSCA OS CAMPOS PELOS SEUS IDENTIFICADORES
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

    }

    adiciona(event) {           //CRIA UM MÉTODO QUE RECEBE COMO ARGUMENTO O EVENTO UTILIZADO NO 
        
        event.preventDefault();           //EVITA O RELOAD, AÇÃO PADRÃO DO EVENTO

        let negociacao = this._criaNegociacao();   //CRIA UMA INSTANCIA DA NEGOCIACAO COM OS DADOS DOS CAMPOS DOM
        
        this._listaNegociacoes.adiciona(negociacao); //ENVIA A NEGOCIACAO AO MODELO DE LISTA

        this._limpaFormulario();        //CHAMA A FUNÇÃO QUE LIMPA O FORMULÁRIO

        console.log(this._listaNegociacoes.negociacoes); //EXIBINDO A NEGOCIAÇÃO EM SEU ARRAY, VIA GETTER DO LISTANEGOCIACOES

    }

    _criaNegociacao (){
        return new Negociacao(        
            DateHelper.textoParaData(this._inputData.value),       //APLICA O METODO CONVERSOR DO HELPER
            this._inputQuantidade.value,           
            this._inputValor.value
        );
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;               //ZERA VALORES DOS CAMPOS

        this._inputData.focus();                    //ALTERA O FOCO DO FORMULÁRIO

    }

}