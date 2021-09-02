const airline = `TAP Air Portugal`

const toNameCase = function(str) {
    str = str.toLocaleLowerCase();
    const strCorrect = str[0].toUpperCase() + str.slice(1)

    console.log(strCorrect)
}

toNameCase('jOnas')