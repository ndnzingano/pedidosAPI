class Pedido{
    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.valorUnitario = this.checkDesconto();
        this.valorTotal = this.valorTotal();
        this.icms = this.icms();
        this.ipi = this.ipi();
        this.pis = this.pis();
        this.cofins = this.cofins();
        this.impostosTotais = this.impostosTotais();
        this.totalFatura = this.totalFatura();
        this.resumoPedido();

    }

    checkDesconto () {
        if (this.quantidade >= 500) {
           return  this.valorUnitario = 4;
        } else {
            return this.valorUnitario = 4.50;
        }
    }

    valorTotal () {
        return this.quantidade*this.checkDesconto();
    }

    icms (){
        return this.valorTotal*0.18
    }

    ipi () {
        return this.valorTotal*0.04
    }

    pis () {
        return this.valorTotal*0.0186
    }

    cofins () {
        return this.valorTotal*0.0854;
    }


    impostosTotais () {
        return this.icms+this.ipi+this.pis+this.cofins
    }

    totalFatura () {
        return this.impostosTotais+this.valorTotal;
    }

    resumoPedido () {
        let ICMS = (this.icms).toLocaleString(undefined, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
            style: 'currency',
            currency: 'BRL',
        });

        let IPI = (this.ipi).toLocaleString(undefined, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
            style: 'currency',
            currency: 'BRL',
        });

        let PIS = (this.pis).toLocaleString(undefined, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
            style: 'currency',
            currency: 'BRL',
        });

        let COFINS = (this.cofins).toLocaleString(undefined, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
            style: 'currency',
            currency: 'BRL',
        });

        let TOTAL = (this.totalFatura).toLocaleString(undefined, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
            style: 'currency',
            currency: 'BRL',
        });
        return `Cliente: ${this.nome}
        ICMS: ${ICMS}; IPI: ${IPI}; PIS: ${PIS}; COFINS: ${COFINS}; TOTAL: ${TOTAL}`
    }

}


module.exports = Pedido;


