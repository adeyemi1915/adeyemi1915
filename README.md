MY Grade Calculator
This is a simple JavaScript function named calculateGrade that calculates a student's grade based on their marks. The function takes in a parameter marks, representing the student's score.

Functionality
The calculateGrade function determines the grade based on the following criteria:

If the marks value is greater than 100 or less than 0, it returns an "invalid input" message.
If the marks value is greater than 79, it assigns the grade "A" to the grade variable and returns it.
If the marks value is between 60 and 79 (inclusive), it assigns the grade "B" to the grade variable and returns it.
If the marks value is between 51 and 59 (inclusive), it assigns the grade "C" to the grade variable and returns it.
If the marks value is between 41 and 50 (inclusive), it assigns the grade "D" to the grade variable and returns it.
For any other marks value, it assigns the grade "E" to the grade variable and returns it.
Usage
To calculate a student's grade, call the calculateGrade function and pass the student's marks as an argument. The function will return the corresponding grade.

Modecafe Speed Calculator
This is a JavaScript function named calculateModecafe that calculates the number of Modecafe points based on a given speed. The function helps determine if a driver's license will be suspended due to exceeding the speed limit.

Functionality
The calculateModecafe function uses the following constants:

speedLimit represents the speed limit (set to 80 km/h).
KmPerModecafe represents the number of kilometers over the speed limit that correspond to one Modecafe point (set to 5 km/h).
maxModecafe represents the maximum number of Modecafe points allowed before a license suspension (set to 20 points).
Usage
To calculate the number of Modecafe points based on a given speed, call the calculateModecafe function and pass the speed as an argument. The function will determine if the speed is within the acceptable limits or if the license will be suspended.

Net Salary Calculator
This is a JavaScript program that calculates the net salary based on the basic salary, allowance, and various deductions such as NSSF, NHIF, and PAYE.

Usage
To use the program, follow these steps:

The program prompts for the basic salary and allowance by displaying input dialog boxes. Enter the appropriate values when prompted.

The program performs input validation to ensure that valid numbers are entered. If invalid input is detected, an alert message is displayed, and the program terminates.

The program calculates the NSSF deduction based on the provided basic salary using a fixed rate of 6%.

The program calculates the NHIF deduction based on the provided basic salary using the NHIF rates specified in the code.

The program calculates the PAYE (Pay As You Earn) deduction based on the provided basic salary using the specified tax brackets and rates.

The program calculates the gross salary by adding the basic salary and allowance.

The program calculates the net salary by subtracting the NSSF, NHIF, and PAYE deductions from the gross salary.

The calculated net salary is displayed in an alert message.

Function Breakdown
calculateNetSalary(): This function takes user input for basic salary and allowance, performs input validation, calculates the deductions and net salary, and displays the result in an alert message.

calculateNSSF(basicsalary): This function calculates the NSSF (National Social Security Fund) deduction based on the provided basic salary using a fixed rate of 6%.

calculateNHIF(basicsalary): This function calculates the NHIF (National Hospital Insurance Fund) deduction based on the provided basic salary using the specified rates and brackets.

calculatePAYE(basicsalary): This function calculates the PAYE (Pay As You Earn) deduction based on the provided basic salary using the specified tax brackets and rates.

