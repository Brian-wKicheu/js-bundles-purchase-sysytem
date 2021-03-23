                                //operators
                       //types are
/*
1. assignment operators (equal=)
2. arithmetic operators (+,-,/,%)
3. unery operators (++,--,+=,-=,*=,/=,%=)
4. comparison operators(&&, ||, !)
5. relational operators(==,===, !=)
*/
 /*               //1. Assignment operator (= assigns value, eg)
var age;
age=20;
console.log(age)
*/


              //3. unary (++,--,+=,-=,*=,/=,%=)
// a. example ++(increment)
/*
var a=5;
var b=a+1;
console.log(b)
      //or
a++
console.log(a)
*/


// b. example --(decrement)
/*
var a=10;
var b=a-1;
console.log(b)
   //or 
a--
console.log(a)
*/


//c. example +=()
/*
var a=6;
var b=a+6
console.log(b)

//can also bewritten as
a+=a
console.log(a)
*/
// += ni kama a+a au +number+number

//d. example -=()
/*
var a=16;
var b=a-6
console.log(b)

//can also bewritten as
a-=a
console.log(a)

// -= ni kama a-a au -number-number
*/
//e. example *=()
/*
var a=16;
var b=a*2
console.log(b)

//can also bewritten as
a*=a
console.log(a)
*/
// *= ni kama a*a au +number*number


//f. example /=()
/*
var a=10;
var b=a/2
console.log(b)

//can also bewritten as
a/=a
console.log(a)
*/
// /= ni kama a*a au +number/number

             //relational operator(==(changes &compaires the value and its not spacific, it just checks if the values are the same), ===, !=)
 //example ya ==
/*
 var age="20"
if (age==20){
    
    console.log("is true")
    
    }
    else{
        
        console.log("is false")
    
}
*/
 
                 //example 1 ya ===(strictly checks the data type if not same it keeps displaying else )
/*
var marks =80
if (marks==="80"){
    console.log("is true")
}
else{
    console.log("false")
}

*/
         //example 1 ya >=
/*
var age=20;
if(age>18){
    console.log("Allow in")
    
}
else{
    console.log("Go home")
}
/*

//example 2 ya>=
/*
var age=91;
if(age>90){
    console.log("Go sleep")
    
}
else if(age<18){
    console.log("Under age")
}
else{
    console.log("Allow in")
}
*/

/*
 examle 3
var age=200;
if(age>90){
    console.log("Go sleep")
    
}
else if(age>18){
    console.log("Allow in")
}
else{
    console.log("Under 18")
}

*/

                             //.conditional operator

//example 1 && looks for true "condition" and excecutes them
/*
var marks=8
if (marks>=5 && marks <=10){
    console.log("pass")
}
else{
    console.log("fail")
}
*/
//example 2 || 'void' looks for (true false or "condition"), (true false condition)

/*
var marks=20
if (marks>=5 || marks <=10){
    console.log("pass")
}
else{
    console.log("fail")
}
*/

//example 1 of !=

/*
var isLogin="True"
//=assigns
//!=not
//if(!isLogin) tumefanya if ikakua false alase else ikakua true
if(!isLogin){
console.log("User not log in")
}
else{
    console.log("User Logged in")
}

*/

//example 1 of !=
/*
var food="ugali"
if(food!="ugali"){
    console.log("Food is not ugali")
}
else{
    console.log("Food is ugali")
}
*/










