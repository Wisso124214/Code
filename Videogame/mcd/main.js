console.log('inline');

const isPrime = (n)=>{

    for(let i=n-1; i>1; i--){
        if(isDivisible(n,i)){
            return false;
        }
    }

    return true;
}


const isDivisible = (n, d)=>{
    if(n%d==0)
    return true;
else   
return false;
}


for(let i=1; i<100; i++){
    if(isPrime(i))
        document.write(i+", ");
}

const dividers = (n)=>{
    
    let obj = {};

    for(let i=2; i<n; i++){
        if(isDivisible(n, i) && isPrime(i)){
            if(typeof(obj[`${i}`])==='undefined'){
                obj[`${i}`]=0;
            }
        }
    }

    for(let i in obj){
        do{
            n /= parseInt(i,10);
            obj[`${i}`]++;
        }while(isDivisible(n,parseInt(i,10)));
    }

    return obj;
}




const mcd = (array)=>{

    let bool = false;

    for(let i in array){
        if(isPrime(array[i])){
            console.log(array);
            return;
        }
    }

    let list = [];

    for(let i in array){
        list[i] = dividers(array[i]);
    }

    let keysi = null;
    let keysj = null;
    let values = null;

    keysi = Object.keys(list[0]);
    //values = Object.values(list[i]);
    for(let pi in keysi){
        //console.log(keys[p]);
        for(let j in list){
            keysj = Object.keys(list[j]);
            for(let pj=0; pj<keysj.length; pj++){
                console.log(keysi[pi],keysj[pj],keysi[pi]===keysj[pj]);
            }
        }
    }

    console.log(list);
}

mcd([30,77,13*17*19])
console.log('--------------')
console.log('--------------')
mcd([15*2,10,50]);

