/* FizzBuzz
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

// #1 Stampare numeri da 1 a 100
// #2 Per multipli di 3 stampa "Fizz" , per multipli di 5 "Buzz", per numeri che sono multipli di 3 e 5 "FizzBuzz"

for (var i = 1; i <= 100; i++) {
    
    var number = i;

    if ((i % 3 == 0) && (i % 5 == 0)) {
        number = "FizzBuzz";
    } else if (i % 3 == 0) {
        number = "Fizz";
    } else if (i % 5 == 0) {
        number = "Buzz";
    }

    console.log(number);
    document.getElementById("result").innerHTML += number + "<br>";
    
}