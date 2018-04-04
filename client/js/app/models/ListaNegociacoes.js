class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];         //ARRAY DE TODAS AS NEGOCIACOES
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);     //PUSHER DE NEGOCIACOES PARA O ARRAY
    }

    get negociacoes() {             //GETTER DE ARRAY CONTENDO NEGOCIACOES
        return [].concat(this._negociacoes);      //CRIA NOVO ARRAY BASEADO NA LISTA ORIGINAL, BLINDANDO NOSSOS DADOS
    }

}