#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

/*
    to-do:
*/

#define STUDENTS_FILE "students.dat"
#define MAX_STUDENTS 101
#define FILE_ERROR_MSG "File could not be opened. Aborting...\n"

typedef struct student {
    int student_number;
    char full_name[50];
    int midterm_grade;
    int assignment_grade;
    int final_grade;
    double gpa;
} STUDENT;

// prototypes
void initialize_students_file();
void add_student();
void print_students(STUDENT students[], int size);
void search_student_by_number(int student_number);

STUDENT create_student();
void read_all_students_to_array(STUDENT students[], int size);
void print_student_data(STUDENT student);
void print_student_header();
int int_is_in_range(int num, int min, int max);
void print_main_menu();
void print_edit_delete_menu();

int main()
{
    initialize_students_file();

    while (1)
    {
        print_main_menu();

        int choice;
        printf("Enter your choice: ");
        scanf("%d", &choice);
        while (getchar() != '\n');

        switch (choice)
        {
        case 1:
            add_student();
            break;
        case 2:
        {
            STUDENT students[MAX_STUDENTS];
            print_students(students, MAX_STUDENTS);
            break;
        }
        case 3:
            printf("Enter student number to search: ");
            int search_number;
            scanf("%d", &search_number);
            while (getchar() != '\n');

            search_student_by_number(search_number);
            print_edit_delete_menu();

            int editDeleteChoice;
            printf("Enter your choice: ");
            scanf("%d", &editDeleteChoice);
            while (getchar() != '\n');

            switch (editDeleteChoice)
            {
            case 1:
                // Edit student
                break;
            case 2:
                // Delete student
                break;
            case 3:
                // Return to main menu
                break;
            
            default:
                break;
            }

            break;
        case 4:
            printf("Exiting...\n");
            return 0;
        default:
            printf("Invalid choice. Please try again.\n");
            break;
        }
        puts("");
    }
}

// main functions
void initialize_students_file()
{
    FILE *fp = fopen(STUDENTS_FILE, "wb");
    if (fp == NULL)
    {
        printf(FILE_ERROR_MSG);
        return;
    }

    STUDENT defaultStudent = {0, "", 0, 0, 0, 0.0};
    STUDENT students[MAX_STUDENTS];
    for (int i = 0; i < MAX_STUDENTS; i++)
    {
        students[i] = defaultStudent;
    }
    fwrite(students, sizeof(STUDENT), MAX_STUDENTS, fp);

    fclose(fp);
}

void add_student()
{
    STUDENT student = create_student();
    STUDENT placeholderStudent;

    FILE *fp = fopen(STUDENTS_FILE, "rb+");
    if (fp == NULL)
    {
        printf(FILE_ERROR_MSG);
        return;
    }

    int index = student.student_number;

    // check if the student number already exists
    fseek(fp, index * sizeof(STUDENT), SEEK_SET);
    fread(&placeholderStudent, sizeof(STUDENT), 1, fp);
    if (placeholderStudent.student_number != 0)
    {
        printf("Student number %d already exists. Aborting...\n", student.student_number);
        fclose(fp);
        return;
    }

    // write the new student to the file
    fseek(fp, index * sizeof(STUDENT), SEEK_SET);
    printf("Adding student with number %d...\n", student.student_number);
    fwrite(&student, sizeof(STUDENT), 1, fp);

    fclose(fp);
}

void print_students(STUDENT students[], int size)
{
    read_all_students_to_array(students, size);

    print_student_header();
    for (int i = 0; i < size; i++)
    {
        if (students[i].student_number != 0)
        {
            print_student_data(students[i]);
        }
    }
}

