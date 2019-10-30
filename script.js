//write first method
function sleep_in(weekday,vacation) {
    return weekday;
}

//write second method
function monkey_trouble(param1, param2) {
    return param1;
}

//add 2-10 below here...
function string_times(word, nums){
    var x= word
    if (nums > 0) {
        for (var i = 1; i < nums; i++) {
            x = word + x
        }
    }else{
        x = "";
    }
    return (x);
}

function front_times(str,int){
    var str2=str.substring(0,3);
    var z = str2
    if (int > 0) {
        for (var i = 1; i < int; i++) {
            z = z + str2;
        }
    }else{
        z= "";
    }

    return (z);
}

function string_bits (words){
    var st = "";
    for (var i= 0; i < words.length; i = i+2){
        if( i % 2 == 0) {
            st += words.substring(i, i+1)
        }

    }

    return (st);
}

function caughtSpeeding (speed,birthday){
    var noTicket=0;
    var ticket= 1;
    var bigticket= 2;
    if ( birthday == true){
        speed = speed - 5;
    }
    if(speed <= 60 ){
        return noTicket;
    }
    if ( speed >= 61 && speed<=80 ){
        return ticket;

    }
    if( 81 <= speed){
        return bigticket ;
    }

}

function fizz_buzz(int) {

    if (int % 3 == 0 && int % 5 == 0) {

        return "FizzBuzz";

    }
    if (int % 3 == 0) {
        return "Fizz";

    }

    if( int % 5 == 0){
        return "Buzz";
    }

    return (int + "!");

}

function teaParty(tea, candy){
    var good = 1;
    var bad = 0;
    var great = 2;
    if (tea < 5 || candy < 5){
        return bad;
    }

    if (( tea / 2 ) >= candy || (candy / 2) >= tea ){
        return great;
    }

    return good;
}

function blackjack(int1, int2){
    if ((int1 > int2) && ( int1 <= 21)){
        return int1;
    }

    if ((int1 > 21) && (int2 > 21)){
        return 0;
    }

    if ((int2 > int1) && (int2 <=21)){
        return int2;
    }

    if ( (int1 > 21) && (int2 <= 21)){
        return int2;
    }

    if((int2 > 21) && (int1 <= 21)){
        return int1;
    }
}


function loneSum(a, b, c){

    if ((a == b) && ( a != c))  {
        return c
    }

    if ((a == c) && (a != b)){
        return b
    }

    if ((b == c) && (b != a)){
        return a;
    }

    if ( (a == b) && (b == c)){
        return "0";
    }
    abc = a + b + c
    return abc;
}








//We are having a party with amounts of tea
// and candy. Return the int outcome of the party encoded as
// 0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are
// at least 5. However, if either tea or candy is at least double the amount
// of the other one, the party is great (2). However, in all cases, if
// either tea or candy is less than 5, the party is always bad (0).


//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);


    //test third method etc,

    document.getElementById("output").innerHTML += string_times(true, false);
    document.getElementById("output").innerHTML += front_times(true, false);
    document.getElementById("output").innerHTML += string_bits(true, false);
    document.getElementById("output").innerHTML += caughtSpeeding(true, false);
    document.getElementById("output").innerHTML += fizz_buzz(true, false);
    document.getElementById("output").innerHTML += teaParty(true, false);
    document.getElementById("output").innerHTML += blackjack(true, false);
    document.getElementById("output").innerHTML += loneSum(true, false);

}

