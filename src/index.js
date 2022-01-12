module.exports = function toReadable(number) {
    let answer;
    let units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let dozens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let hundreds = "hundred";

    if (number >= 0 || number < 20) {
        answer = units[number];
    }
    if (
        number > 10 &&
        String(number).length == 2 &&
        String(number).endsWith("0")
    ) {
        answer = dozens[number / 10 - 2];
    }

    if (
        number > 20 &&
        String(number).length == 2 &&
        !String(number).endsWith("0")
    ) {
        answer =
            dozens[Math.floor(number / 10) - 2] +
            " " +
            units[number % (Math.floor(number / 10) * 10)];
    }

    if (String(number).length == 3 && number % 100 < 10) {
        answer =
            units[Math.floor(number / 100)] +
            " " +
            hundreds +
            " " +
            units[number % 100];
    }
    if (String(number).length == 3 && number % 100 == 10) {
        answer =
            units[Math.floor(number / 100)] + " " + hundreds + " " + units[10];
    }

    if (String(number).length == 3 && number % 100 > 10 && number % 100 < 20) {
        answer =
            units[Math.floor(number / 100)] +
            " " +
            hundreds +
            " " +
            units[number % 100];
    }

    if (
        String(number).length == 3 &&
        number % 100 >= 20 &&
        (number % 100) % 10 === 0
    ) {
        answer =
            units[Math.floor(number / 100)] +
            " " +
            hundreds +
            " " +
            dozens[Number(String(number)[1]) - 2];
    }

    if (
        String(number).length == 3 &&
        number % 100 >= 20 &&
        (number % 100) % 10
    ) {
        answer =
            units[Math.floor(number / 100)] +
            " " +
            hundreds +
            " " +
            dozens[Number(String(number)[1]) - 2] +
            " " +
            units[Number(String(number)[2])];
    }
    if (String(number).length == 3 && String(number).endsWith("00")) {
        answer = units[number / 100] + " " + hundreds;
    }

    return answer;
};
