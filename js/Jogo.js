class Jogo{
    
constructor(){
    this.jogador1;
    this.jogador2;
    this.baralho;
	this.cartarecebe;
	this.cartadoa;
	this.pontosj1 = 0;
	this.pontosj2 = 0;
	this.apostamin = 20;
	this.apostaj1;
	this.apostaj2;
	this.c_apostas = 0;
	this.carta1;
	this.carta2;
	this.carta3;
	this.carta4;
	this.carta5;
	this.pote = 0;
	this.empate = false;
}

iniciarRodada(){
	this.pontosj1 = 0;
	this.pontosj2 = 0;
    this.baralho.iniciarBaralho();
    this.jogador1.carta1 = this.baralho.sortear();
    this.jogador2.carta1 = this.baralho.sortear();
	this.carta1 = this.baralho.sortear();
	this.carta2 = this.baralho.sortear();  
	this.carta3 = this.baralho.sortear();
    this.carta4 = this.baralho.sortear();
	this.carta5 = this.baralho.sortear(); 
	console.log("carta do jogador 1: "+this.jogador1.carta1.tipo);
	console.log("carta do jogador 2: "+this.jogador2.carta1.tipo);
	console.log("carta comunitária 1: "+this.carta1.tipo);
	console.log("carta comunitária 2: "+this.carta2.tipo);
	console.log("carta comunitária 3: "+this.carta3.tipo);
	console.log("carta comunitária 4: "+this.carta4.tipo);
	console.log("carta comunitária 5: "+this.carta5.tipo);
}

calcularVencedor(){

switch (this.atributoAtual) {
  
case 'Doar':
	this.cartarecebe = this.carta1;
	this.podeDoar();
	this.cartarecebe = this.carta2;
	this.podeDoar();
	this.cartarecebe = this.carta3;
	this.podeDoar();
	this.cartarecebe = this.carta4;
	this.podeDoar();
	this.cartarecebe = this.carta5;
	this.podeDoar();
break;
  
case 'Receber':
	this.cartadoa = this.carta1;
	this.podeReceber();
	this.cartadoa = this.carta2;
	this.podeReceber();
	this.cartadoa = this.carta3;
	this.podeReceber();
	this.cartadoa = this.carta4;
	this.podeReceber();
	this.cartadoa = this.carta5;
	this.podeReceber();
break;
};

console.log("pontosj1: " + this.pontosj1 + "  pontosj2: " +this.pontosj2);

if(this.pontosj1 > this.pontosj2){
	return this.jogador1.nome;
}else;

if(this.pontosj1 < this.pontosj2){
	return this.jogador2.nome;
}else;

if(this.pontosj1 == this.pontosj2){
	this.empate = true;
};

}

podeDoar(cartarecebe){
	
	if(this.jogador1.carta1.doar.includes(this.cartarecebe.tipo) == true){
	this.pontosj1++;
};
	if(this.jogador2.carta1.doar.includes(this.cartarecebe.tipo) == true){
	this.pontosj2++;
};
}

podeReceber(cartadoa){
	
	if(this.jogador1.carta1.receber.includes(this.cartadoa.tipo) == true){
	this.pontosj1++;
};
	if(this.jogador2.carta1.receber.includes(this.cartadoa.tipo) == true){
	this.pontosj2++;
};

}
}