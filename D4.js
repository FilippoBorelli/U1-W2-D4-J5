/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function(num1, num2) {
    const para1 = num1
    const para2 = num2
    const result = num1 * num2
    return result
}
console.log(area(12, 11))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const crazySum = function(num1, num2) {
//     const para1 = num1;
//     const para2 = num2;
//     const result = num1 + num2;
//     return result
// }
// if(result === crazySum(8, 9)){
//     result * 3
// }
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (num2) {
    const num1 = 19;
    const diffAssoluta = Math.abs(num1 - num2);
    if (num2 < 19) {
      console.log("differenza se num2 è <19", diffAssoluta);
    } else {
      console.log("differenza assoluta 3 se num2 >19", diffAssoluta * 3);
    }
    return diffAssoluta;
  };

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function(num1){
n = num1
if(20 < num1 < 101){
    console.log(true)
    }
    else{console.log(boundary(400===400))}
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const str = "Oggi abbiamo lavorato tanto";
const word = "EPICODE";
const epify = function (str) {
  let x = word + " , " + str;
  return x;
};
console.log(epify(str));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3end7 = function(num1){
    const result = num1
    return result
}
console.log(check3end7(6) % 3)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString=function(str){
    let x=str.split()
    x=str.reverse()
    x=str.join()

    return x
}

/* ESERCIZIO 8
Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (insertTostring) {
    return insertTostring
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };
  console.log(upperFirst("ciao sono filippo"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = n => {
    const array = []
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 11))
    }
    return array
}