export class Score {

    userScore = 0;
    computerScore = 0;

    userScoreElement;
    computerScoreElement;

    constructor(userScoreElement, computerScoreElement) {
        this.userScoreElement = userScoreElement;
        this.computerScoreElement = computerScoreElement;
    }

    addScoreToUser() {
        this.userScore += 1;
        this.userScoreElement.innerHTML = `User: (${this.userScore})`
    }

    addScoreToComputer() {
        this.computerScore += 1;
        this.computerScoreElement.innerHTML = `Computer: (${this.computerScore})`
    }
}