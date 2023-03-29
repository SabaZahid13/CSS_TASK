// we have different ways to run javascript.
// we can run it on browser with external js File, internal js script and on browser console.
// we can also run javascript on node which is runtime environment for javascript

//Simple statement execution.
//console.log('Good Evening')
 
//variabes in js

//we don't have to define types in js. 
// we can use const and let to define variables.the different is that we can change 
//the value of var defined with let later  but the  const var has constant value and assigned at once.

// let var1 = 2
// var1 = 3
// console.log(var1)

// const var2 = 'strawberry'
// console.log(var2)

// //reassgning value to const var will give an error
// const var3 = 20.9
// var3=20.2
// console.log(var3)

// Datatypes in js
//primitive and non premtive 

//string can used all of these quotes.
// const fname = "Saba"
// const mname = 'Zahid'
// const lname = `Qureshi`
// console.log(fname + ' ' + mname + ' ' + lname)

//int and float 

// const area = 40
// const weight = 60.4

// console.log(area + ' ' + weight)

//bool 

// const question = true
// const  answer = false

// console.log(question + ' ' + answer)

//undefined

// let result 
// console.log(result)

//null

// let result = null 
// console.log(result)

//non premitive type object

// const marks = {
//     maths : 70 ,
//     physics : 75,
//     chemistry : 80,
//     computer : 85
// }
// console.log(marks.physics)

// array

// const numArray = [1,2,3,4,5]
// console.log(numArray[3])

//Assignment
//js convert the types itself and picks the last assigned value

// let a = 10
// a = 30.5
// a ='Saba'
// console.log(a)

 // operators

//  let num1 = 100
//  let num2 = 50

//  Arithmetic op
//  console.log(++num1)
//  console.log(--num1)
//  console.log(num1 + num2)
//  console.log(num1 - num2)
//  console.log(num1 * num2)
//  console.log(num1 / num2)
//  console.log(num1 % num2)

//  Assignment op
//  console.log(num1 >= num2)
//  console.log(num1 < num2)
//  console.log(num1 <= num2)
//  console.log(num1 != num2)
//  console.log(num1 == num2)

//  logical op
// let x = 42
// const isValidNum =  x > 40  && x > 30
// console.log(isValidNum)

//type conversions implicit

// console.log(true + '3')
// console.log('6' + '3')
// console.log(4 + '3')
// console.log('Saba ' + 'Zahid')
// console.log(null + '3')

//explicit

// let num = '100'
// let num2 = 20
// console.log(Number(num))
// console.log(parseInt(num))
// console.log(parseFloat(num))
// console.log(String(num2))
// console.log( num2.toString())
// console.log(Boolean(num))
// give false for undefined null and empty string
// console.log(Boolean(null))  

//Equality

// const str1 = '100'
// const str2 = 100
// console.log(str1 == str2) // matches only values and convert type itself 
// console.log(str1 === str2) // matches both types and values

//conditional statements
//if else
// const num =  10
//   if (num > 0){
//     console.log('num is +ve')

//   }
//   else if (num < 0){
//     console.log('num is -ve')
    
//   }else{
//     console.log('num is  0')
//   }

// // switch
//  const color = 'white'
//  switch(color){
//     case 'red':
//         console.log('color is red')  
//         break
//     case 'white':
//         console.log('color is white')
//         break
//     default:
//         console.log('invalid color')

//  }

 // loops
 //for
//  for ( let x = 1 ; x <= 5  ; x++){
//     console.log('oops the num is ' + x )
   
//  }

//  //while
// let i = 1
// while (i <= 5){
//     console.log('oops the num is ' + i ) 
//     i++
// }

// //do while

// let j = 1
// do{
//     console.log('oops the num is ' + j ) 
//     j++
// }while(j <= 5)

// for of
// const numArray = [0,1,2,3,4]
// for ( num in numArray){
//     console.log(num)
// }
 
//function 

// function greet(){
//     console.log('Hello Saba')
// }
// greet()


// function greet(str){
//     console.log('Hello ' + str)
// }

//  greet('Saba')
//  greet('Ayesha')
//  greet('Saliha')





