
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