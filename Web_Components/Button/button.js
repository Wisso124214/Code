class MyButton extends HTMLElement{

    constructor(){
        super();

        this.sound = new Audio('tun.wav');

        this.addEventListener('click', ()=> {
            
            let thisColor = randomBackColor();

            document.body.style.backgroundColor = thisColor;
            console.log(thisColor);
            
        });
    }
    
    connectedCallback(){
        
        this.id = 'button1';
        this.innerHTML = "fiestaa";
    }
}

window.customElements.define("my-button",MyButton);

const randomBackColor = () => {
    let color = '#';
    let ran = 0;
    
    for(let i=0; i<6; i++){
        ran = Math.floor(Math.random()*16);
        
        switch(ran){
            case 10: color = color.concat('a'); break;
            case 11: color = color.concat('b'); break;
            case 12: color = color.concat('c'); break;
            case 13: color = color.concat('d'); break;
            case 14: color = color.concat('e'); break;
            case 15: color = color.concat('f'); break;
            default: color = color.concat(ran.toString());
        }
    }
    
    let x = document.getElementById('button1');
    x.sound.play();

    return color;
}