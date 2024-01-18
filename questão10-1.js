function getMinSubsequences(inputStr) {
    let subsequence1 = [];
    let subsequence2 = [];
    let subsequence3 = [];
    //let contSubsequence = 1; // Sempre haverá pelo menos 1 string

    for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i] === inputStr[i + 1] && inputStr[i + 1] != subsequence1[subsequence1.length-1] && inputStr[i + 1] != subsequence2[subsequence2.length - 1]) {
            subsequence1.push(inputStr[i]);
            subsequence2.push(inputStr[i + 1]);
        }else if (inputStr[i] != subsequence1[subsequence1.length]) {
            subsequence1.push(inputStr[i + 1]);
        }else if (inputStr[i] != subsequence2[subsequence2.length]) {
            subsequence2.push(inputStr[i + 1]);
        }else{
            subsequence3.push(inputStr[i]);
        }
    }

    return [subsequence1, subsequence2, subsequence3];
}

const inputStr = "101001";
console.log(getMinSubsequences(inputStr));