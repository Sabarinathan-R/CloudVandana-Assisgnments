function ReverseEveryWords(sentence) {
    let reversedSentence = '';
    let wordStart = 0;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ' || i === sentence.length - 1) {
            const word = (i === sentence.length - 1) ? sentence.substring(wordStart, i + 1) : sentence.substring(wordStart, i);
            
            let reversedWord = '';
            for (let j = word.length - 1; j >= 0; j--) {
                reversedWord += word[j];
            }

            reversedSentence += reversedWord;

            if (i !== sentence.length - 1) {
                reversedSentence += ' ';
            }

            wordStart = i + 1;
        }
    }

    return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedSentence = ReverseEveryWords(inputSentence);
console.log(reversedSentence);
