
const value = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(Num) {
    let answer = "";

    for (let i = 0; Num; i++) {
        while (Num >= value[i]) {
            answer += roman[i];
            Num -= value[i];
        }
    }
    return answer;
};

console.log(intToRoman(5));