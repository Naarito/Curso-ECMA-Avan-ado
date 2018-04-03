class Negociacao {                 //CLASSE CONTENDO NEGOCIAÇÕES

    constructor(data,quantidade,valor) {               //FUNÇÃO CONSTRUTORA CONTENDO ATRIBUTOS DA CLASSE
        this._data = new Date(data.getTime());         //COMO O NOVO OBJETO PASSARÁ OS ATRIBUTOS DA CLASSE PREENCHEMOS
        this._quantidade = quantidade;      //OS ATRIBUTOS DO CONSTRUTOR COM AS VARIÁVEIS RECEBIDAS
        this._valor = valor;                //UTILIZAMOS O UNDERSCORE EM ATRIBUTOS QUE N DEVEM SER ACESSADOS FORA DA CLASSE
        Object.freeze(this);                //CONGELA A INSTANCIA DO OBJETO, BLOQUEANDO A ALTERAÇÃO DOS ATRIBUTOS
    }

    get volume() {                               //CRIA O MÉTODO OBTÉM VOLUME, UMA FUNÇÃO DA CLASSE NEGOCIACAO
         return this._quantidade * this._valor;  //CALCULA O VOLUME COM BASE NOS VALORES ATUAIS DO OBJETO INSTANCIADO
     }

    get data() {                                     
            return new Date(this._data.getTime());         //AQUI BLINDAMOS A DATA DE RECEBER ALTERAÇÕES EXTERNAS
    }                                                      //ARMAZENANDO A HORA NO ATO DO REGISTRO

    get quantidade() {              //A SINTAXE GET PERMITE CHAMAR ATRIBUTOS SEM SER NECESSÁRIO O "GET" E "()"
        return this._quantidade;
    }

    get valor() {                       //COMO OS ATRIBUTOS POSSUEM UNDERSCORE, UTILIZAMOS MÉTODOS ACESSADORES
        return this._valor;             //QUE RETORNAM OS ATRIBUTOS QUANDO NECESSÁRIO
    }

}