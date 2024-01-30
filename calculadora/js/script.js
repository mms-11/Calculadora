//Criando calculadora usando factory function!
function criaCalculadora(){
    return {
        display: window.document.querySelector('.display'),

        
        cliqueBotoes(){
            document.addEventListener('click',function(event) {
                const elem = event.target;

                if(elem.classList.contains('btn-num')){
                    this.btnParaDisplay(elem.innerText);
                }
                if(elem.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(elem.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(elem.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            }.bind(this)); //salvando a calculadora inicial em this 
            //se usar arrow function, cravamos o this inicial em calculadora automaticamente
        },

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        btnParaDisplay(valor){
           this.display.value += valor;
        },
       clearDisplay(){
            this.display.value = '';
         },
       apagaUm(){
        this.display.value =this.display.value.slice(0,-1);
       },
       realizaConta(){
        let conta = this.display.value;

        try {
            conta = eval(conta); //função perigosa em js para facilitar o desenv. do codigo

            if(!conta){
                window.alert('Conta inválida!');
                return;
            }
            this.display.value = conta;

        } catch (error) {
            
        }
       },
       pressionaEnter(){
        this.display.addEventListener('keyup', evento =>{
            if(evento.keycode === 13){
                this.realizaConta();
            }
        }); //nao precisa de bind this
       },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();