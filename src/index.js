const ones = ["","one","two","three","four","five","six","seven","eight","nine"];
const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
const teens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];

module.exports = function toReadable(num) {
    if (num == 0) return "zero";

    if (num > 99) return `${ones[Math.floor(num / 100)]} hundred ${convertTens(num % 100)}`.trimRight();
    else return convertTens(num);
};

function convertTens(num) {
    if (num < 10) return ones[num];
    else if (num >= 10 && num < 20) return teens[num - 10];
    else return `${tens[Math.floor(num / 10)]} ${ones[num % 10]}`.trimRight();
}
