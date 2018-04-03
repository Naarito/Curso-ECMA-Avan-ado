class NegociacaoController {        //CRIA UM CONTROLADOR PARA INTERAÇÃO COM USUÁRIO E DOM

    constructor () {            //CRIA O CONSTRUTOR COM OS ATRIBUTOS DA CLASSE (EXECUTADO APENAS UMA VEZ NA CRIAÇÃO DA CLASSE)

        let $ = document.querySelector.bind(document);      //CRIA UM ATALHO PARA O QUERY SELECTOR

        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');         //BUSCA OS CAMPOS PELOS SEUS IDENTIFICADORES
        this.inputValor = $('#valor');

    }

    adiciona(event) {           //CRIA UM MÉTODO QUE RECEBE COMO ARGUMENTO O EVENTO UTILIZADO NO 
        
        event.preventDefault();                    //EVITA O RELOAD, AÇÃO PADRÃO DO EVENTO
        console.log('Controller Chamado!');

        console.log(this.inputData.value);
        console.log(this.inputQuantidade.value);
        console.log(this.inputValor.value);

    }

}