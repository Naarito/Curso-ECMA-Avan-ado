class Mensagem {
    
    constructor(texto='') {     //CASO A CLASSE SEJA INSTANCIADA VAZIA, ESSA LINHA DEFINE O CONTEUDO DE TEXTO COMO VAZIO
        this._texto = texto;    
    }

    get texto() {
        return this._texto;     //CLASSE GETTER QUE DISPONIBILIZA O TEXTO SOLICITADO
    }

    set texto(texto){           //PERMITE QUE O USUÁRIO USE mensagem.texto = "x" APÓS INSTANCIAR A CLASSE VAZIA
        this._texto = texto;        
    }

}

