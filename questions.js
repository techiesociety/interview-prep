const questions = {
  OOP: [
    {
      question: "Write a program to implement inheritance using Employee and Manager",
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
      explanation: "Manager inherits from Employee. Manager can use both its own methods and Employee’s methods."
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
      explanation: "Using virtual functions, the right method runs at runtime (runtime polymorphism)."
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
      explanation: "Encapsulation means binding data and methods into a single unit (class), and restricting direct access. Here, marks is private, so it can only be accessed via public methods."
    },

    // BEGIN MERGED OOP QUESTIONS (from extra array)
    {
      question: "Write a program to implement encapsulation using a BankAccount class",
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
      explanation: "Encapsulation is used by keeping 'balance' private and using public methods to access it safely."
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
      explanation: "Two constructors are defined with different parameters, showing constructor overloading."
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
      explanation: "Same function name 'add' is used with different parameter types – this is function overloading."
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
      explanation: "Abstract class 'Shape' has a pure virtual function. 'Circle' class implements it."
    },
    {
      question: "Write a program to show runtime polymorphism using virtual function",
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
      explanation: "Virtual function enables runtime polymorphism – correct function is called using base class pointer."
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
      explanation: "Car inherits from Vehicle, so it can use 'move()' function of base class."
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
      explanation: "Human inherits from Animal, and Animal inherits from LivingThing – forming multilevel inheritance."
    },
    {
      question: "Write a program to implement this pointer",
      code: `class Demo {
  public:
    void show() {
        cout << "Address using this pointer: " << this << endl;
    }
};`,
      explanation: "‘this’ pointer holds the address of the current object inside a class method."
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
      explanation: "Copy constructor creates a new object by copying values from another object of the same class."
    }
    // END MERGED OOP QUESTIONS
  ],

  /*-----------------------------------------------------DSA----------------------------------------------------------- */

  DSA: [
    {
      question: "Write a program for binary search.",
      code: `int binarySearch(int arr[], int n, int key) {
  int start = 0, end = n - 1;
  while (start <= end) {
    int mid = (start + end) / 2;
    if (arr[mid] == key) return mid;
    else if (arr[mid] < key) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}`,
      explanation: "Binary Search divides the array and searches efficiently with O(log n) time."
    }
  ]
};
