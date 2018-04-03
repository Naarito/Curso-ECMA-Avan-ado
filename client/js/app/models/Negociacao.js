class Negociacao {                 //CLASSE CONTENDO NEGOCIAÇÕES

    constructor(data,quantidade,valor) {               //FUNÇÃO CONSTRUTORA CONTENDO ATRIBUTOS DA CLASSE
        this._data = data;                  //COMO O NOVO OBJETO PASSARÁ OS ATRIBUTOS DA CLASSE PREENCHEMOS
        this._quantidade = quantidade;      //OS ATRIBUTOS DO CONSTRUTOR COM AS VARIÁVEIS RECEBIDAS
        this._valor = valor;                //UTILIZAMOS O UNDERSCORE EM ATRIBUTOS QUE N DEVEM SER ACESSADOS FORA DA CLASSE
        Object.freeze(this);                //CONGELA A INSTANCIA DO OBJETO, BLOQUEANDO A ALTERAÇÃO DOS ATRIBUTOS
    }

    get volume() {                            //CRIA O MÉTODO OBTÉM VOLUME, UMA FUNÇÃO DA CLASSE NEGOCIACAO
         return this._quantidade * this._valor;  //CALCULA O VOLUME COM BASE NOS VALORES ATUAIS DO OBJETO INSTANCIADO
     }

    get data() {                     //COMO OS ATRIBUTOS POSSUEM UNDERSCORE, UTILIZAMOS MÉTODOS ACESSADORES
         return this._data;         //QUE RETORNAM OS ATRIBUTOS QUANDO NECESSÁRIO
    }

    get quantidade() {              //A SINTAXE GET PERMITE CHAMAR ATRIBUTOS SEM SER NECESSÁRIO O "GET" E "()"
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}