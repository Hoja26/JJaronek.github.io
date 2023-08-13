//konstuktor objektu
function Karta(barva, hodnota){
    this.barva = barva;
    this.hodnota = hodnota;
}


const s7 = new Karta("Srdce","7");
const k7 = new Karta("Káry","7");
const sK = new Karta("Srdce","Král");//tady vytváříme objekty tak, že pošleme hodnoty do konstruktoru. 
                                     //barva bude "Srdce","Piky","Káry","Kříže" (značeno s p k x)
                                    //hodnota "7","8","9","10","Janek","Dáma","Král","Eso" (7,..,10,J,Q,K,A)


function Valid(jedna,dva){
    //sem pak namrdáme xy klauzulí, že sedma jde jenom na sedmu, že dáma jde všude...
        if(jedna.barva == dva.barva || jedna.hodnota == dva.hodnota ){
           return true;
        }
        else{
            return false
        }
}
document.write(Valid(sK,k7));
document.write(Valid(s7,k7));
document.write(Valid(s7,sK));