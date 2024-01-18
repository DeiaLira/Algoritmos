function getMinSubsequences(inputStr) {
    let contSubsequence = 1; // Sempre haverá pelo menos 1 string

    for (let i = 1; i < inputStr.length; i++) {
        if (inputStr[i] === inputStr[i - 1]) {
            contSubsequence++;
        }
    }

    return contSubsequence;
}

const inputStr = "11001010";
console.log(getMinSubsequences(inputStr));
