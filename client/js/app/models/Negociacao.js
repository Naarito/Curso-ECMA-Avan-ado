class Negociacao {                 //CLASSE CONTENDO NEGOCIAÇÕES

     constructor(data,quantidade,valor) {               //FUNÇÃO CONSTRUTORA CONTENDO ATRIBUTOS DA CLASSE
         this.data = data;                  //COMO O NOVO OBJETO PASSARÁ OS ATRIBUTOS DA CLASSE
         this.quantidade = quantidade;      //PREENCHEMOS OS ATRIBUTOS DO CONSTRUTOR
         this.valor = valor;                //COM AS VARIÁVEIS RECEBIDAS
     }

    obtemVolume() {                            //CRIA O MÉTODO OBTÉM VOLUME, UMA FUNÇÃO DA CLASSE NEGOCIACAO
         return this.quantidade * this.valor;  //CALCULA O VOLUME COM BASE NOS VALORES ATUAIS DO OBJETO INSTANCIADO
     }

}