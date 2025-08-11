const questions = {
  OOP: [
    {
      question:
        "Write a program to implement inheritance using Employee and Manager",
      code: `class Employee {
  public:
    void work() {
        cout << "Employee working..." << endl;
    }
};

class Manager : public Employee {
  public:
    void manage() {
        cout << "Manager managing..." << endl;
    }
};`,
      explanation:
        "Manager inherits from Employee. Manager can use both its own methods and Employee’s methods.",
        difficulty: "beginner"
    },
    {
      question: "What is polymorphism in OOP?",
      code: `class Animal {
  public:
    virtual void sound() {
        cout << "Animal sound" << endl;
    }
};

class Dog : public Animal {
  public:
    void sound() override {
        cout << "Dog barks" << endl;
    }
};`,
      explanation:
        "Using virtual functions, the right method runs at runtime (runtime polymorphism).",
    },
    {
      question: "What is Encapsulation?",
      code: `#include <iostream>
using namespace std;

class Student {
private:
    int marks;

public:
    void setMarks(int m) {
        marks = m;
    }

    int getMarks() {
        return marks;
    }
};

int main() {
    Student s;
    s.setMarks(90);
    cout << "Marks: " << s.getMarks() << endl;
    return 0;
}`,
      explanation:
        "Encapsulation means binding data and methods into a single unit (class), and restricting direct access. Here, marks is private, so it can only be accessed via public methods.",
    },

    // BEGIN MERGED OOP QUESTIONS (from extra array)
    {
      question:
        "Write a program to implement encapsulation using a BankAccount class",
      code: `class BankAccount {
  private:
    int balance;

  public:
    void setBalance(int b) {
        balance = b;
    }
    int getBalance() {
        return balance;
    }
};`,
      explanation:
        "Encapsulation is used by keeping 'balance' private and using public methods to access it safely.",
    },
    {
      question: "Write a program to implement constructor overloading",
      code: `class Student {
  public:
    Student() {
        cout << "Default constructor" << endl;
    }

    Student(string name) {
        cout << "Constructor with name: " << name << endl;
    }
};`,
      explanation:
        "Two constructors are defined with different parameters, showing constructor overloading.",
    },
    {
      question: "Write a program to show function overloading",
      code: `class Calculator {
  public:
    int add(int a, int b) {
        return a + b;
    }
    double add(double a, double b) {
        return a + b;
    }
};`,
      explanation:
        "Same function name 'add' is used with different parameter types – this is function overloading.",
    },
    {
      question: "Write a program to implement abstraction using abstract class",
      code: `class Shape {
  public:
    virtual void draw() = 0; // Pure virtual function
};

class Circle : public Shape {
  public:
    void draw() {
        cout << "Drawing Circle" << endl;
    }
};`,
      explanation:
        "Abstract class 'Shape' has a pure virtual function. 'Circle' class implements it.",
    },
    {
      question:
        "Write a program to show runtime polymorphism using virtual function",
      code: `class Animal {
  public:
    virtual void sound() {
        cout << "Animal sound" << endl;
    }
};

class Dog : public Animal {
  public:
    void sound() override {
        cout << "Dog barks" << endl;
    }
};`,
      explanation:
        "Virtual function enables runtime polymorphism – correct function is called using base class pointer.",
    },
    {
      question: "Write a program to show single inheritance",
      code: `class Vehicle {
  public:
    void move() {
        cout << "Vehicle moving" << endl;
    }
};

class Car : public Vehicle {};`,
      explanation:
        "Car inherits from Vehicle, so it can use 'move()' function of base class.",
    },
    {
      question: "Write a program to demonstrate multilevel inheritance",
      code: `class LivingThing {
  public:
    void grow() {
        cout << "Growing..." << endl;
    }
};

class Animal : public LivingThing {
  public:
    void breathe() {
        cout << "Breathing..." << endl;
    }
};

class Human : public Animal {
  public:
    void speak() {
        cout << "Speaking..." << endl;
    }
};`,
      explanation:
        "Human inherits from Animal, and Animal inherits from LivingThing – forming multilevel inheritance.",
    },
    {
      question: "Write a program to implement this pointer",
      code: `class Demo {
  public:
    void show() {
        cout << "Address using this pointer: " << this << endl;
    }
};`,
      explanation:
        "‘this’ pointer holds the address of the current object inside a class method.",
    },
    {
      question: "Write a program to demonstrate copy constructor",
      code: `class Person {
  public:
    string name;

    Person(string n) {
        name = n;
    }

    Person(const Person& p) {
        name = p.name;
        cout << "Copy constructor called" << endl;
    }
};`,
      explanation:
        "Copy constructor creates a new object by copying values from another object of the same class.",
    },
    // END MERGED OOP QUESTIONS
  ],

  /*-----------------------------------------------------DSA----------------------------------------------------------- */

  DSA: [
    {
      question: "Reverse a string without using built-in methods",
      code: `function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}`,
      explanation:
        "Iterates from end to start, appending each character to form the reversed string.",
    },
    {
      question: "Find factorial of a number using loop",
      code: `function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}`,
      explanation: "Multiplies numbers from 1 to n to get factorial value.",
    },
    {
      question: "Check if a string is palindrome",
      code: `function isPalindrome(str) {
  let start = 0, end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
}`,
      explanation:
        "Uses two pointers from both ends to check if characters match.",
    },
    {
      question: "Find the largest number in an array",
      code: `function findLargest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}`,
      explanation: "Keeps track of the largest value while iterating.",
    },
    {
      question: "Find the second largest number in an array",
      code: `function secondLargest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] > second && arr[i] < max) {
      second = arr[i];
    }
  }
  return second;
}`,
      explanation: "Tracks both max and second max in a single loop.",
    },
    {
      question: "Count the number of vowels in a string",
      code: `function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) count++;
    }
  }
  return count;
}`,
      explanation:
        "Checks each character against vowels list to count matches.",
    },
    {
      question: "Reverse an array without built-in reverse()",
      code: `function reverseArray(arr) {
  let start = 0, end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}`,
      explanation: "Swaps elements from both ends until middle is reached.",
    },
    {
      question: "Find the sum of all elements in an array",
      code: `function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}`,
      explanation: "Adds each array element to a sum variable.",
    },
    {
      question: "Implement binary search",
      code: `function binarySearch(arr, target) {
  let start = 0, end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}`,
      explanation:
        "Divides search range in half each step to find target efficiently.",
    },
    {
      question: "Check if a number is prime",
      code: `function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}`,
      explanation:
        "Checks divisibility from 2 up to √n to determine primality.",
    },
  ],

  OS: [
  {
    question: "Implement First-Come-First-Served (FCFS) Scheduling",
    code: `function fcfs(processes, burstTime) {
  let waitingTime = [0];
  for (let i = 1; i < processes.length; i++) {
    waitingTime[i] = waitingTime[i-1] + burstTime[i-1];
  }
  return waitingTime;
}`,
    explanation: "Processes are executed in the order they arrive, calculating waiting times sequentially."
  },
  {
    question: "Implement Shortest Job First (SJF) Scheduling (Non-Preemptive)",
    code: `function sjf(processes, burstTime) {
  for (let i = 0; i < processes.length; i++) {
    for (let j = i + 1; j < processes.length; j++) {
      if (burstTime[j] < burstTime[i]) {
        [burstTime[i], burstTime[j]] = [burstTime[j], burstTime[i]];
        [processes[i], processes[j]] = [processes[j], processes[i]];
      }
    }
  }
  return { processes, burstTime };
}`,
    explanation: "Sorts processes by burst time to minimize average waiting time."
  },
  {
    question: "Simulate Round Robin Scheduling",
    code: `function roundRobin(processes, burstTime, quantum) {
  let remaining = [...burstTime], time = 0, result = [];
  while (true) {
    let done = true;
    for (let i = 0; i < processes.length; i++) {
      if (remaining[i] > 0) {
        done = false;
        if (remaining[i] > quantum) {
          time += quantum;
          remaining[i] -= quantum;
        } else {
          time += remaining[i];
          remaining[i] = 0;
        }
        result.push({ process: processes[i], time });
      }
    }
    if (done) break;
  }
  return result;
}`,
    explanation: "Each process gets a fixed time slice (quantum) in cyclic order."
  },
  {
    question: "Simulate Producer-Consumer Problem using counters",
    code: `function producerConsumer(produce, consume, capacity) {
  let buffer = 0;
  for (let p of produce) {
    if (buffer < capacity) buffer++;
  }
  for (let c of consume) {
    if (buffer > 0) buffer--;
  }
  return buffer;
}`,
    explanation: "Simulates adding/removing items from a buffer with limited capacity."
  },
  {
    question: "Implement Banker's Algorithm for Deadlock Avoidance",
    code: `function bankers(need, allocation, available) {
  let finish = Array(need.length).fill(false), safeSeq = [];
  while (safeSeq.length < need.length) {
    let allocated = false;
    for (let i = 0; i < need.length; i++) {
      if (!finish[i] && need[i].every((n, j) => n <= available[j])) {
        available = available.map((a, j) => a + allocation[i][j]);
        safeSeq.push(i);
        finish[i] = true;
        allocated = true;
      }
    }
    if (!allocated) break;
  }
  return safeSeq.length === need.length ? safeSeq : null;
}`,
    explanation: "Checks if system can allocate resources without entering deadlock."
  },
  {
    question: "Simulate FIFO Page Replacement",
    code: `function fifo(pages, capacity) {
  let frame = [], faults = 0;
  for (let p of pages) {
    if (!frame.includes(p)) {
      if (frame.length < capacity) frame.push(p);
      else frame.shift(), frame.push(p);
      faults++;
    }
  }
  return faults;
}`,
    explanation: "Replaces oldest loaded page when capacity is full."
  },
  {
    question: "Simulate LRU Page Replacement",
    code: `function lru(pages, capacity) {
  let frame = [], faults = 0;
  for (let p of pages) {
    if (!frame.includes(p)) {
      if (frame.length < capacity) frame.push(p);
      else frame.shift(), frame.push(p);
      faults++;
    } else {
      frame.splice(frame.indexOf(p), 1);
      frame.push(p);
    }
  }
  return faults;
}`,
    explanation: "Replaces least recently used page when capacity is full."
  },
  {
    question: "Demonstrate Priority Scheduling (Non-Preemptive)",
    code: `function priorityScheduling(processes, burstTime, priority) {
  for (let i = 0; i < processes.length; i++) {
    for (let j = i + 1; j < processes.length; j++) {
      if (priority[j] < priority[i]) {
        [priority[i], priority[j]] = [priority[j], priority[i]];
        [burstTime[i], burstTime[j]] = [burstTime[j], burstTime[i]];
        [processes[i], processes[j]] = [processes[j], processes[i]];
      }
    }
  }
  return { processes, burstTime, priority };
}`,
    explanation: "Sorts processes by priority before execution."
  },
  {
    question: "Simulate Semaphore Operations",
    code: `function semaphore(operations) {
  let s = 1;
  for (let op of operations) {
    if (op === "wait") s--;
    if (op === "signal") s++;
  }
  return s;
}`,
    explanation: "Wait decreases semaphore value, signal increases it."
  },
  {
    question: "Demonstrate Context Switching",
    code: `function contextSwitch(processes, switchTime) {
  let totalTime = 0;
  for (let p of processes) {
    totalTime += p + switchTime;
  }
  return totalTime;
}`,
    explanation: "Adds context switch time after each process execution."
  }
],
DBMS: [
  {
    question: "Create a table for storing employee details",
    code: `CREATE TABLE Employee (
  EmpID INT PRIMARY KEY,
  Name VARCHAR(50),
  Department VARCHAR(50),
  Salary DECIMAL(10, 2)
);`,
    explanation: "Creates 'Employee' table with columns for ID, name, department, and salary."
  },
  {
    question: "Insert a new record into Employee table",
    code: `INSERT INTO Employee (EmpID, Name, Department, Salary)
VALUES (1, 'John Doe', 'IT', 55000.00);`,
    explanation: "Adds a single row with employee details into the Employee table."
  },
  {
    question: "Retrieve all employees from IT department",
    code: `SELECT * FROM Employee
WHERE Department = 'IT';`,
    explanation: "Selects all columns for employees working in the IT department."
  },
  {
    question: "Update salary of an employee",
    code: `UPDATE Employee
SET Salary = 60000
WHERE EmpID = 1;`,
    explanation: "Changes salary of the employee whose ID is 1."
  },
  {
    question: "Delete an employee record",
    code: `DELETE FROM Employee
WHERE EmpID = 1;`,
    explanation: "Removes the row where EmpID is 1."
  },
  {
    question: "Find highest salary in Employee table",
    code: `SELECT MAX(Salary) AS HighestSalary
FROM Employee;`,
    explanation: "Uses MAX() to find the largest salary value."
  },
  {
    question: "Count total employees in each department",
    code: `SELECT Department, COUNT(*) AS TotalEmployees
FROM Employee
GROUP BY Department;`,
    explanation: "Groups employees by department and counts how many in each."
  },
  {
    question: "Retrieve employees earning more than 50000",
    code: `SELECT * FROM Employee
WHERE Salary > 50000;`,
    explanation: "Selects only those rows where salary is greater than 50000."
  },
  {
    question: "Find average salary of employees",
    code: `SELECT AVG(Salary) AS AverageSalary
FROM Employee;`,
    explanation: "Calculates average of the Salary column."
  },
  {
    question: "Join Employee and Department tables",
    code: `SELECT E.Name, D.DeptName
FROM Employee E
JOIN Department D ON E.Department = D.DeptID;`,
    explanation: "Combines Employee and Department table rows using a common key."
  }
],

CN: [
  {
    question: "Simulate data transmission using Stop-and-Wait protocol",
    code: `function stopAndWait(frames) {
  for (let i = 0; i < frames.length; i++) {
    console.log("Sending frame:", frames[i]);
    console.log("Waiting for ACK...");
    console.log("ACK received for:", frames[i]);
  }
}`,
    explanation: "Sends one frame at a time, waits for acknowledgment before sending the next."
  },
  {
    question: "Demonstrate IP address classification",
    code: `function classifyIP(ip) {
  let firstOctet = parseInt(ip.split('.')[0]);
  if (firstOctet >= 1 && firstOctet <= 126) return "Class A";
  if (firstOctet >= 128 && firstOctet <= 191) return "Class B";
  if (firstOctet >= 192 && firstOctet <= 223) return "Class C";
  return "Other";
}`,
    explanation: "Determines IP class based on the first octet value."
  },
  {
    question: "Simulate CRC error detection (simple)",
    code: `function crcCheck(data, divisor) {
  let dividend = data + "0".repeat(divisor.length - 1);
  dividend = dividend.split('').map(Number);
  divisor = divisor.split('').map(Number);
  for (let i = 0; i <= dividend.length - divisor.length; i++) {
    if (dividend[i] === 1) {
      for (let j = 0; j < divisor.length; j++) {
        dividend[i + j] ^= divisor[j];
      }
    }
  }
  return dividend.slice(-divisor.length + 1).join('');
}`,
    explanation: "Uses XOR division to generate a remainder for CRC error detection."
  },
  {
    question: "Convert binary to decimal for subnetting",
    code: `function binaryToDecimal(bin) {
  let decimal = 0;
  for (let i = 0; i < bin.length; i++) {
    decimal = decimal * 2 + Number(bin[i]);
  }
  return decimal;
}`,
    explanation: "Multiplies by 2 and adds each bit to convert binary to decimal."
  },
  {
    question: "Simulate token passing in a ring topology",
    code: `function tokenPassing(nodes) {
  let token = "TOKEN";
  for (let i = 0; i < nodes.length; i++) {
    console.log(nodes[i], "has", token);
  }
}`,
    explanation: "Passes a token sequentially to each node in a ring network."
  }
],

JavaScript: [
  {
    question: "Swap two numbers without using a third variable",
    code: `let a = 5, b = 10;
a = a + b;
b = a - b;
a = a - b;`,
    explanation: "Adds both numbers, then subtracts to swap without a temp variable."
  },
  {
    question: "Find the length of a string without using length property",
    code: `function stringLength(str) {
  let count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
}`,
    explanation: "Loops until it finds an undefined index to count characters."
  },
  {
    question: "Find the sum of digits of a number",
    code: `function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}`,
    explanation: "Extracts each digit using modulus and adds them up."
  },
  {
    question: "Find the largest of three numbers",
    code: `function largestOfThree(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}`,
    explanation: "Compares each value and stores the largest."
  },
  {
    question: "Reverse a number",
    code: `function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev;
}`,
    explanation: "Builds reversed number by multiplying by 10 and adding last digit."
  },
  {
    question: "Check if a number is Armstrong number",
    code: `function isArmstrong(num) {
  let temp = num, sum = 0, digits = 0;
  let n = temp;
  while (n > 0) { digits++; n = Math.floor(n / 10); }
  while (temp > 0) {
    let rem = temp % 10;
    let pow = 1;
    for (let i = 0; i < digits; i++) pow *= rem;
    sum += pow;
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}`,
    explanation: "Raises each digit to the number of digits and sums; compares to original."
  },
  {
    question: "Check if a year is leap year",
    code: `function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}`,
    explanation: "Uses leap year rules based on divisibility."
  },
  {
    question: "Find GCD of two numbers",
    code: `function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}`,
    explanation: "Uses Euclidean algorithm to find greatest common divisor."
  },
  {
    question: "Count occurrences of a character in a string",
    code: `function countChar(str, ch) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) count++;
  }
  return count;
}`,
    explanation: "Loops through string and increments counter for matches."
  },
  {
    question: "Check if two strings are anagrams",
    code: `function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let count = {};
  for (let i = 0; i < str1.length; i++) {
    count[str1[i]] = (count[str1[i]] || 0) + 1;
    count[str2[i]] = (count[str2[i]] || 0) - 1;
  }
  for (let key in count) {
    if (count[key] !== 0) return false;
  }
  return true;
}`,
    explanation: "Counts each character in both strings and checks if counts match."
  }
],

COA: [
  {
    question: "Convert decimal to binary without using built-in methods",
    code: `function decimalToBinary(num) {
  let binary = "";
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary || "0";
}`,
    explanation: "Divides number by 2, storing remainders in reverse order."
  },
  {
    question: "Convert binary to decimal without using parseInt",
    code: `function binaryToDecimal(bin) {
  let decimal = 0;
  for (let i = 0; i < bin.length; i++) {
    decimal = decimal * 2 + Number(bin[i]);
  }
  return decimal;
}`,
    explanation: "Multiplies by 2 and adds each bit to get decimal value."
  },
  {
    question: "Implement 2's complement of a binary number",
    code: `function twosComplement(bin) {
  let n = bin.length;
  let inverted = "";
  for (let i = 0; i < n; i++) {
    inverted += bin[i] === "0" ? "1" : "0";
  }
  let carry = 1, result = "";
  for (let i = n - 1; i >= 0; i--) {
    let sum = Number(inverted[i]) + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  return result;
}`,
    explanation: "Flips bits (1’s complement) and adds 1 to get 2’s complement."
  },
  {
    question: "Simulate binary addition",
    code: `function binaryAddition(a, b) {
  let carry = 0, result = "";
  let i = a.length - 1, j = b.length - 1;
  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) sum += Number(a[i--]);
    if (j >= 0) sum += Number(b[j--]);
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  return result;
}`,
    explanation: "Adds bits from right to left, keeping track of carry."
  },
  {
    question: "Simulate Booth's Algorithm for multiplication (simplified)",
    code: `function boothsMultiplication(m, r) {
  let result = 0;
  let negM = -m;
  for (let i = 0; i < 32; i++) {
    if ((r & 1) && !(r & 2)) result += m;
    else if (!(r & 1) && (r & 2)) result += negM;
    m <<= 1;
    r >>= 1;
  }
  return result;
}`,
    explanation: "Uses Booth’s algorithm logic to handle signed binary multiplication."
  }
]





};
