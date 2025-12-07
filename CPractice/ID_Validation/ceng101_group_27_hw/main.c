#include <stdio.h>
#include <stdlib.h>

int specialtyChecker(int digit1, int digit6, int digit11);
void seasonFinder(void);
void vowelCounter(void);

int main()
{
    int ch, prevCh, digitValue;
    int digit1, digit6, digit11;
    int idIsValid, idIsSpecial;
    int digitCounter;
    int firstTenSum;
    int continueProgram = 1;

    while (continueProgram) {
        idIsValid = 1;
        digitCounter = 0;
        firstTenSum = 0;

        printf("Enter a Turkish ID Number (-1 to exit!): ");
        while (ch = getchar()) {
            if (ch == '\n') break; // quit when "enter" is pressed
            if (ch == '1' && prevCh == '-') { // check for -1 to exit
                continueProgram = 0;
                break;
            }
            digitCounter++;
            digitValue = ch - 48;
            if (digitCounter == 1) digit1 = digitValue;
            if (digitCounter == 6) digit6 = digitValue;
            if (digitCounter == 11) digit11 = digitValue;

            if (digitCounter <= 10) {
                firstTenSum += digitValue;
            }

            if (digitCounter == 1 && digitValue == 0) idIsValid = 0; // first digit non zero
            if (digitCounter == 11) {
                if (digitValue % 2 != 0) idIsValid = 0; // last digit even
                if ((firstTenSum % 10) != digitValue) idIsValid = 0; // last digit is the sum of first 10 digit
            }

            prevCh = ch;
        }
        if (!continueProgram) break;
        if (digitCounter != 11) idIsValid = 0; // 11 digits
        
        if (!idIsValid) {
            printf("Invalid Turkish ID Number!\n");
        }
        else {
            idIsSpecial = specialtyChecker(digit1, digit6, digit11);

            if (idIsSpecial) {
                printf("The entered Turkish ID number is special!\n");
                seasonFinder();
            }
            else {
                printf("The entered Turkish ID number is not special!\n");
                vowelCounter();
            }

            continueProgram = 0;
        }
    }
}

int specialtyChecker(int digit1, int digit6, int digit11) 
{
    int sum = digit1 + digit11;

    int difference;
    if (digit1 > digit11) {
        difference = digit1 - digit11;
    }
    else {
        difference = digit11 - digit1;
    }

    if ((sum * difference) % 10 == digit6) {
        return 1;
    }
    return 0;
}

void seasonFinder(void)
{
    int remainingAttempts = 3, birthDateNumber;
    while (remainingAttempts > 0)
    {
        printf("Enter your birth month between (1-12):\n");
        scanf("%d", &birthDateNumber);
        getchar(); // consume buffer \n
        switch (birthDateNumber)
        {
        case 12:
        case 1:
        case 2:
            printf("You were born in Winter.\n");
            return;
        case 3:
        case 4:
        case 5:
            printf("You were born in Spring.\n");
            return;
        case 6:
        case 7:
        case 8:
            printf("You were born in Summer.\n");
            return;
        case 9:
        case 10:
        case 11:
            printf("You were born in Autumn.\n");
            return;
        default:
            remainingAttempts--;
            printf("Try again. You have %d attempt(s) remaining. ", remainingAttempts);
            break;
        }
    }
}

void vowelCounter(void)
{
    int ch;
    int countA = 0, countE = 0, countI = 0, countO = 0, countU = 0;

    printf("Please enter your full name (with English letters only):\n");

    for (;;) {
        ch = getchar();

        if (ch == '\n')
            break;

        if (ch == 'a' || ch == 'A')
            countA++;
        else if (ch == 'e' || ch == 'E')
            countE++;
        else if (ch == 'i' || ch == 'I')
            countI++;
        else if (ch == 'o' || ch == 'O')
            countO++;
        else if (ch == 'u' || ch == 'U')
            countU++;
    }

    printf("Number of a: %d\n", countA);
    printf("Number of e: %d\n", countE);
    printf("Number of i: %d\n", countI);
    printf("Number of u: %d\n", countU);
    printf("Number of o: %d\n", countO);
}