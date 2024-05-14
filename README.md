# Assignment: Building a Generic Utility Library in TypeScript
AD 340 Assignment

## Setup Your Environment
### Check node is installed, run command if not you have to installed it first
```
node -v
```
### Install typescript
```
npm install -g typescript
```
### Install ts-node along with typescript 
```
npm install -g ts-node
```
### To run (in dierctory folder)
```
ts-node index.ts
```

## Assignment Object
Understand and apply TypeScript generics to create a utility library that provides functions for array and object manipulation, demonstrating the versatility and type safety of generics.

## Tasks
### Generic Identity Function
Create a generic `identity` function that takes an argument of type `T` and returns a value of type `T`.
Example usage: `identity<number>(1)` should return `1`, and `identity<string>("hello")` should return `"hello"`.
### Generic Array Reversal Function
Write a function `reverseArray<T>` that takes an array of elements of type `T` and returns a new array with the elements in reverse order.
Ensure type safety by restricting the function to only work with arrays.
### Generic Object Mapper
Develop a function `mapObject<K, V, U>` that takes an object with keys of type `K` and values of type `V`, along with a mapping function that converts `V` to another type `U`. Return a new object with the same keys but values of type `U`.
Example usage: `mapObject({a: 1, b: 2}, x => x.toString())` should return `{a: "1", b: "2"}`.
### Generic Filtering Function
Implement a generic function `filterArray<T>` that filters elements of an array based on a predicate function. The predicate function should take an element of type `T` and return a boolean.
Example usage: `filterArray<number>([1, 2, 3, 4], x => x % 2 === 0)` should return `[2, 4]`.

## Demonstration output
![image](https://github.com/JoyZhang2023/Generic_Utility_Library_TypeScript/assets/137982978/0210a697-2011-44cf-9d00-41aadae3193c)


