//ARQUIVO PARA TESTAR O JOGO FUNCIONANDO
//DEVE APARECER EM UM ALERT QUEM GANHOU A RODADA
//OU SE DEU EMPATE

var jogo = new Jogo();

var baralho = new Baralho();

var jogador1 = new Jogador();
jogador1.nome = "joaozinho";
var jogador2 = new Jogador();
jogador2.nome = "mariazinha";

//var cc = new Mesa();

jogo.iniciarJogo(jogador1, jogador2, baralho, cc);

jogo.iniciarRodada();
//jogo.enviarCartasComunitariasPr();
//jogo.definirAtributo("a");
//jogo.enviarCartasComunitariasSr();

//alert(jogo.calcularVencedor());