package gameJava.score;

import gameJava.utils.TerminalColorStrings;


public class SchereSteinPapierScore {

    private int userScore = 0;
    private int computerScore = 0;

    public void addScoreToUser() {
        userScore += 1;
        System.out.println(TerminalColorStrings.ANSI_BLUE + "User" + TerminalColorStrings.ANSI_RESET + " score: (" + userScore + ")" + TerminalColorStrings.ANSI_GREEN + " Computer" + TerminalColorStrings.ANSI_RESET + " score (" + computerScore + ")");
    }

    public void addScoreToComputer() {
        computerScore += 1;
        System.out.println(TerminalColorStrings.ANSI_GREEN + "Computer" + TerminalColorStrings.ANSI_RESET + " score (" + computerScore + ")" + TerminalColorStrings.ANSI_BLUE + " User" + TerminalColorStrings.ANSI_RESET + " score: (" + userScore + ")");
    }


}
