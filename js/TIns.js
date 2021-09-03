class TIns extends Phaser.Scene{

constructor()
{
    super("TIns")
    this.inst;
    this.t = 1;
}

    preload ()
    {
        
    }

    create ()
    {
    
    this.inst = this.add.image(600, 400, 'inst'); 

	/*this.voltar = this.add.image(1080,80, 'setav');
	this.voltar.setInteractive();
    this.voltar.on('pointerup', this.pj );

    this.cartass = this.add.image(270,580, 'baralho', this.i);
    this.infoss = this.add.image(650,580, 'comp', this.i);

    this.volt = this.add.image(510,670,'seta1')
    this.volt.setInteractive();
    this.volt.on('pointerup', this.cartaAnt,this);

    this.prox = this.add.image(700,670,'seta2')
    this.prox.setInteractive();
    this.prox.on('pointerup', this.proximaCarta,this);
    */

    this.prox = this.add.image(1120,570,'seta')
    this.prox.setInteractive();
    this.prox.on('pointerup', this.inst2,this);

    this.voltar = this.add.image(80,570,'seta2')
    this.voltar.setInteractive();
    this.voltar.on('pointerup', this.anterior,this);

    };

    inst2(){
        this.inst.setTexture('composicao');
        this.t = 2;
        this.prox.visible = false; 
    };

    anterior(){
        if(this.t == 1){
            this.t = 0;
            this.inst.visible = false; 
            this.prox.visible = false; 
            this.voltar.visible = false; 
        }
        if(this.t == 2){
            this.inst.setTexture('inst');
            this.prox.visible = true; 
            this.t = 1;
        }
    };

    /*

    cartaAnt(){
        this.i--;
        this.cartass.setTexture('baralho',this.i);

        if(this.i == 1){
            this.i = 8;
        }
    };

    proximaCarta(){
        this.i++;
        this.cartass.setTexture('baralho',this.i);
        
        if(this.i == 8){
            this.i = 1;
        }
    };

    */

    
    


    update ()
    {
     
    }
}