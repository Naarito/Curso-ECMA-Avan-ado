class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];         //ARRAY DE TODAS AS NEGOCIACOES
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);     //PUSHER DE NEGOCIACOES PARA O ARRAY
    }

    get negociacoes() {             //GETTER DE ARRAY CONTENDO NEGOCIACOES
        return this._negociacoes;
    }
    
}