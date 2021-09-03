
class CarregandoGame extends Phaser.Scene{

constructor()
{
    super("CarregandoGame")
    
}

    preload ()
    {
       this.load.image('bg-h', 'assets/hemacia.png');
this.load.spritesheet('bar', 'assets/bar.png',{ frameWidth: 400, frameHeight: 59});
this.load.image('ti', 'assets/ti.png');

this.load.image('play', 'assets/play.png');
this.load.image('repeat', 'assets/repeat.png');
this.load.image('sound', 'assets/sound.png');
this.load.image('ccartas', 'assets/ccartas.png');

this.load.image('bg4', 'assets/bg4.png');
this.load.image('background', 'assets/bg2.png');
this.load.image('play', 'assets/play.png');
this.load.image('inst', 'assets/instrucoes1.png');
this.load.image('composicao', 'assets/composicao.png');
this.load.image('bp', 'assets/icon-int.png');

this.load.image('tab-b', 'assets/tab-b2.png');

this.load.image('t-inf', 'assets/t-inf.jpg');

this.load.image('desistir', 'assets/desistir.png');
this.load.image('apostar', 'assets/apostar.png');
this.load.image('apostar-tudo', 'assets/apostar-tudo.png');

this.load.image('desistir2', 'assets/desistir2.png');
this.load.image('apostar2', 'assets/apostar2.png');
this.load.image('apostar-tudo2', 'assets/apostar-tudo2.png');

this.load.image('player1', 'assets/icon1.png');
this.load.image('player2', 'assets/icon2.png');

this.load.image('banqueiro', 'assets/banqueiro.png');

this.load.image('nf', 'assets/nf.pNg');

this.load.image('mais', 'assets/mais.png');
this.load.image('menos', 'assets/menos.png');

this.load.image('ficha', 'assets/ficha.png');
this.load.image('pote', 'assets/pote.png');

this.load.image('doar', 'assets/doar.png');
this.load.image('receber', 'assets/receber.png');

this.load.image('seta', 'assets/seta.png');
this.load.image('seta2', 'assets/seta2.png');

this.load.image('sac', 'assets/sac.png');
this.load.image('receber-op', 'assets/receber_op.png');
this.load.image('doar-op', 'assets/doar_op.png');
this.load.image('receber-op2', 'assets/receber_op-c.png');
this.load.image('doar-op2', 'assets/doar_op-c.png');
this.load.image('f', 'assets/f.png');

this.load.image('jogador1-l', 'assets/jogador1-l.png');
this.load.image('jogador2-l', 'assets/jogador2-l.png');
this.load.image('esc-l', 'assets/esc-l.png');
this.load.image('j1d', 'assets/j1desiste.png');
this.load.image('j2d', 'assets/j2desiste.png');
this.load.image('calculandov-l', 'assets/calculandov-l.png');
this.load.image('empate-l', 'assets/empate-l.png');
this.load.image('j1v-l', 'assets/j1v-l.png');
this.load.image('j2v-l', 'assets/j2v-l.png');

this.load.spritesheet('spj1v','assets/sp..j1v.png',{ frameWidth: 760 , frameHeight: 71.2 });

this.load.image('jog1bw', 'assets/jog1bw.png');

this.load.spritesheet('baralho','assets/cartas.png',{ frameWidth: 80, frameHeight: 121 });
this.load.spritesheet('comp','assets/comp.jpg',{ frameWidth: 641, frameHeight: 99.125 });
    }

    create ()
    {
    
        this.add.image(600, 400, 'bg4');
	this.bar = this.add.image(600, 600, 'bar', 0);
	this.carregandoB = 0;
	this.timedEvent;
	this.timedEvent = this.time.delayedCall(1000, this.carregando, [], this);
	this.timedEvent = this.time.delayedCall(3000, this.carregando, [], this);
	this.timedEvent = this.time.delayedCall(4000, this.carregando, [], this);
	this.timedEvent = this.time.delayedCall(5000, this.carregando, [], this);
	this.timedEvent = this.time.delayedCall(7000, this.carregando, [], this);
	this.timedEvent = this.time.delayedCall(8000, this.carregando, [], this);
	
};

carregando(){

if(this.carregandoB == 0){
this.bar.setTexture('bar', 1);
};

if(this.carregandoB == 1){
this.bar.setTexture('bar', 2);
};

if(this.carregandoB == 2){
this.bar.setTexture('bar', 3);
};

if(this.carregandoB == 3){
this.bar.setTexture('bar', 4);
};

if(this.carregandoB == 4){
this.bar.setTexture('bar', 5);
};

if(this.carregandoB == 5){
game.scene.start('PlayGame');
};

this.carregandoB++;

}

    update ()
    {
	
    }

}