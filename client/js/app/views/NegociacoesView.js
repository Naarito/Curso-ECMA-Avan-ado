class NegociacoesView {
    

    constructor(elemento){
        this._elemento = elemento;      //RECEBE O ELEMENTO DA DOM REFERENCIADO NO CONTROLLER
    }   

    _template() {           //TEMPLATE A SER INSERIDO
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
        `;
    }

    update() {

        this._elemento.innerHTML = this._template();  //PEGA A DIV E TRANSFORMA EM ELEMENTO DOM, INSERINDO O TEMPLATE NO LUGAR

    }

}