class ListaNegociacoes {

    constructor(contexto, armadilha) {
        this._negociacoes = [];         //ARRAY DE TODAS AS NEGOCIACOES
        this._armadilha = armadilha;  //RECEBE A FUNÇÃO DE UPDATE DE VIEW
        this._contexto = contexto;  //RECEBE O CONTEXTO
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);     //PUSHER DE NEGOCIACOES PARA O ARRAY
        Reflect.apply(this._armadilha, this._contexto, [this]) //CHAMA O METODO DE ATUALIZAÇÃO, INFORMA QUE O CONTEXTO É O CONTROLLER DE NEGOCIAÇÃO(PARA FUNCIONAR COMO ANTERIORMENTE) 
    }   //E PASSA PARA ESSA FUNÇÃO A LISTA DE NEGOCIAÇÕES REAL (O THIS LOCAL)

    get negociacoes() {             //GETTER DE ARRAY CONTENDO NEGOCIACOES
        return [].concat(this._negociacoes);      //CRIA NOVO ARRAY BASEADO NA LISTA ORIGINAL, BLINDANDO NOSSOS DADOS
    }

    esvazia() {
        this._negociacoes = [];  //LIMPA A LISTA DE NEGOCIAÇÕES
        Reflect.apply(this._armadilha, this._contexto, [this])
    }
}