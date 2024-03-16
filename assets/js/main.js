function calculator () {
        this.display = document.querySelector(".display"),

        this.start = () =>{
            this.detector();
            this.enterButton();
        }

        this.insertText = (value) => {
            this.display.value += value.innerHTML;
        }

        this.cleanText = () => {
            this.display.value = ' ';
        }

        this.enterButton = () => {
            document.addEventListener('keyup', e => {
                if(e.keyCode == 13){
                    this.calc();                    
                }
            })
        }

        this.calc = () => {
            const display = this.display.value;
            try{
                this.display.value = eval(display);
            } catch(e){
                this.display.value = "Não é um número";
            }
        },

        this.erase = () => {
            this.display.value = this.display.value.slice(0, -1);

        },

        this.detector = () => {
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



const calc = new calculator();
calc.start();