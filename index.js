// Create a function name = sentenceSplitter
function sentenceSplitter(sentence) {
    var returnSentence = sentence.split(" ");
    for (var i = 0; i < returnSentence.length; i++) {
        if (returnSentence[i].includes(".")) {
            returnSentence[i] = returnSentence[i].replace(".", "");
        }
    }
    return returnSentence;
}
var result = sentenceSplitter("This is an example sentence.");
console.log(result); // ["This", "is", "an", "example", "sentence"]
var result2 = sentenceSplitter("");
console.log(result2); // []
// Create a function name = combineToSentence
function combineToSentence() {
    // let formWords = "";
    // words.forEach((word) => formWords += word + " ");
    var words = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        words[_i] = arguments[_i];
    }
    var formWords = words.join(" ");
    return formWords;
}
var result3 = combineToSentence("This", "is", "an", "example", "sentence");
console.log(result3); // This is an example sentence
var result4 = combineToSentence();
console.log(result4); // (nothing)
