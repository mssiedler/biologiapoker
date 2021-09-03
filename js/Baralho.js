class Baralho{
    constructor(){
        this.carta;
    	
}

sortear(){
        var i;
        i = Math.trunc((Math.random() * this.cartas.length));
        var carta = this.cartas[i];
        this.cartas.splice(i,1);
        return carta;
    }



iniciarBaralho(){

this.cartas =  new Array(); 

var carta1 = new Carta();
carta1.imagem = 1;
carta1.tipo = "O-";
carta1.doar = new Array("A+", "A-", "B+","B-","AB-","AB+","O+","O-");
carta1.receber = new Array("O-"); 
this.cartas.push(carta1);

var carta2 = new Carta();
carta2.imagem = 2;
carta2.tipo = "O+";
carta2.doar = new Array("A+", "B+","AB+","O+");
carta2.receber = new Array("O+", "O-"); 
this.cartas.push(carta2); 

var carta3 = new Carta();
carta3.imagem = 3;
carta3.tipo = "B-";
carta3.doar = new Array("B+", "B-","AB+","AB-");
carta3.receber = new Array("B-", "AB-");
this.cartas.push(carta3);

var carta4 = new Carta();
carta4.imagem = 4;
carta4.tipo = "B+";
carta4.doar = new Array("B+","AB+");
carta4.receber = new Array("B+","B-","O+", "O-");
this.cartas.push(carta4);

var carta5 = new Carta();
carta5.imagem = 5;
carta5.tipo = "A-";
carta5.doar = new Array("A+", "A-","AB+","AB-");
carta5.receber = new Array("A-", "O-");
this.cartas.push(carta5);

var carta6 = new Carta();
carta6.imagem = 6;
carta6.tipo = "A+";
carta6.doar = new Array("A+", "AB+");
carta6.receber = new Array("A+","A-","O+", "O-");
this.cartas.push(carta6);

var carta7 = new Carta();
carta7.imagem = 7;
carta7.tipo = "AB-";
carta7.doar = new Array("AB-","AB+");
carta7.receber = new Array("A-","B-","AB-", "O-");
this.cartas.push(carta7);

var carta8 = new Carta();
carta8.imagem = 8;
carta8.tipo = "AB+";
carta8.doar = new Array("AB+");
carta8.receber = new Array("A+", "A-", "B+","B-","AB-","AB+","O+","O-");
this.cartas.push(carta8);
}

}