package gameJava;

import gameJava.score.SchereSteinPapierScore;
import gameJava.utils.TerminalColorStrings;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class SchereSteinPapier {
    private String userInput;
    private String computerOutput;
    private Scanner ssp;
    private ArrayList<String> SchereSteinPapierArray = new ArrayList<>();
    private SchereSteinPapierScore score = new SchereSteinPapierScore();
    private String doYouWantToPlayAgain;

    public void run() {
        userChoice();
        automaticComputerChoice();
        determineWinner();
        playAgain();
    }

    private void userChoice() {
        ssp = new Scanner(System.in);
        System.out.println("Gib ein Schere ✂️ | Stein \uD83E\uDEA8 | Papier \uD83D\uDCDD");
        userInput = ssp.nextLine();

        switch (userInput.toLowerCase()) {
            case "schere" -> userInput = "Schere ✂️";
            case "stein" -> userInput = "Stein \uD83E\uDEA8";
            case "papier" -> userInput = "Papier \uD83D\uDCDD";
        }
        System.out.println("Der " + TerminalColorStrings.ANSI_BLUE + "User" + TerminalColorStrings.ANSI_RESET + " hat " + userInput + " ausgewählt.\n");
    }

    private void automaticComputerChoice() {
        this.addComputerChoicesToArray();
        Collections.shuffle(SchereSteinPapierArray);

        computerOutput = SchereSteinPapierArray.get(0);

        System.out.println("Der" + TerminalColorStrings.ANSI_GREEN + " Computer" + TerminalColorStrings.ANSI_RESET + " hat " + computerOutput + " ausgewählt.\n");

    }

    private void addComputerChoicesToArray() {
        SchereSteinPapierArray.add("Schere ✂️");
        SchereSteinPapierArray.add("Stein \uD83E\uDEA8");
        SchereSteinPapierArray.add("Papier \uD83D\uDCDD");
    }

    private void determineWinner() {
        System.out.println(TerminalColorStrings.ANSI_BLUE + "User:" + TerminalColorStrings.ANSI_RESET + " (" + userInput + ") vs" + TerminalColorStrings.ANSI_GREEN + " Computer: " + TerminalColorStrings.ANSI_RESET + "(" + computerOutput + ")\n");
        this.winLogic(userInput, computerOutput);
    }

    public void playAgain() {
        System.out.println(TerminalColorStrings.ANSI_YELLOW + "Willst du noch einmal spielen?" + TerminalColorStrings.ANSI_RESET);
        doYouWantToPlayAgain = ssp.nextLine();
        if (doYouWantToPlayAgain.contains("Ja") || doYouWantToPlayAgain.contains("ja")) {
            run();
        } else {
            System.out.println("Shuting down game... Score wird zurückgesetzt...");
        }

    }


    public String winLogic(String userInput, String computerOutput) {
        //          Schere verliert gegen stein, Schere gewinnt gegen Papier
        //        Stein gewinnt gegen schere verliert aber gegen papier
        //      papier verliert gegen schere aber gewinnt gegen stein

        if (userInput.equals(computerOutput)) {
            System.out.println("Niemand hat gewonnen.. \uD83E\uDD1D");
            return "Niemand";
        }
        if (userInput.equals("Schere ✂️") && !computerOutput.equals("Stein \uD83E\uDEA8")) {
            System.out.println(TerminalColorStrings.ANSI_YELLOW + "(GEWINNER) " + TerminalColorStrings.ANSI_BLUE + "User:" + TerminalColorStrings.ANSI_RESET + "(" + userInput + ")" + " hat gewonnen.");
            score.addScoreToUser();
            return "User";
        }

        if (userInput.equals("Stein \uD83E\uDEA8") && !computerOutput.equals("Papier \uD83D\uDCDD")) {
            System.out.println(TerminalColorStrings.ANSI_YELLOW + "(GEWINNER) " + TerminalColorStrings.ANSI_BLUE + "User:" + TerminalColorStrings.ANSI_RESET + "(" + userInput + ")" + " hat gewonnen.");
            score.addScoreToUser();
            return "User";
        }

        if (userInput.equals("Papier \uD83D\uDCDD") && !computerOutput.equals("Schere ✂️")) {
            System.out.println(TerminalColorStrings.ANSI_YELLOW + "(GEWINNER) " + TerminalColorStrings.ANSI_BLUE + "User:" + TerminalColorStrings.ANSI_RESET + "(" + userInput + ")" + " hat gewonnen.");
            score.addScoreToUser();

        } else {
            System.out.println(TerminalColorStrings.ANSI_YELLOW + "(GEWINNER) " + TerminalColorStrings.ANSI_GREEN + "Computer:" + TerminalColorStrings.ANSI_RESET + "(" + computerOutput + ")" + " hat gewonnen.");
            score.addScoreToComputer();
        }
        return "Computer";
    }
}