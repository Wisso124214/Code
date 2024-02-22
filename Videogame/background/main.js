document.write('Press WASD to move the background image, and + or - to do zoom <br><br>');

const BackgroundActions = (imgWidth, imgHeight, imgSrc, speedMove, screenWidth, screenHeight, speedZoom, maxZoom, fps)=>{
    const canvas = document.createElement('canvas');
    canvas.width = imgWidth;
    canvas.height = imgHeight;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = imgSrc;

    let x = 0;
    let y = 0;
    let zoom = 0;
    fps = 1000/fps;

    let lastTime = 0;


    let xprinted = true;
    let yprinted = true;

    img.onload = function() {

        requestAnimationFrame(function update(newTime) {
            if (newTime - lastTime < fps) {
                requestAnimationFrame(update);
            return;
        }
        lastTime = newTime;
        ctx.clearRect(0,0,screenWidth,screenHeight);

        if(x >= 0 && x <= canvas.width-screenWidth-zoom){
            if(y >= 0 && y <= canvas.height-screenHeight-zoom){
                xprinted = true;
                yprinted = true;
                ctx.drawImage(img,x,y,screenWidth+zoom,screenHeight+zoom,10,10,screenWidth,screenHeight);
            }else{
                yprinted = false;
            }
        }else{
            xprinted = false;
        }
        
        if(!xprinted){
            x = canvas.width-screenWidth-zoom;
        }
        
        if(!yprinted){
            y = canvas.height-screenHeight-zoom;
        }
        requestAnimationFrame(update);
        })
    }    


    window.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 's':
                if(y+speedMove < canvas.height-screenHeight-zoom){
                    y+=speedMove;
                }
                break;

            case 'a':
                if(x-speedMove > 0){
                    x-=speedMove;
                }
                break;

            case 'd':
                if(x+speedMove < canvas.width-screenWidth-zoom){
                    x+=speedMove;
                }            
                break;

            case 'w':
                if(y-speedMove > 0){
                    y-=speedMove;
                }
                break;
            case '-':
                if(zoom+speedZoom < Math.min(canvas.width,canvas.height)-Math.min(screenWidth,screenHeight)){
                    zoom+=speedZoom;
                }
                break;

            case '+':
                if(zoom-speedZoom > Math.min(canvas.width,canvas.height)*maxZoom-Math.min(screenWidth,screenHeight)){
                    zoom-=speedZoom;
                }
                break;

            default:
                break;
        }
    });
}

BackgroundActions(1600,1015,'back.webp',5,1000,500,10,0.3,60);