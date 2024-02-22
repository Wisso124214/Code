
const canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.width = 1142;
canvas.height = 635;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'sprite.png';

let x = 1;
let y = 1;


let ultimoTiempo = 0;
const retraso = 1000 / 3;

img.onload = function() {
    requestAnimationFrame(function update(tiempoActual) {
    if (tiempoActual - ultimoTiempo < retraso) {
        requestAnimationFrame(update);
        return;
    }
    ultimoTiempo = tiempoActual;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    ctx.drawImage(img,(x-1)*canvas.width / 12,(y-1)*canvas.height / 4,canvas.width / 12,canvas.height / 4,10,10,canvas.width / 12,canvas.height / 4);
    
    requestAnimationFrame(update);
    })
}    

let move = false;

window.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 's':
            console.log('s');
            y=1;
            move = true;
            break;

        case 'a':
            console.log('a');
            y=2;
            move = true;
            break;

        case 'd':
            console.log('d');
            y=3;
            move = true;
            break;

        case 'w':
            console.log('w');
            y=4;
            move = true;
            break;

        default:
            move = false;
            break;
    }

    if(move){
        if(x < 12){
            x++;
        }else{
            x = 1;
        }
    }
})