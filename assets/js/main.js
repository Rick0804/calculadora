calculator = () => {
    return {
        display: document.querySelector(".display"),

        start(){
            this.detector();
            this.enterButton();
        },

        insertText(value){
            this.display.value += value.innerHTML;
        },

        cleanText(){
            this.display.value = ' ';
        },

        enterButton(){
            document.addEventListener('keyup', e => {
                if(e.keyCode == 13){
                    this.calc();                    
                }
            })
        },

        calc(){
            const display = this.display.value;
            try{
                this.display.value = eval(display);
            } catch(e){
                this.display.value = "Não é um número";
            }
        },

        erase(){
            this.display.value = this.display.value.slice(0, -1);

        },

        detector(){
            document.addEventListener('click', e => {
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.insertText(el);
                }
                if(el.classList.contains('btn-clear')){
                    this.cleanText()
                }
                if(el.classList.contains('btn-eq')){
                    this.calc();  
                }
                if(el.classList.contains('btn-del')){
                    this.erase();
                }
            })
        }
    }
}


const calc = calculator();
calc.start();