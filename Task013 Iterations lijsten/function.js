 //Loops kan je inzetten om te itereren over lijsten 9zoals Arrays)
let color= ["yellow", "blue", "red", "orange"];

let IndexLength= color.length-1;

const colorPrinter= function(){
   while (IndexLength>=0){
      console.log(color[IndexLength]);
      IndexLength--
   }
};


const colorPrinter2= function(){
   for (i=0; i<=IndexLength; i++){
      console.log(color[i]);
   }
};

colorPrinter2();
colorPrinter();


//Met array methods krijg je hetzelfde resultaat met  1 code rij:
color.forEach(element => console.log(element));

//hieronder de antwoorden op de vragen.
//1. veel meer dan met de forEach methode
//2: 1
//3: array methode is makkelijker leesbaarder en minder foutgevoelig.
//4: gebruik de for in method met bracket notation:
//for let propt in obj{ console.log(propt +":" +obj[propt]);}