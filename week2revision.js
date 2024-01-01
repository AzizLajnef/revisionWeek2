////1
function iterateAndLogWithFor(n) {
for (var i =0;i<=n; i++) {
if (i % 2 === 0) {
console.log(i +" is even")
}else  {
console.log(i +" is odd")
}
    }
}

function iterateAndLogWithWhile(n) {
var i=0
while (i<= n) {
if (i % 2 === 0) {
console.log(i + " is even")
}else {
console.log(i + " is odd")
}
i=i+1
}
}

////2
function reverseIterateAndLogWithWhile(n) {
var i = n;
while (i >= 0) {
if (i % 2 === 0) {
console.log(i + " is even")
} else {
console.log(i + " is odd")
}
i=i-1
}
}

function reverseIterateAndLogRecursively(n) {
if (n<0) {
return n
}
if (n%2 === 0){
console.log(n + " is even")
}else{
console.log(n + " is odd")
}
reverseIterateAndLogRecursively(n - 1)
}

///3
function weirdDivisionWithFor(n) {
for (var i=1;i<=n;i++) {
if (i%3 ===0 && i%5=== 0) {
console.log("JuliaJames")
} else if(i%5 ===0) {
console.log("James")
}else if(i%3 ===0) {
console.log("Julia")
} else    {
console.log(i)
}
}
}

function weirdDivisionWithWhile(n) {
var i=1
    while (i <= n) {
if (i %3===0 && i%5===0) {
 console.log("JuliaJames")
}else if (i % 3 === 0) {
console.log("Julia")
} else if (i % 5 === 0) {
console.log("James")
} else{
console.log(i)
}
i=i+1
}
  }
  
  function weirdDivisionWithWhile(n) {
  
}
     


////4
function sumWithWhile(number) {
var sum = 0
var currentNumber =number
  
while (currentNumber>0) {
sum = sum+currentNumber
currentNumber=currentNumber-1
}
return sum
}
  

function sumWithFor(number) {
var sum = 0
  for (var i =number;i>0;i--) {
sum=sum +i
}
return sum
  }

///5
function factorialRecursively(number) {
if (number===0) {
      return 1
}
  return number *factorialRecursively(number-1)
}

///6
function rangeFor(min, max) {
var result = []
for (var i =min +1;i <max;i++) {
result.push(i)
}
return result
}
function rangeWhile(min, max) {
var result = []
var interg = min +1
while (interg <max) {
result.push(interg)
interg=interg+1
    }
}

///7
function reverseWithFor(str) {
var reversedString =''
for (var i=str.length-1;i>=0;i--) {
reversedString=reversedString+str[i]
}
  return reversedString
  }



  ///8
  