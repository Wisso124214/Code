

document.write('<br/><br/> Ingrese y presione el botón. <br>"-": Para indicar que el número es negativo.<br> "--": Para indicar la operación de resta.<br><br> Ejemplos: 3+5, 3 * 5, 3 +-5, 3 --/ 4, 3 /-4, 2^3, 2 % 4. <br><br>');

/*let textbox = document.createElement("textarea");
textbox.id = "id_textbox";
//textbox.textContent = "3 +* 5";
textbox.innerHTML = "3 *+ 5";
document.body.appendChild(textbox);

document.write("<br><br>");*/
document.write("<br>");

let button = document.createElement("button");
button.id = "id_button";
button.textContent = "Ingresar";
document.body.appendChild(button);

//text = prompt("Ingrese la(s) operacion(es) [+,-,*,/,%,**] que desea calcular.");
//let text = "3 -- 5 +^ 2 * 7 %* 8 --+ 3 /%- 1 +- 10";
let text = "";
let n = [""];
let s = [""];
let neg = [0];
let char = "";

	button = document.getElementById("id_button");
	button.addEventListener('click', (event) => {
	//button.addEventListener("click", onclick1 = ()=>{
		text = prompt("Ingrese la(s) operacion(es) [+,--,*,/,%,^] que desea calcular.");
		calculate();
	}, false);


