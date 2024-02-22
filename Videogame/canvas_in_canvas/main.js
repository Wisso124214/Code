document.write('inline');

window.onload = ()=>{
    let back = document.createElement('canvas');
    back.width = 500;
    back.height = 500;
    let ctxb = back.getContext('2d');
    
    ctxb.fillStyle = 'blue';
    ctxb.fillRect(0,0,back.width, back.height);
    ctxb.clearRect(5,5,back.width-10, back.height-10);

    let player = document.createElement('canvas');
    player.width = 50;
    player.height = 50;
    let ctxp = player.getContext('2d');
    
    ctxp.fillStyle = 'red';
    ctxp.fillRect(0,0,player.width, player.height);
    
    document.body.append(back);
    
    
    
    ctxb.drawImage(player, 10,10);

}