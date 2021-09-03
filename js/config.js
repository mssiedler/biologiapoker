var game;
window.onload = function() {
 
    // game configuration object
    let gameConfig = {
 
        // resolution and scale mode
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 1200,
            height: 800
        },

        audio: {
            disableWebAudio: true
        },
 
       // game background color
       backgroundColor: 0x000000,
 
       // scenes used by the game
       scene: [CarregandoGame, TelaInicial, PlayGame, TIns]
       
    };
 
    // game constructor
    game = new Phaser.Game(gameConfig);
 
    // pure javascript to give focus to the page/frame
    window.focus()
}

/*
FTP Username 	epiz_24666359
FTP Password 	
kd1ydN4o4xYxh1X
FTP Hostname 	ftpupload.net
FTP Port (optional) 	21
*/
