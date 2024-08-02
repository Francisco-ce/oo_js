
//função construtora//

function Inquilino(nome){
    this.nome = nome
}

function Apartamento(nome, metragem, cidade, bairro, ar_condicionado, valor_aluguel) {
    this.metragem = metragem
    this.cidade = cidade
    this.bairro = bairro
    this.ar_condicionado = ar_condicionado
    let _valor_aluguel = valor_aluguel
    this.apresentacao = function(){
        console.log(`O inquilino ${this.nome} mora em ${this.cidade}, no bairro ${this.bairro}`)
    }

    //getters e setters//

    this.setValorAluguel = function(valor) {
        _valor_aluguel = valor
    }
    
    this.getValorAluguel = function() {
        return _valor_aluguel
    }
    
    Inquilino.call(this, nome)
}

function VilaMariana(nome) {
    Apartamento.call(this, nome, 30.15, 'São Paulo', 'Vila Mariana', true, 3500)
    const novaAluguel = this.getValorAluguel()*1.007
    this.setValorAluguel(novaAluguel)
}

function Republica(nome) {
    Apartamento.call(this, nome, 28.64, 'São Paulo', 'Vila Mariana', true, 2800)
    const novaAluguel = this.getValorAluguel()*1.005
    this.setValorAluguel(novaAluguel)
}



const francisco = new Apartamento('Francisco', 30.15, 'São Paulo', 'Vila Mariana', true, 3500)
const amanda = new Apartamento('Amanda', 28.64, 'São Paulo', 'República', true, 2800)
const francisco2 = new VilaMariana('Francisco')
const amanda2 = new Republica('Amanda')




//console.log

// console.log(francisco)
// francisco.apresentacao()
// console.log(' ')
// console.log('----------')
// console.log(' ')
// console.log(amanda)
// amanda.apresentacao()

// francisco.setValorAluguel(3800)
// console.log(francisco.getValorAluguel())

// amanda.setValorAluguel(3000)
// console.log(amanda.getValorAluguel())


// francisco2.setValorAluguel(4000)
console.log(francisco2.getValorAluguel())

// amanda2.setValorAluguel(3200)
console.log(amanda2.getValorAluguel())