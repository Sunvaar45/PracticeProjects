#include <stdio.h>
#include <stdlib.h>

int main()
{
    int ch;
    int digitValue;
    int idIsValid;
    int digitCounter;
    int firstTenSum;

    while (1) {
        idIsValid = 1;
        digitCounter = 0;
        firstTenSum = 0;

        printf("Enter a Turkish ID Number (-1 to exit!): ");
        while (ch = getchar()) {
            if (ch == '\n') break; // quit when "enter" is pressed
            digitCounter++;
            digitValue = ch - 48;

            if (digitCounter <= 10) {
                firstTenSum += digitValue;
            }

            if (digitCounter == 1 && digitValue == 0) idIsValid = 0; // first digit non zero
            if (digitCounter == 11) {
                if (digitValue % 2 != 0) idIsValid = 0; // last digit even
                if ((firstTenSum % 10) != digitValue) idIsValid = 0; // last digit is the sum of first ten digit
            }
        }
        if (digitCounter != 11) idIsValid = 0;

        if (!idIsValid) {
            printf("Invalid Turkish ID Number!\n");
        }
        else {
            // specialtyChecker func
            printf("todo\n");
        }
    }
}
