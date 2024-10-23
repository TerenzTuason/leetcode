### Problem

Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\
An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

### Analysis

To validate if a string of brackets is balanced, an empty stack array is created, and a mapping of closing to opening brackets is defined. As the string is iterated character by character, each opening bracket is pushed onto the stack. For closing brackets, the stack is checked: if empty or if the top element does not match the corresponding opening bracket, the function returns false. The function concludes by checking if the stack is empty; if not, it returns false, ensuring all opened brackets were properly closed.
\
\
**Case 1**\
&nbsp;&nbsp;&nbsp; **Input:** s = "()"\
&nbsp;&nbsp;&nbsp; **Output:** true

**Case 2**\
&nbsp;&nbsp;&nbsp; **Input:** s = "()[]{}"\
&nbsp;&nbsp;&nbsp; **Output:** true

**Case 3**\
&nbsp;&nbsp;&nbsp; **Input:** s = "(]"\
&nbsp;&nbsp;&nbsp; **Output:** false