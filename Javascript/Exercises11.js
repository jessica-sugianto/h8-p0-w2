function balikKata(kata) {
  // you can only write your code here!
    var count = kata.length-1
    var temp = ''
    for(; count >= 0; count--){
        temp += kata[count]
    }
    return temp
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS