class TelaInicial extends Phaser.Scene{

constructor()
{
    super("TelaInicial")
    
}

    preload ()
    {

    }

    create ()
    {
        this.add.image(600, 400, 'bg-h');

        var start = this.add.image(600,400, 'play');
        start.setInteractive();
        start.on('pointerup', this.direcionarGame,this);

    }

    direcionarGame(){
        game.scene.start('PlayGame');
    }

    direcionarIns(){
        game.scene.start('TIns');
    }

    update ()
    {

    }
}