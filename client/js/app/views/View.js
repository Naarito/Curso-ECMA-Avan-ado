class View {            //CLASSE PAI QUE CONTÉM ELEMENTOS QUE SERÃO REUTILIZADOS

    constructor() {

        this._elemento = elemento;
    }

    update(model) {

        this.elemento.innerHTML = this._template(model);

    }

}