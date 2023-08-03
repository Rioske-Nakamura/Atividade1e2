class Alunos{
    constructor(matricula, nome, prova1,prova2, tralho){
        this.matricula = matricula,
        this.nome = nome,
        this.prova1 = prova1,
        this.prova2 = prova2,
        this.tralho = tralho
    }
    MediaFinal(){
        let calcularprova1= (this.prova1 * 2.5) / 10
        let calcularprova2= (this.prova2 * 2.5) / 10 
        let calculartrabalho= (this.tralho * 2) / 10
        let media= calcularprova1 + calcularprova2 + calculartrabalho
        return media
    }

    ProvaFinal(mediafinal){
    let calcular =  mediafinal - 6
    if(calcular >= 0){
      return 0
    }
    else{
      return "Esta Reprovado"
    }
  }
}

let alunos= new Alunos(324342, "Wamderley", 0, 10, 10)
console.log(alunos.MediaFinal())
console.log(alunos.ProvaFinal(alunos.MediaFinal()))