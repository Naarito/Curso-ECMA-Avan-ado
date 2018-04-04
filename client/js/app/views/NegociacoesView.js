class NegociacoesView {
    

    constructor(elemento){
        this._elemento = elemento;      //RECEBE O ELEMENTO DA DOM REFERENCIADO NO CONTROLLER
    }   

    _template(model) {           //TEMPLATE A SER INSERIDO
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

                ${model.negociacoes.map(n=>{   //UTILIZA O METODO GETTER DE LISTANEGOCIACOES,PASSADO PELO CONTROLLER PARA 
                                                //PEGAR O ARRAY DE NEGOCIACOES E PERCORRE-LO COM O TEMPLATE ABAIXO
                    return `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>                             
                        <td>${n.volume}</td>
                    </tr>
                    `
                }).join('')}

            </tbody>
            
            <tfoot>

                <td colspan="3"></td>
                <td>
                ${
                    (function(){
                        let total = 0;
                        model.negociacoes.forEach(n=> total += n.volume);   //PARA CADA ITEM DO ARRAY, SOMAR AO TOTAL O VOLUME
                        return total;               //RETORNAR O TOTAL AO FIM DA ITERAÇÃO
                    })()
                }
                </td>
            </tfoot>
        </table>
        `;          //O METODO JOIN FAZ COM QUE O ARRAY DE STRINGS DGERADAS SE UNAM EM UMA UNICA STRING 
    }

    update(model) {

        this._elemento.innerHTML = this._template(model);  //PEGA A DIV E TRANSFORMA EM ELEMENTO DOM, INSERINDO O TEMPLATE NO LUGAR

    }

}