const calculate = ()=> {
	//ss = document.styleSheets[1];
	//ss.cssRules[0].style.backgroundColor = 'blue';
	//ss.cssRules[0].style.backgroundColor = '#60ffc2';

	document.write("<br><br><br><br>");

	let button = document.createElement("button");
	button.id = "id_button";
	button.textContent = "Ingresar";
	document.body.appendChild(button);
	document.write("<br><br><br><br>");

	button = document.getElementById("id_button");
	button.addEventListener('click', (event) => { 
	//button.addEventListener("click", onclick1 = ()=>{
		text = prompt("Ingrese la(s) operacion(es) [+,-,*,/,%,**] que desea calcular.");
		calculate();
	}, false);

	const isNumber = (char)=>{

		char = char.charCodeAt(0);

		if((char >= 48 && char <=57)){
			return true;
		}else{
			return false;
		}
	}

	const isOperator = (char)=>{

		char = char.charCodeAt(0);
		
		if(char === 43 || char === 45 || char === 47 || char === 42 || char === 37 || char === 94){
			return true;
		}else{
			return false;
		}
	}

	let posn = 0;
	let poss = 0;

	for(let i in text){
		
		if(isNumber(text[i])){
			n[posn] += text[i];

			if(i>0){
				if(!isNumber(text[i-1])){
					poss++;
				}
				s[poss] = "";
			}

		}else if(isOperator(text[i])){

			if(text.charCodeAt(parseInt(i)) === 45 && text.charCodeAt(parseInt(i)-1) === 45){
				s[poss] += "";
				
			}else if(text.charCodeAt(i) === 45 && (text.charCodeAt(parseInt(i) + 1) !== 45) && (text.charCodeAt(parseInt(i) - 1) !== 45)){
				neg[posn]++;

			}else{
				s[poss] += text[i];

				if(i>0){
					if(!isOperator(text[i-1])){
						posn++;
						n[posn] = "";
						neg[posn] = 0;
					}
				}
			}
		}
	}

	for(let i in n){
		if(n[i] !== "")
			n[i] = parseInt(n[i],10);
		else
			n[i] = 0;

		if(neg[i]>0){
			n[i] *= Math.pow(-1,neg[i]);
		}
	}

	s.pop();

	for(let i in s){
		if(s[i] === ''){
			s[i] = '+';
		}
	}

	console.log(n);
	console.log(s);
	console.log(text);


	console.log("------");

	let j  = [];
	let ts = [""];

	for(let i in s){

		j[i]  = 0;
	}

	const maxIndexIn = (arr, i) =>{

		if(i < arr.length){

			if((typeof(arr[i].length))==='undefined'){
						
					return 0;
				}else{

					return arr[i].length-1;
			}
		}
	}

	let x = 0;
	let max = j.length - 1;

	do{
		
		if(j[0] < s[0].length){
			for(let z2 in s){
				ts[x] += s[z2][j[z2]];
			}
		}

		j[max]++;

		for(let z1 = max; z1>0; z1--){
			if(j[z1] > maxIndexIn(s,z1)){
				
				j[z1-1]++;
				j[z1] = 0;
			}
		}

		x++;
		if(ts.length === x){
			ts[x] = "";
		}

	}while(j[0] < s[0].length);

	ts.pop();
	console.log(ts);


	const popn = (arr, i)=>{

		for(let x = i; x < arr.length; x++){
			arr[x] = arr[x+1];
		}
		
		arr.pop();
		return arr;
	}

	const popt = (text, i)=>{

		let final = "";
		
		final += text.slice(0,i);
		final += text.slice(i+1);

		return final;
	}


	//add, sub, multi, div, pow, mod

	const add = (n, i) => {
		
		let a = 0;
		let b = 0;

		if(i>=0 && i< n.length-1){
			a = n[i];
			b = n[i + 1];
		}
		return a + b;
	};


	const sub = (n, i) => {
	
		let a = 0;
		let b = 0;

		if(i>=0 && i< n.length-1){
			a = n[i];
			b = n[i + 1];
		}
		return a - b;
	};


	const multi = (n, i) => {
		
		let a = 0;
		let b = 0;

		if(i>=0 && i< n.length-1){
			a = n[i];
			b = n[i + 1];
		}
		return a * b;
	};


	const div = (n, i) => {
	
		let a = 0;
		let b = 0;

		if(i>=0 && i< n.length-1){
			a = n[i];
			b = n[i + 1];
		}
		return a / b;
	};


	const pow = (n, i) => {
	
		let a = 0;
		let b = 0;

		if(i>=0 && i< n.length-1){
			a = n[i];
			b = n[i + 1];
		}
		return Math.pow(a,b);
	};


	const mod = (n, i) => {
	
		let a = 0;
		let b = 0;

		if(i>=0 && i< n.length-1){
			a = n[i];
			b = n[i + 1];
		}
		return a % b;
	};

	let char3 = '-';



	const call = (sym, num, i) =>{

		switch(sym){
			case '+': return add(num, i);
			case '-': return sub(num, i);
			case '*': return multi(num, i);
			case '/': return div(num, i);
			case '^': return pow(num, i);
			case '%': return mod(num, i);

			default: return console.log("invalid symbol");
		}
	}

	const next = (text) =>{
		let test = {
			'^': -1,
			'%': -1,
			'*': -1,
			'/': -1,
			'+': -1,
			'-': -1
		}

		for(let i = text.length-1; i>=0; i--){
			for(let i2 in test){
				if(text[i] === i2){
					test[i2] = i;
				}
			}
		}

		for(let i in test){
			if(test[i] > -1){
				return test[i];
			}
		}

		return 'undefined';
	}

	const printt = (num, sym) =>{
		
		for(let i = 0; i < num.length; i++){
			if(i<num.length-1){
				document.write(num[i] + " <bnsp> " + sym[i] + " <bnsp> ");
			}else{
				document.write(num[i] + " <bnsp> ");
			}
		}
		document.write("<br/>");
	}

	const printt2 = (num, sym) =>{
		
		for(let i = 0; i < num.length; i++){
			if(i<num.length-1){
				document.write(num[i] + " <bnsp> " + sym[i] + " <bnsp> ");
			}else{
				document.write("<br>" + num[i] + " <bnsp> ");
			}	
		}
	}

	//Recorrer todo el arreglo ts

	let z = 0;
	let pos = 0;
	let n2 = [0];
	n2.pop();


	for(let z in ts){
		
		z = parseInt(z);
		pos = 0;

		for(let i = 0; i < n.length; i++){
			n2[i] = n[i];
		}
		
		//if(z === 0)
			printt(n2,ts[z]);
		
		console.log("------------------");
		do{
			console.log(n2);
			console.log(ts[z]);
			pos = next(ts[z]);
			n2[pos] = call(ts[z][pos],n2,pos);

			ts[z] = popt(ts[z],pos);
			n2 = popn(n2,pos+1);

			if(z<10)
				printt(n2,ts[z]);
			else
				printt2(n2,ts[z]);
				
		}while(ts[z].length > 0);
		
		if(z<10)
			document.write(" <br/><br/>");
		else
		document.write(" <br> <br>");
	}
	//document.write(". <br> </br> <br> </br>TENGO ES UN ERROR DE IMPRESIÓN, PORQUE LOS NÚMEROS ESTÁN BIEN");

	text = "";
	n = [""];
	s = [""];
	neg = [0];
	char = "";
	document.close();
}