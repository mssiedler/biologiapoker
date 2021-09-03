class PlayGame extends Phaser.Scene{

constructor()
{
    super("PlayGame")
this.carta1p1;
this.carta1p2;
this.cartac1;
this.cartac2;
this.cartac3;
this.cartac4;
this.cartac5;
this.bp;
this.fj1;
this.fj2;
this.TValorDaAposta
this.vpote;
this.desistir;
this.apostartd;
this.apostar;
this.mais;
this.menos;
this.timedEvent;
this.legenda;
this.atrdoar;
this.atrreceber;
this.valor;
this.jogo = new Jogo();
}

preload ()
    {
}

create (){

this.add.image(600, 400, 'background');

this.bp = this.add.image(1120,90, 'bp');
this.bp.setInteractive();
this.bp.on('pointerup', this.direcionarIns,this);

this.cartac1 = this.add.image(430, 350,'baralho',0);
this.cartac2 = this.add.image(520, 350,'baralho',0);
this.cartac3 = this.add.image(610, 350, 'baralho',0);
this.cartac4 = this.add.image(700, 350,'baralho',0);
this.cartac5 = this.add.image(790, 350, 'baralho',0);

this.carta1p1 = this.add.image(280,470,'baralho',0);
this.carta1p2 = this.add.image(940, 470, 'baralho',0);

this.add.image(605, 690, 'tab-b');

this.banqueiro = this.add.image(600, 180, 'banqueiro');
this.jogador1 = this.add.image(120, 460, 'player1');
this.jogador2 = this.add.image(1080, 460, 'player2');

this.desistir = this.add.image(460, 690, 'desistir');
this.desistir.setInteractive();
this.desistir.on('pointerup', this.desistirDaRodada,this);
this.desistir.on('pointerup', this.clickButton,this);

this.apostartd = this.add.image(750, 690, 'apostar-tudo');
this.apostartd.setInteractive();
this.apostartd.on('pointerup', this.apostarTudo,this);

this.apostar = this.add.image(605, 715, 'apostar');
this.apostar.setInteractive();
this.apostar.on('pointerup', this.realizarAposta,this);

this.mais = this.add.image(650,670, 'mais');
this.mais.setInteractive();
this.mais.on('pointerup', this.aumentarAposta,this);

this.menos = this.add.image(565,670, 'menos');
this.menos.setInteractive();
this.menos.on('pointerup', this.diminuirAposta,this);

this.add.image(130, 140, 'sac');

this.atrdoar = this.add.image(130,140, 'doar-op2');
this.atrdoar.setInteractive();
this.atrdoar.on('pointerup', this.doar,this);

this.atrreceber = this.add.image(132,180, 'receber-op2');
this.atrreceber.setInteractive();
this.atrreceber.on('pointerup', this.receber,this);

this.jogo.jogador1 = new Jogador();
this.jogo.jogador1.nome = "JOGADOR 1";
this.jogo.jogador2 = new Jogador();
this.jogo.jogador2.nome = "JOGADOR 2";
this.jogo.baralho = new Baralho();
this.jogo.iniciarRodada();

this.jogo.apostaj1 = this.jogo.apostamin;

this.TValorDaAposta = this.add.text(595,660,this.jogo.apostaj1,{font: "25px Arial"});
this.vpote = this.add.text(590,520,this.jogo.pote,{font: "25px Arial"});
this.fj1 = this.add.text(90,550,this.jogo.jogador1.fichas,{font: "25px Arial"});
this.fj2 = this.add.text(1050,550,this.jogo.jogador2.fichas,{font: "25px Arial"});
this.legenda = this.add.image(600, 70, 'jogador1-l');

this.fj1f = this.add.image(70, 568, 'f');
this.fj2f = this.add.image(1030, 568, 'f');

this.poteIm = this.add.image(600,490, 'pote');
}

clickButton(){
this.audio = new Audio();
this.audio.src = "assets/a.mp3";
this.audio.play();
};

fichasS(){
	this.audio2 = new Audio();
	this.audio2.src = "assets/b.mp3";
	this.audio2.play();
};

vencer(){
	this.audio2 = new Audio();
	this.audio2.src = "assets/c.mp3";
	this.audio2.play();
};

aumentarAposta(){
	this.jogo.apostaj1+=15;
	this.TValorDaAposta.setText(this.jogo.apostaj1);
};

diminuirAposta(){
	if(this.jogo.apostaj1 > 20){
		this.jogo.apostaj1-=15;
		this.TValorDaAposta.setText(this.jogo.apostaj1);
	}
};

desistirDaRodada(){
this.esperarJogada();
this.clickButton();
this.legenda.setTexture('j1d');
this.jogo.jogador2.fichas += this.jogo.pote;
this.fj1.setText(this.jogo.jogador1.fichas);
this.fj2.setText(this.jogo.jogador2.fichas);
this.jogo.pote = 0;
this.vpote.setText(this.jogo.pote);
this.timedEvent = this.time.delayedCall(1000, this.iniciarR, [], this);
console.log("jogador 1 desistiu");
}

apostarTudo(){
this.esperarJogada();
this.jogo.apostaj1 = this.jogo.jogador1.fichas;
this.realizarAposta();
this.fichasS();
};

realizarAposta(){

this.fichasS();
this.jogo.pote+= this.jogo.apostaj1;
this.vpote.setText(this.jogo.pote);
this.jogo.jogador1.fichas-= this.jogo.apostaj1;
this.fj1.setText(this.jogo.jogador1.fichas);
this.jogo.apostamin = this.jogo.apostaj1;
console.log(this.jogo.apostaj1+ "        "+this.jogo.jogador1.fichas);
this.jogo.apostaj1 = 0;

this.esperarJogada();

this.jogo.c_apostas++;

if(this.jogo.c_apostas == 1){
this.carta1p1.setTexture('baralho', this.jogo.jogador1.carta1.imagem);
}else;

this.legenda.setTexture('jogador2-l'); 
this.timedEvent = this.time.delayedCall(3000, this.apComputador, [], this);
};

apComputador(){
	this.verificando();

	if(this.jogo.c_apostas == 1){
		if(this.jogo.apostamin <= 200 || this.jogo.jogador2.carta1.tipo == "O-" || this.jogo.jogador2.carta1.tipo == "AB+"){
			this.aJ2();	
			this.legenda.setTexture('esc-l');
			this.atrdoar.setTexture('doar-op');
			this.atrreceber.setTexture('receber-op');
		}else{
			this.J2Desiste();
		}
	};

	if(this.jogo.c_apostas == 2){
		if(this.jogo.apostamin <= 200 || (this.jogo.atributoAtual == 'Doar' && this.jogo.jogador2.carta1.tipo == "O-") || (this.jogo.atributoAtual == 'Receber' && this.jogo.jogador2.carta1.tipo == "AB+")){
			this.aJ2();	
			this.terceiraRodada();
		}else{
			this.J2Desiste();
		}
	};

	if(this.jogo.c_apostas == 3){
		this.aJ2();	
		this.mostrarCartas();
	};

	if(this.jogo.jogador1.fichas == 0 || this.jogo.jogador2.fichas == 0){
		this.mostrarCartasDaMesa();
	};
};

verificando(){
	if(this.jogo.jogador1.fichas == 0 || this.jogo.jogador2.fichas == 0){
		this.cartac4.setTexture('baralho', this.jogo.carta4.imagem);
    		this.cartac5.setTexture('baralho', this.jogo.carta5.imagem);
		this.mostrarCartas();
	};
};

aJ2(){
	this.jogo.apostaj2 = this.jogo.apostamin; 
	this.jogo.jogador2.fichas-= this.jogo.apostaj2;
	console.log(this.jogo.apostaj2+ "        "+this.jogo.jogador2.fichas);
	this.fj2.setText(this.jogo.jogador2.fichas);
	this.jogo.pote += this.jogo.apostaj2;
	this.vpote.setText(this.jogo.pote);
	this.fichasS();
	console.log("jogador 2 apostou");
}

J2Desiste(){
	this.clickButton();
	this.legenda.setTexture('j2d');
	this.jogo.jogador1.fichas += this.jogo.pote;
	this.fj1.setText(this.jogo.jogador1.fichas);
	this.fj2.setText(this.jogo.jogador2.fichas);
	this.jogo.pote = 0 ;
	this.vpote.setText(this.jogo.pote);
	this.timedEvent = this.time.delayedCall(2000, this.iniciarR, [], this);
	console.log("jogador 2 desistiu");
}

esperarJogada(){
	this.desistir.setTexture('desistir2');
	this.apostar.setTexture('apostar2');
	this.apostartd.setTexture('apostar-tudo2');
	this.TValorDaAposta.setText(this.jogo.apostaj1);
};

segRodada(){
	this.cartac1.setTexture('baralho', this.jogo.carta1.imagem);
    this.cartac2.setTexture('baralho', this.jogo.carta2.imagem);
    this.cartac3.setTexture('baralho', this.jogo.carta3.imagem);
};

terceiraRodada(){
	this.liberadoAP();
    this.cartac4.setTexture('baralho', this.jogo.carta4.imagem);
    this.cartac5.setTexture('baralho', this.jogo.carta5.imagem);
};

mostrarCartas(){
    this.carta1p2.setTexture('baralho', this.jogo.jogador2.carta1.imagem);
	this.legenda.setTexture('calculandov-l');
	this.timedEvent = this.time.delayedCall(3000, this.definirVencedor, [], this);
};

mostrarCartasDaMesa(){
	this.cartac1.setTexture('baralho', this.jogo.carta1.imagem);
    this.cartac2.setTexture('baralho', this.jogo.carta2.imagem);
    this.cartac3.setTexture('baralho', this.jogo.carta3.imagem);
    this.cartac4.setTexture('baralho', this.jogo.carta4.imagem);
    this.cartac5.setTexture('baralho', this.jogo.carta5.imagem);
    this.mostrarCartas();
};

definirVencedor(){
	this.vencedor = this.jogo.calcularVencedor();

	if(this.vencedor == this.jogo.jogador1.nome){
		this.vencer();
		this.legenda.setTexture('j1v-l');
		this.jogo.jogador1.fichas += this.jogo.pote;
	};
	
	if(this.vencedor == this.jogo.jogador2.nome){
		this.legenda.setTexture('j2v-l');
		this.jogo.jogador2.fichas += this.jogo.pote;
	};

	if(this.jogo.empate == true){
	this.valor = this.jogo.pote /2;
	this.jogo.jogador1.fichas += this.valor;
	this.jogo.jogador2.fichas += this.valor;
	this.legenda.setTexture('empate-l');
};

	this.fj1.setText(this.jogo.jogador1.fichas);
	this.fj2.setText(this.jogo.jogador2.fichas);
	this.jogo.pote = 0;
	this.vpote.setText(this.jogo.pote);
	this.timedEvent = this.time.delayedCall(6000, this.iniciarR, [], this);

	if(this.jogo.jogador1.fichas == 0 || this.jogo.jogador2.fichas == 0){
		this.timedEvent = this.time.delayedCall(1000, this.fimDeJogo, [], this);
	};
};

doar(){
    this.jogo.atributoAtual = "Doar";
	console.log("doar");
	this.alteraTela();
};

receber(){
	this.jogo.atributoAtual = "Receber";
	console.log("receber");
	this.alteraTela();
};

alteraTela(){
	if(this.jogo.atributoAtual == "Receber"){
		this.atrdoar.setTexture('doar-op2');
	}else{
	this.atrreceber.setTexture('receber-op2');
	};
	
	this.liberadoAP();
	this.segRodada();
	this.clickButton();
};

liberadoAP(){
	this.legenda.setTexture('jogador1-l'); 
	this.desistir.setTexture('desistir');
	this.apostar.setTexture('apostar');
	this.apostartd.setTexture('apostar-tudo');
	this.jogo.apostaj1 = 20;
	this.TValorDaAposta.setText(this.jogo.apostaj1);
};

iniciarR(){
	this.jogo.c_apostas = 0;
	this.jogo.apostamin = 20;
	this.jogo.iniciarRodada();
	this.carta1p1.setTexture('baralho',0);
	this.carta1p2.setTexture('baralho',0); 
	this.cartac1.setTexture('baralho',0);
    this.cartac2.setTexture('baralho',0);
    this.cartac3.setTexture('baralho',0);
	this.cartac4.setTexture('baralho',0);
    this.cartac5.setTexture('baralho',0);
	this.liberadoAP();
};




direcionarIns(){
        game.scene.start('TIns');
};

fimDeJogo(){
console.log("find")
};

update(){
};
};

// fileuri - false