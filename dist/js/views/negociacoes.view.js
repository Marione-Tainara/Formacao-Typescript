export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return `
      <table class ="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
        ${model.lista().map(Negociacao => {
            return `
          <tr>
          <td>
          ${new Intl.DateTimeFormat()
                .format(Negociacao.data)}
          <td>
          <td>${Negociacao.quantidade}<td>
          <td>${Negociacao.valor}<td>
          </tr>
          `;
        }).join('')}
        </tbody>
      </table>
    `;
    }
    updated(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = this.template(model);
    }
}
