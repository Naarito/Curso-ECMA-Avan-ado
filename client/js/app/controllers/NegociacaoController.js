class NegociacaoController {        //CRIA UM CONTROLADOR PARA INTERAÇÃO COM USUÁRIO E DOM

    constructor () {            //CRIA O CONSTRUTOR COM OS ATRIBUTOS DA CLASSE (EXECUTADO APENAS UMA VEZ NA CRIAÇÃO DA CLASSE)

        let $ = document.querySelector.bind(document);      //CRIA UM ATALHO PARA O QUERY SELECTOR

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');         //BUSCA OS CAMPOS PELOS SEUS IDENTIFICADORES
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes(model => //UTILIZA ARROW FUNCTION PARA TORNAR O PROGRAMA MENOS VERBOSO, ASSIM COMO SEU ESCOPO É LEXICO (UTILIZA O NEGOCIACAOCONTROLER NO THIS)
            
            this._negociacoesView.update(model) //UTILIZA O MÉTODO QUE ATUALIZA A VIEW, RECEBENDO O THIS DO NEGOCIACAOCONTROLLER E O MODEL SENDO A LISTA DE NEGOCIACOES

        );    //INSTANCIA O MODEL DAS LISTAS DE NEGOCIACAO
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView')); //INSTANCIA A VIEW, PASSANDO O LOCAL DE INSERÇÃO
        this._negociacoesView.update(this._listaNegociacoes); //ACIONA O MÉTODO QUE ATUALIZA A VIEW E PASSA A LISTA DE NEGOCIACOES INICIAL A MESMA

        this._mensagem = new Mensagem();    //INSTANCIA A MENSAGEM
        this._mensagemView = new MensagemView($('#mensagemView')); //INSTANCIA A VIEW DA MENSAGEM, PASSANDO O LOCAL DE INSERÇÃO
        this._mensagemView.update(this._mensagem);  //ATUALIZA A VIEW PASSANDO A MENSAGEM

    }

    adiciona(event) {           //CRIA UM MÉTODO QUE RECEBE COMO ARGUMENTO O EVENTO UTILIZADO NO 
        
        event.preventDefault();           //EVITA O RELOAD, AÇÃO PADRÃO DO EVENTO

        let negociacao = this._criaNegociacao();   //CRIA UMA INSTANCIA DA NEGOCIACAO COM OS DADOS DOS CAMPOS DOM
        this._listaNegociacoes.adiciona(negociacao); //ENVIA A NEGOCIACAO AO MODELO DE LISTA

        this._mensagem.texto = "Negociação cadastrada com sucesso!"; //DEFINE A MENSAGEM A SER MOSTRADA APOS ADICIONAR
        this._mensagemView.update(this._mensagem);  //ATUALIZA A VIEW PASSANDO A MENSAGEM

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

    apagaNegociacao () {
        this._listaNegociacoes.esvazia(function() {});

        this._mensagem.texto = "Negociações apagadas com sucesso!";
        this._mensagemView.update(this._mensagem);
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;               //ZERA VALORES DOS CAMPOS

        this._inputData.focus();                    //ALTERA O FOCO DO FORMULÁRIO

    }

}