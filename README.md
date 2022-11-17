# TDD Elements

## Describe:  numAnalyzer()

#### Test: It should return a string containing the number that was provided.
**Code:**\
const num = 5;\
numAnalyzer(num);\
**Expected Output: "5"**

#### Test: When passed a number containing the digit 3, it should return "Won't you be my neighbor?".
**Code:**\
const num = 3;\
numAnalyzer(num);\
**Expected Output: "Won't you be my neighbor?"**

#### Test: When passed a number containing the digit 2, it should return "Boop!".
**Code:**\
const num = 2;\
numAnalyzer(num);\
**Expected Output: "Boop!"**

#### Test: When passed a number containing the digit 1, it should return "Boop!".
**Code:**\
const num = 1;\
numAnalyzer(num);\
**Expected Output: "Beep!"**

#### Test: When passed a number containing the digits 1 and 3, it should prioritize 3 and return "Won't you be my neighbor?".
**Code:**\
const num = 13;\
numAnalyzer(num);\
**Expected Output: "Won't you be my neighbor?"**

#### Test: When passed a number containing the digits 2 and 3, it should prioritize 3 and return "Won't you be my neighbor?".
**Code:**\
const num = 23;\
numAnalyzer(num);\
**Expected Output: "Won't you be my neighbor?"**

#### Test: When passed a number containing the digits 1 and 2, it should prioritize 2 and return "Boop!".
**Code:**\
const num = 12;\
numAnalyzer(num);\
**Expected Output: "Boop"**

## Describe:  generateResponses()

#### Test: It should return an array of numbers from 0 to the input number (inclusive).
**Code:**\
const num = 4;
generateResponses(num);
**Expected Output: [0, 1, 2, 3, 4]**