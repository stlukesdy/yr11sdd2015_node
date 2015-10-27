# Node tasks

## Task 1

1. Write a program that reads in two numbers from the console and adds them up. Print the result to the console.

[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task1/program.js)

## Task 2

1. Write a js program that creates a sequence of numbers according to the following pseudocode:

<img src="teacher/images/task2.jpg" >

[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task2/program.js)
  

## Task 3

Write a js program for the following algorithm, use better variable names.

<img src="teacher/images/task3.jpg" >

[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task3/program.js)
  


## Task 4

Create a js function that takes 'HighIndex' as input parameter and creates an Array that has every value set to its index.

[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task4/program.js)
  

## Task 5

Write a program that reads a text file containing strings made up of zeroes and ones. The program counts the number of ones per line.


Example:

| Input         | Output        | 
|---------------|---------------| 
| 0011          | 0011 - 2      | 
| 0101010       | 0101010 - 3   | 
| 01            | 01 - 1        | 
| 00000000      | 00000000 - 0  | 
| 1111          | 1111 - 4      |

[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task5/program.js)

## Task 6

Write a program that reads a text file containing lines of two numbers and a plus character in the middle. The program should add the two numbers and print the result.

Example:

| Input         | Output        | 
|---------------|---------------| 
| 1+1           | 1+1=2         | 
| 99+2          | 99+2=101      | 
| 1000+0        | 1000+0=1000   | 

[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task6/program.js)

## Task 7

Write a program that reads in two strings from the console and prints out the string that is alphabetically higher (e.g. B is higher than A)

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>abc</br>def</td>
    <td>def</td>
  </tr>
  <tr>
    <td>A</br>a</td>
    <td>a</td>
  </tr>
  <tr>
    <td>node</br>javascript</td>
    <td>node</td>
  </tr>
</table>

[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task7/program.js)

## Task 8

Write a program that reads a text file containing lines of digits. For each line the program should add up all digits.

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>11</td>
    <td>2</td>
  </tr>
  <tr>
    <td>10000</td>
    <td>1</td>
  </tr>
  <tr>
    <td>123</td>
    <td>6</td>
  </tr>
</table>

[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task8/program.js)


## Task 9

Write a program that reads in a line of digits from the console. The program should print out the highest digit.

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>0000</td>
    <td>0</td>
  </tr>
  <tr>
    <td>10000</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1230</td>
    <td>3</td>
  </tr>
  <tr>
    <td>43216</td>
    <td>6</td>
  </tr>
</table>

[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task9/program.js)


## Task 10

Write a program that reads in a two lines from the console. The first input should be an integer indicating a length `l`. The second input should be a word. If the length of the word is less or equal to l then the output should be 'OK'. If the length of the word is greater than `l` then the output should be 'TOO LONG'.

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>5<br>cat</td>
    <td>OK</td>
  </tr>
  <tr>
    <td>5<br>kangaroo</td>
    <td>TOO LONG</td>
  </tr>
</table>


[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task10/program.js)


## Task 11

Write a program that reads in words from a text file, one word per line. If the word contains the letter ‘a’, the first part of the output should be ‘a-yes’ otherwise is should be ‘a-no’. The second part of the output should count how many e’s the word contains: e-<count>. Every word has only lowercase letters.

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>text<br>many<br><br>reads<br>weather</td>
    <td>a-no e-1<br>a-yes e-0<br>a-yes e-1<br>a-yes e-2</td>
  </tr>
</table>

