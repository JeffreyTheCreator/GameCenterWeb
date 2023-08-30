export class GameLogic {

    userInput;
    userInputElement;
    resultMessage;

    constructor(userInput, userInputElement, resultMessage) {
    this.userInput = userInput;
    this.userInputElement = userInputElement;
    this.resultMessage = resultMessage;
    }

    userChoice(userInput) {
        this.userInputElement.innerHTML = `Number: (<strong>${userInput})</strong>`;
    }

    validate(userInput) {
    if (userInput > 100 || userInput < 0) {
        this.calculationOutput("Die Nummer <strong>" + userInput + " </strong>liegt nicht zwischen 1-100!");
        throw new Error("Die Nummer " + userInput + " liegt nicht zwischen 1-100!");
}

}
    calculationOutput(message) {
        this.resultMessage.innerHTML = `${message}`;
    }

    noDivision(userInput) {
        if (userInput % 3 !== 0 && userInput % 5 !== 0) {
            this.calculationOutput("Die Zahl <strong>" + userInput + "</strong> konnte nicht dividiert werden durch 3 oder 5.");
        }
    }

    calculate(userInput) {
        this.validate(userInput);
        this.noDivision(userInput);
        let output;
        if (userInput % 3 === 0 && userInput % 5 === 0) {
            output = "<strong>FizzBuzz</strong>"
            this.calculationOutput(output);
            return "FizzBuzz";
        }

        if (userInput % 3 === 0) {
            output = "<strong>Fizz</strong>"
            this.calculationOutput(output);
            return "Fizz";
        }

        if (userInput % 5 === 0) {
            output = "<strong>Buzz<strong>";
            this.calculationOutput(output);
            return "Buzz";
        }
        return userInput;
    }
}