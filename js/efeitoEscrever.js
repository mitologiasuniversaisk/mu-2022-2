class EfeitoEscrever{
    constructor(){
        this.divsConteudo = document.getElementsByClassName("conteudo");
    }

    comecarEfeito(){
        for (let i = 0; i < this.divsConteudo.length; i++) {
            this.typeWrite(this.divsConteudo[i]).then((result)=>{
                    console.log(result)
            });
        }
    }

    typeWrite(elemento){
        return new Promise((resolve, reject) => {
            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML='';

            this.promisse().then((result)=>{
                console.log(result)
            })
            
            resolve("passou um ciclo")
        })
    }

    promisse(){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve("passou um segundo")
               },1000)
          })
    }
}