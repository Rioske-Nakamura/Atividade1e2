class Pessoa{
    constructor(nome, data, altura){
        this.nome = nome,
        this.data = data,
        this.altura = altura
    }

    CalcularIdade(){
        let array= this.data.split("/")
        let idade= 2023 - array[0]
        return this.nome +" Tem " +  idade + "anos e " + this.altura + " de altura"
    }
}

let pessoa= new Pessoa("Barao", "1985/3/23", 21.5);
console.log(pessoa.CalcularIdade())