void search_student_by_number(int search_number)
{
    FILE *fp = fopen(STUDENTS_FILE, "rb");
    if (fp == NULL)
    {
        printf(FILE_ERROR_MSG);
        return;
    }

    // find student by number
    STUDENT student;
    int searchIndex = search_number % MAX_STUDENTS;
    fseek(fp, searchIndex * sizeof(STUDENT), SEEK_SET);
    fread(&student, sizeof(STUDENT), 1, fp);

    // check if the student number matches the search number
    if (student.student_number == search_number)
    {
        print_student_header();
        print_student_data(student);
    }
    else
    {
        printf("Student with number %d not found. Aborting...\n", search_number);
    }
    puts("");
}

// helper functions
STUDENT create_student()
{
    STUDENT abortStudent = {0, "", 0, 0, 0, 0.0};
    STUDENT newStudent;

    // student number
    printf("Enter student number (between 1-100): ");
    scanf("%d", &newStudent.student_number);
    while (getchar() != '\n');
    if (!int_is_in_range(newStudent.student_number, 1, 100))
    {
        printf("Invalid student number. Aborting...\n");
        return abortStudent;
    }

    // full name
    int maxNameLength = sizeof(newStudent.full_name) / sizeof(newStudent.full_name[0]);
    printf("Enter full name (Max %d characters): ", maxNameLength);
    fgets(newStudent.full_name, sizeof(newStudent.full_name), stdin);
    int nameLength = strlen(newStudent.full_name);
    if (nameLength > 0 && newStudent.full_name[nameLength - 1] == '\n')
    {
        newStudent.full_name[nameLength - 1] = '\0';
    }    

    // midterm grade
    printf("Enter midterm grade (between 0-100): ");
    scanf("%d", &newStudent.midterm_grade);
    while (getchar() != '\n');
    if (!int_is_in_range(newStudent.midterm_grade, 0, 100))
    {
        printf("Invalid midterm grade. Aborting...\n");
        return abortStudent;
    }

    // assignment grade
    printf("Enter assignment grade (between 0-100): ");
    scanf("%d", &newStudent.assignment_grade);
    while (getchar() != '\n');
    if (!int_is_in_range(newStudent.assignment_grade, 0, 100))
    {
        printf("Invalid assignment grade. Aborting...\n");
        return abortStudent;
    }

    // final grade
    printf("Enter final grade (between 0-100): ");
    scanf("%d", &newStudent.final_grade);
    while (getchar() != '\n');
    if (!int_is_in_range(newStudent.final_grade, 0, 100))
    {
        printf("Invalid final grade. Aborting...\n");
        return abortStudent;
    }

    // GPA calculation
    newStudent.gpa = (newStudent.midterm_grade * 0.4) + (newStudent.assignment_grade * 0.1) + (newStudent.final_grade * 0.5);

    return newStudent;
}

void read_all_students_to_array(STUDENT students[], int size)
{
    FILE *fp = fopen(STUDENTS_FILE, "rb");
    if (fp == NULL)
    {
        printf(FILE_ERROR_MSG);
        return;
    }

    fread(students, sizeof(STUDENT), size, fp);

    fclose(fp);
}

void print_student_header()
{
    printf("%-20s %-50s %-20s %-20s %-20s %-20s\n",
           "Student Number", "Full Name", "Midterm Grade", "Assignment Grade", "Final Grade", "GPA");
}

void print_student_data(STUDENT student)
{
    printf("%-20d %-50s %-20d %-20d %-20d %-20.2lf\n",
           student.student_number,
           student.full_name,
           student.midterm_grade,
           student.assignment_grade,
           student.final_grade,
           student.gpa);
}

int int_is_in_range(int num, int min, int max)
{
    if (num < min || num > max)
    {
        return 0;
    }
    return 1;
}

void print_main_menu()
{
    printf("Add Student (1)\n");
    printf("Print Students (2)\n");
    printf("Search Student (3)\n");
    printf("Exit (4)\n");
}

void print_edit_delete_menu()
{
    printf("Edit Student (1)\n");
    printf("Delete Student (2)\n");
    printf("Return to Main Menu (3)\n");
}
