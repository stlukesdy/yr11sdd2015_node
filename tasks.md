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

Write a program that reads in words from a text file, one word per line. If the word contains the letter ‘a’, the first part of the output should be ‘a-yes’ otherwise is should be ‘a-no’. The second part of the output should count how many times the letter e occurs. Every word has only lowercase letters.

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>text<br>many<br>reads<br>weather</td>
    <td>a-no e-1<br>a-yes e-0<br>a-yes e-1<br>a-yes e-2</td>
  </tr>
</table>

[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task11/program.js)

## Task 12

Convert strings to camel case. Write a program that reads in rows of words from a text file. Each row convert to camel case.

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>Foo Bar</td>
    <td>fooBar</td>
  </tr>
  <tr>
    <td>convert to camel case</td>
    <td>convertToCamelCase</td>
  </tr>
</table>


[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task12/program.js)

## Task 13

The 24-hour system of time uses four digits to represent a time to the nearest minute between midnight (0000) and one minute to midnight on the same day (2359). Write a program that reads 4-digit numbers from a text file and checks if the number is a valid time.

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>0509</td>
    <td>Valid time</td>
  </tr>
  <tr>
    <td>0661</td>
    <td>Invalid time</td>
  </tr>
  <tr>
    <td>2609</td>
    <td>Invalid time</td>
  </tr>
  <tr>
    <td>1125</td>
    <td>Valid time</td>
  </tr>
</table>

[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task13/program.js)


## Task 14

The 24-hour system of time uses four digits to represent a time to the nearest minute between midnight (0000) and one minute to midnight on the same day (2359). Write a program that reads 4-digit numbers from a text file and checks if the time is before or after noon.

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>0509</td>
    <td>AM</td>
  </tr>
  <tr>
    <td>0621</td>
    <td>AM</td>
  </tr>
  <tr>
    <td>2309</td>
    <td>PM</td>
  </tr>
  <tr>
    <td>1259</td>
    <td>AM</td>
  </tr>
  <tr>
    <td>1300</td>
    <td>PM</td>
  </tr>
</table>

## Task 15

Write a program that generates a simple index from a list of words from a text file, one per line. The index shows each word and the position of the word in the list, counting from 1. 

Example:
<table>
	<tr>
	<th>Input</th>
	<th>Output</th>
	</tr>

<tr><td><pre>Time<br>
flies<br>
like<br>
an<br>
arrow<br>
but<br>
fruit<br>
flies<br>
like<br>
a<br>
banana<br>
Groucho<br>
Marx<br>
</pre></td
><td><pre>
Time 1<br>
flies 2<br>
like 3<br>
an 4<br>
arrow 5<br>
but 6<br>
fruit 7<br>
flies 8<br>
like 9<br>
a 10<br>
banana 11<br>
Groucho 12<br>
Marx 13<br>
</pre></td></tr>

</table>

[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task15/program.js)

## Task 16

First: same task as task 15 i.e. write a program that generates a simple index from a list of words from a text file, one per line. The index shows each word and the position of the word in the list, counting from 1. 

New in this task: the index should be sorted by word (case-insensitive). Use [array sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

Example:
<table>
	<tr>
	<th>Input</th>
	<th>Output</th>
	</tr>

<tr><td><pre>Time<br>
flies<br>
like<br>
an<br>
arrow<br>
but<br>
fruit<br>
flies<br>
like<br>
a<br>
banana<br>
Groucho<br>
Marx<br>
</pre></td><td><pre>
a 10<br>
an 4<br>
arrow 5<br>
banana 11<br>
but 6<br>
flies 2<br>
flies 8<br>
fruit 7<br>
Groucho 12<br>
like 3<br>
like 9<br>
Marx 13<br>
Time 1<br>
</pre></td></tr>

</table>


[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task16/program.js)

## Task 17

First: same task as task 16 i.e. write a program that generates a simple index from a list of words from a text file, one per line. The index shows each word and the position of the word in the list, counting from 1. The index should be sorted by word (case-insensitive).

New in this task: It must be formatted so the word and the position are separated by dots and the last character of the position number is in a fixed column.

Example:
<table>
	<tr>
	<th>Input</th>
	<th>Output</th>
	</tr>

<tr><td><pre>Time<br>
flies<br>
like<br>
an<br>
arrow<br>
but<br>
fruit<br>
flies<br>
like<br>
a<br>
banana<br>
Groucho<br>
Marx<br>
</pre></td><td><pre>
a............10<br>
an............4<br>
arrow.........5<br>
banana.......11<br>
but...........6<br>
flies.........2<br>
flies.........8<br>
fruit.........7<br>
Groucho......12<br>
like..........3<br>
like..........9<br>
Marx.........13<br>
Time..........1<br>
</pre></td></tr>

</table>

[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task17/program.js)

## Task 18

Convert distances given in km, mm or cm into m. The program should read from the console and stop if -1 is the input:

Example:
<table>
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
<tr><td><pre>1m</pre></td><td><pre>1m</pre></td></tr>
<tr><td><pre>1km</pre></td><td><pre>1000m</pre></td></tr>
<tr><td><pre>34cm</pre></td><td><pre>0.34m</pre></td></tr>
<tr><td><pre>900mm</pre></td><td><pre>0.9m</pre></td></tr>
<tr><td><pre>33km</pre></td><td><pre>33000m</pre></td></tr> 
<tr><td><pre>-1</pre></td></tr> 

</table>

[Sample solution] (https://github.com/stlukesdy/yr11sdd2015_node/blob/master/teacher/node_tasks/task18/program.js)
