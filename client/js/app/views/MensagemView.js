class MensagemView extends View{

    constructor(elemento) {
        super(elemento);        //RECEBE ELEMENTOS DA CLASSE VIEW
    }

    template(model) {
        return model.texto ? `<p class= "alert alert-info">${model.texto}</p>` : '<p></p>'; //SE TEM TEXTO : SE NÃO TEM TEXTO
    }

}