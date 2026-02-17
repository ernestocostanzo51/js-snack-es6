//snack1




//contenitore gruppo bici
let bici = [
    {
        nome:"liberty",
        peso:654,
    },
    {
        nome:"sh125",
        peso:670,
    },
    {
        nome:"halrey",
        peso:512,
    },
    {
        nome:"xmax",
        peso:873,
    },
]

//prende in cosiderazione il primo object e le sue proprietà dentro l'arrey
let pesoMin = bici[0]
//ciclo per analizzare i pesi tra i vari object partando dal primo
for(i=0; i<bici.length; i++){
       if (bici[i].peso < pesoMin.peso) {
        pesoMin = bici[i];
    }
        
    }




console.log(`la bici con peso minore è ${pesoMin.nome} con un peso di ${pesoMin.peso}`)


//snack2