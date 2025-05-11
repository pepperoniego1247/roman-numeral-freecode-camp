const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertNumberToRoman = (number) => {
    const values = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let numberRoman = "";

    Object.keys(values).forEach((key) => {
        while (number >= values[key]) {
            numberRoman += key;
            number -= values[key];
        }
    });

    return numberRoman;
}

button.addEventListener("click", () => {
    const { value } = input;

    if (value < 1 || !value || value > 3999) {
        output.classList.add("container-error");
        output.innerText = value > 3999 ? "Please enter a number less than or equal to 3999" : `Please enter a ${!value ? "valid number" : "number greater than or equal to 1."}` 
        return;
    }

    output.classList.remove("container-error");
    output.innerHTML = convertNumberToRoman(value);
})