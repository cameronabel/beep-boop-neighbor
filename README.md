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