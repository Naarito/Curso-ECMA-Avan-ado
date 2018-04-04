class View {            //CLASSE PAI QUE CONTÉM ELEMENTOS QUE SERÃO REUTILIZADOS

    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {
        throw new Error("O método template deve ser implementado em sua VIEW");  //ERRO EMITIDO CASO O DESENVOLVEDOR NÃO CRIE TEMPLATE
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);

    }

}