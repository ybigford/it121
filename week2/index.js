

function generate (word) {
    let v = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
     let output = " ";

    // for (i = 0; i = word.length; i++) {

    // first letter is vowel
    if (v.includes(word[0])) {

        return output = word + "way";   
    }

    // first letter is not a vowel
    else {
        for (let i = 0; i = word.length; i++) {

            if (!v.includes(word[0]))  {
                let output1 = word.slice(0, 1);
                let output2 = word.slice(1);
        
            return output = output2 + output1 + "ay"; 

        }    
        
    else {
        for (let i = 0; i = word.length; i+=2) {
            if (!v.includes(word[0]) && !v.includes(word[1])) {
                let output1 = word.slice(0, 2);
                let output2 = word.slice(2);
    
            return output = output2 + output1 + "ay"; 

        } 
        }
        }
    }

    
}
}


// display Pig Latin on html
let userWord = () => {
    let displayPig = document.getElementById("word").value;
    let display = generate(displayPig);
    document.getElementById("output").innerText = display;   
}


// non-arrow-function version 
// function userWord() {
//     let displayPig = document.getElementById("word").value;
//     let display = generate(displayPig);
//     return document.getElementById("output").innerText = display;
    
// }

