// Create a function name = sentenceSplitter
function sentenceSplitter(sentence: any): any {
    let returnSentence = sentence.split(" ");

    for (let i = 0; i < returnSentence.length; i++) {
        if (returnSentence[i].includes(".")) {
          returnSentence[i] =  returnSentence[i].replace(".", "");
        }

    }

    return returnSentence;
}

let result = sentenceSplitter("This is an example sentence.");
console.log(result) // ["This", "is", "an", "example", "sentence"]
let result2 = sentenceSplitter("");
console.log(result2); // []


// Create a function name = combineToSentence
function combineToSentence(...words: string[]): string {
    // let formWords = "";
    // words.forEach((word) => formWords += word + " ");

    let formWords = words.join(" ")

    return formWords;

}

let result3 = combineToSentence("This", "is", "an", "example", "sentence");
console.log(result3); // This is an example sentence
let result4 = combineToSentence();
console.log(result4);   // (nothing)












