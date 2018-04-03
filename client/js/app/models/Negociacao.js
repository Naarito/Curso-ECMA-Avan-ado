class Negociacao {                 //CLASSE CONTENDO NEGOCIAÇÕES

     constructor() {               //FUNÇÃO CONSTRUTORA CONTENDO ATRIBUTOS DA CLASSE
         this.data = new Date();
         this.quantidade = 1;           //THIS REFERE-SE AO OBJETO INSTANCIADO QUE ESTÁ UTILIZANDO A CLASSE
         this.valor = 0.0;              //LOGO, ESSES ATRIBUTOS SÃO ACESSÍVEIS FORA DA CLASSE, PELO OBJETO CRIADO
     }

}