#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

/*
    to-do:
*/

#define STUDENTS_FILE "students.dat"
#define MAX_STUDENTS 101

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

STUDENT create_student();
void read_all_students_to_array(STUDENT students[], int size);
int int_is_in_range(int num, int min, int max);

int main()
{
    initialize_students_file();

    add_student();
    add_student();

    STUDENT students[MAX_STUDENTS];
    print_students(students, MAX_STUDENTS);
}

// main functions
void initialize_students_file()
{
    FILE *fp = fopen(STUDENTS_FILE, "wb");
    if (fp == NULL)
    {
        printf("Error\n");
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
        printf("Error\n");
        return;
    }

    int index = student.student_number % MAX_STUDENTS;

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

    printf("%-20s %-50s %-20s %-20s %-20s %-20s\n",
           "Student Number", "Full Name", "Midterm Grade", "Assignment Grade", "Final Grade", "GPA");
    for (int i = 0; i < size; i++)
    {
        if (students[i].student_number != 0)
        {
            printf("%-20d %-50s %-20d %-20d %-20d %-20.2lf\n",
                   students[i].student_number,
                   students[i].full_name,
                   students[i].midterm_grade,
                   students[i].assignment_grade,
                   students[i].final_grade,
                   students[i].gpa);
        }
    }
}

// helper functions
STUDENT create_student()
{
    STUDENT newStudent = {0, "", 0, 0, 0, 0.0};

    do
    { // student number
        if (!int_is_in_range(newStudent.student_number, 0, 100))
        {
            printf("Invalid student number. Please try again.\n");
        }
        printf("Enter student number (between 0-100): ");
        scanf("%d", &newStudent.student_number);
    } while (!int_is_in_range(newStudent.student_number, 0, 100));
    getchar();

    // full name
    int maxNameLength = sizeof(newStudent.full_name) / sizeof(newStudent.full_name[0]);
    printf("Enter full name (Max %d characters): ", maxNameLength);
    fgets(newStudent.full_name, sizeof(newStudent.full_name), stdin);
    int nameLength = strlen(newStudent.full_name);
    if (nameLength > 0 && newStudent.full_name[nameLength - 1] == '\n')
    {
        newStudent.full_name[nameLength - 1] = '\0';
    }

    do
    { // midterm grade
        if (!int_is_in_range(newStudent.midterm_grade, 0, 100))
        {
            printf("Invalid midterm grade. Please try again.\n");
        }
        printf("Enter midterm grade (between 0-100): ");
        scanf("%d", &newStudent.midterm_grade);
    } while (!int_is_in_range(newStudent.midterm_grade, 0, 100));

    do
    { // assignment grade
        if (!int_is_in_range(newStudent.assignment_grade, 0, 100))
        {
            printf("Invalid assignment grade. Please try again.\n");
        }
        printf("Enter assignment grade (between 0-100): ");
        scanf("%d", &newStudent.assignment_grade);
    } while (!int_is_in_range(newStudent.assignment_grade, 0, 100));

    do
    { // final grade
        if (!int_is_in_range(newStudent.final_grade, 0, 100))
        {
            printf("Invalid final grade. Please try again.\n");
        }
        printf("Enter final grade (between 0-100): ");
        scanf("%d", &newStudent.final_grade);
    } while (!int_is_in_range(newStudent.final_grade, 0, 100));

    // GPA calculation
    newStudent.gpa = (newStudent.midterm_grade * 0.4) + (newStudent.assignment_grade * 0.1) + (newStudent.final_grade * 0.5);

    return newStudent;
}

void read_all_students_to_array(STUDENT students[], int size)
{
    FILE *fp = fopen(STUDENTS_FILE, "rb");
    if (fp == NULL)
    {
        printf("Error\n");
        return;
    }

    fread(students, sizeof(STUDENT), size, fp);

    fclose(fp);
}

int int_is_in_range(int num, int min, int max)
{
    if (num < min || num > max)
    {
        return 0;
    }
    return 1;
}

