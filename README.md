# set up locally 
- clone the repo or download it
- go to folder practice
- run command ```npm install ```
- then run ```npm run dev```
**All Set!!**

# Question 1

## Problem Statement: Password Strength Checker and Toggle

You are tasked with creating a password input component with additional functionalities to enhance user experience. The component should include an input box for entering the password, two buttons for toggling password visibility and clearing the input, and a strength indicator component to evaluate the password strength.

## Password Input and Toggle Button:
Create an input box to accept the user's password. Additionally, provide a toggle button labeled "Show" by default. When the user clicks the "Show" button, the password should be displayed in plain text. Upon clicking the button again, change the label to "Hide" and hide the password with asterisks (*).

## Clear Button:
Implement a separate button labeled "Clear" that, when clicked, clears the password input, resetting it to an empty state.

## Password Strength Indicator:
Display a strength indicator component below the password input. The strength indicator should change its color and message based on the password length:

If the password length is below 3, display "Weak" in red color.
If the password length is between 3 and 7 characters, display "Moderate" in orange color.
If the password length is 8 characters or more, display "Strong" in green color.

## Password Criteria Messages:
Below the strength indicator, dynamically display messages indicating the specific criteria that the password should meet. The messages should appear and disappear based on the password input. The criteria messages are as follows:

"Must have at least one uppercase letter (A-Z)"
"Must have at least one lowercase letter (a-z)"
"Must have at least one number"
"Must contain any of the symbols $#_"
"Must be 8 characters long"
If the password meets any of the criteria, hide the corresponding message. If the password does not meet any of the criteria, display the relevant message.
