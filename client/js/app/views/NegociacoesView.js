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
                    model.negociacoes.reduce((total,n)=>{  //UTILIZA A FUNÇÃO REDUCE QUE PERCORRE O ARRAY
                        return total + n.volume;    //SOMANDO AO TOTAL O VALOR DE N.VOLUME DE TODOS SEUS ITENS
                    }, 0.0) //DEFININDO O VALOR INICIAL DA VARIAVEL TOTAL
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