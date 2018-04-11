class ListaNegociacoes {

    constructor(armadilha) {
        this._negociacoes = [];         //ARRAY DE TODAS AS NEGOCIACOES
        this._armadilha = armadilha;  //RECEBE A FUNÇÃO DE UPDATE DE VIEW

    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);     //PUSHER DE NEGOCIACOES PARA O ARRAY
        this._armadilha(this); //PASSA O THIS (LISTA DE NEGOCIACOES) PARA O ATRIBUTO MODEL DA FUNÇÃO NEGOCIACOESVIEW.UPDATE

    } 

    get negociacoes() {             //GETTER DE ARRAY CONTENDO NEGOCIACOES
        return [].concat(this._negociacoes);      //CRIA NOVO ARRAY BASEADO NA LISTA ORIGINAL, BLINDANDO NOSSOS DADOS
    }

    esvazia() {
        this._negociacoes = [];  //LIMPA A LISTA DE NEGOCIAÇÕES
        this._armadilha(this);
    }
}