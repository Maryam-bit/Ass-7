//     ~~~~~~~~~~~~~~~~~~~~~~~~~~Assignment No 07 ~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~Name: Maryam Noor ~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~Roll No : WM5248 ~~~~~~~~~~~~~~~~~~~~~~~~~~~






//     <<<<<<•••• STRING METHODS •••••>>>>>>>>
//     ~~~~~~~°°°° QUESTION NO 1 °°°°~~~~~~~~      ✔

/*
var FirstName = prompt("enter first name");
var LastName = prompt("enter last name");
document. write("<h1 style='font-size:60px;color:green; text-align:center; margin-top:240px; font-weight:bolder'>" + FirstName + " " + LastName + "</h1>")
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 2 °°°°~~~~~~~~     ✔

/*
var FavMobile = prompt("Enter your Favourite mobile phone");
document. write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:210px'>" + "My favourite phone is : " +FavMobile+"</h1>")
document. write("<h1 style='font-size:50px;color:green; text-align:center'>"+"Length of  String :" +FavMobile.length+"</h1>")
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 3 °°°°~~~~~~~~    ✔

/*
var a = "Pakistani";
document. write("<h1 style='font-size:60px;color:green; text-align:center;margin-top:210px'>" + "String : " +a+"</h1>")
var b = a.indexOf("n")
document. write("<h1 style='font-size:60px;color:green; text-align:center'>" + "index of 'n' is : " +b+"</h1>")
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 4 °°°°~~~~~~~~    ✔

/*
var a = "hello world"
document. write("<h1 style='font-size:60px;color:green; text-align:center;margin-top:210px'>" + "String : " +a+"</h1>")
var b = a.lastIndexOf("l")
document. write("<h1 style='font-size:60px;color:green; text-align:center'>" + "Last index of 'l' is : " +b+"</h1>")
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 5 °°°°~~~~~~~~    ✔

/*
var a = "pakistani"
document. write("<h1 style='font-size:60px;color:green; text-align:center;margin-top:210px'>" + "String : " +a+"</h1>")
var b = a.charAt(3);
document. write("<h1 style='font-size:60px;color:green; text-align:center'>" + "Character at Index 3 : " +b+"</h1>")
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 6 °°°°~~~~~~~~  ✔

/*
FirstName = prompt("Enter first name")
SecondName = prompt("Enter second name")
document. write("<h1 style='font-size:60px;color:green; text-align:center;margin-top:250px'>" + FirstName.concat(" "+SecondName) + "</h1>")
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 7 °°°°~~~~~~~~   ✔

/*
var a ="Hyderabad"
document. write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:220px'>"+ "City : " + a+"</h1>")
var b = a.replace("Hyder" , "Islam")
document. write("<h1 style='font-size:50px;color:green; text-align:center;'>"+ "After Replacement : " +b+"</h1>")
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 8 °°°°~~~~~~~~  ✔

/*
var a ="Ali and Sami are best friends. They play cricket and football together.";
var b = a.replace(/and/g , "&");
document. write("<h1 style='font-size:40px;color:green; text-align:center;margin-top:250px'>"+b+"</h1>");
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 9 °°°°~~~~~~~~   ✔

/*
var a = "472"
document. write("<h1 style='font-size:40px;color:green; text-align:center;margin-top:200px'>"+ "value: "+a+ "<br>"+"type : " +typeof(a)+"</h1>" + "<br>")
var b = parseInt(a)
document. write("<h1 style='font-size:40px;color:green; text-align:center'>"+ "value: "+b+ "<br>"+"type : " +typeof(b)+"</h1>" + "<br>")
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 10 °°°°~~~~~~~~    ✔

/*
var a = prompt("enter input")
var b = a.toUpperCase()
document. write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:250px'>"+b+"</h1>")
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 11 °°°°~~~~~~~~    ✔

/*
var userInput = prompt("enter your input")
document. write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:250px'>"+ "User Input : "+userInput+"</h1>")
var titleCase = userInput.slice(0,1);
var upperCase = titleCase.toUpperCase();
var lowercase=userInput.substr(1).toLowerCase();
var tc=upperCase+lowercase
document. write("<h1 style='font-size:50px;color:green; text-align:center'>"+ "Tittle case : "+tc+"</h1>")
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 12 °°°°~~~~~~~~   ✔

/*
var a = 35.36; 
document. write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:200px'>"+ "Number :  " +a+"</h1>" + "<br>")
var b = a.toString();
b = b.replace("." , "")
document. write("<h1 style='font-size:50px;color:green; text-align:center'>"+ "Result: " +b+"</h1>" + "<br>")
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 13 °°°°~~~~~~~~      ✔
/*
var name = prompt("enter your name");
var i,j=0;
for (i=0; i<name.length; i++){
    if(name[i] === String.fromCharCode(33)){
        j++
        break;
    }
    else if(name[i] === String.fromCharCode(44)){
        j++
        break;
   }
   else if(name[i] === String.fromCharCode(46)){
       j++
       break;
   }
   else if(name[i] === String.fromCharCode(64)){
       j++
       break;
   }
   else{
       j=0;
   }
}
if(j>0){
    document.write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:200px'>" + "<br>" + "Please enter a valid username" + "</h1>" + "<br>")
}
else{
    document.write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:200px'>" + "<br>" +  "Your name is: " + name + "</h1>" + "<br>")
}

*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 14 °°°°~~~~~~~~   ✔

/*
var fruitCheck = prompt("search fruits")   
fruitCheck = fruitCheck.toLowerCase();
var fruits = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
    if (fruitCheck === fruits[0] || fruitCheck === fruits[1] || fruitCheck === fruits[2] || fruitCheck === fruits[3] || fruitCheck === fruits[4] ) {

    document.write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:20px'>" + "<br>" + fruitCheck + " is available at index no " + fruits.indexOf(fruitCheck) + "</h1>" + "<br>")
}
else{
    document.write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:20px'>" + "<br>" + fruitCheck + " is not available in our bakery "  + "</h1>" + "<br>")
}
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 15 °°°°~~~~~~~~      ✔

/*
var password = prompt("enter your password", "contains alphabet and number");
document.write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:190px'>" + "<br>" + "Entered Password : " + password  + "</h1>")
// document.write("Password : " + password);
if (password[0] >= 0|| password[0]<=9){
document.write("<h1 style='font-size:50px;color:green; text-align:center'>" + "Password can not begin with a number"+ "</h1>")
document.write("<h1 style='font-size:50px;color:green; text-align:center'>" + "Please enter a valid password"+ "</h1>")

// document.write("Password cannot begins with a number ");
}
else if(password.length<6){
document.write("<h1 style='font-size:50px;color:green; text-align:center'>"  + "Please enter at least 6 characters"+ "</h1>" + "<br>")
        // document.write("please enter at least 6 characters");
    }
else{
document.write("<h1 style='font-size:50px;color:green; text-align:center'>"  + "Your password is correct"+ "</h1>" + "<br>")
}
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 16 °°°°~~~~~~~~      ✔

/*
    var university = "university of karachi"
    var b = university.split("<br>")
        document.write("<h1 style='fnt-size:50px;color:green; text-align;center;margin-top:20px'>" + "<br>" + b + "</h1>" + "<br>")
        */

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 17 °°°°~~~~~~~~      ✔

/*
var userInput = prompt("enter any word");
var b = userInput.substr(-1);
document.write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:200px'>" + "<br>" + b + "</h1>" + "<br>")
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 18 °°°°~~~~~~~~      ✔

/*
var string = "The quick brown fox jumbs over the lazy dog";
var stringlow = string.toLowerCase()
var a = stringlow.replace(/the/g , "$")
var c = 0;
for (var i = 0; i<a.length; i++){
    if (a[i]==="$"){
    c++
    }    
}
console.log(c)
*/

//  ______________________________________________________________________________________________________________________________________________________





//     <<<<<<•••• MATH METHODS •••••>>>>>>>>        





//     ~~~~~~~°°°° QUESTION NO 1 °°°°~~~~~~~~       ✔
/*

var n = prompt("enter any number")
document.write("<h1 style='font-size:50px;color:green; text-align:center; margin-top:120px'>"  + "number : " + n + "</h1>")
var roundOff = Math.round(n)
document.write("<h1 style='font-size:50px;color:green; text-align:center'>" + "Round off value : " + roundOff + "</h1>")
var floor = Math.floor(n)
document.write("<h1 style='font-size:50px;color:green; text-align:center'>" + "floor value : " + floor + "</h1>")
var ceil = Math.ceil(n)
document.write("<h1 style='font-size:50px;color:green; text-align:center'>" + "ceil value : " + ceil + "</h1>" )
*/ 

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 2 °°°°~~~~~~~~       ✔

/*
var number = prompt("Enter negetive float number");
document.write("<h1 style='font-size:50px;color:green; text-align:center'>" + "number : " + number + "</h1>" )
document.write("<h1 style='font-size:50px;color:green; text-align:center'>" + "Round Off value : " + Math.round(number) + "</h1>" )
document.write("<h1 style='font-size:50px;color:green; text-align:center'>" + "floor value : " + Math.floor(number) + "</h1>" )
document.write("<h1 style='font-size:50px;color:green; text-align:center'>" + "ceil value : " + Math.ceil(number) + "</h1>" )
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 3 °°°°~~~~~~~~       ✔
/*

var a = prompt("enter any number");
x = Math.abs(a);
document.write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:230px'>" + "The Absolute value of  : " + a + " is " + x + "</h1>" )

document.write(x);
*/

//  <____________________________>






//     ~~~~~~~°°°° QUESTION NO 4 °°°°~~~~~~~~       ✔

/*
var randomNumber = Math.random() * 6;
document.write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:230px'>" + "Random dice value  : " + Math.floor(randomNumber)  + "</h1>" )
var dice = randomNumber + 1;
document.write("<h1 style='font-size:50px;color:green; text-align:center'>" + "Random dice value  : " + Math.floor(dice)  + "</h1>" )
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 5 °°°°~~~~~~~~       ✔

/*
var headUser = prompt("enter heads username");
var tailUser = prompt("enter tails username");
var toss = Math.random()*2;
var floor = Math.floor(toss);
if(floor === 0){
    alert(" heads " + headUser + " win the toss ")
// document.write("<h1 style='font-size:50px;color:green; text-align:center; margin-top:250px'>" + "Heads " + headUser +  " win the toss"  + "</h1>" )
}
else{
    alert(" tails " + tailUser + " win the toss ")
// document.write("<h1 style='font-size:50px;color:green; text-align:center; margin-top:250px'>" + "Tails " + tailUser +  " win the toss "  + "</h1>" )
}
*/

//  <____________________________>


//     ~~~~~~~°°°° QUESTION NO 6 °°°°~~~~~~~~       ✔

/*
var RandomNumber = Math.random() * 101;
var floor = Math.floor(RandomNumber) + 1;
document.write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:230px'>" + "Random number betweeb 1 and 100  : " + floor  + "</h1>" )
*/
//  <____________________________>



//     ~~~~~~~°°°° QUESTION NO 7 °°°°~~~~~~~~      ✔
/*
var weight = +prompt("enter your weight")
var parsing = parseInt(weight);
var floating = parseFloat(weight);
if (weight === parsing){
document.write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:230px'>" + "your weight is  : " + parsing  + " kilograms" + "</h1>" )
}
else if(weight === floating){
document.write("<h1 style='font-size:50px;color:green; text-align:center;margin-top:230px'>" + "your weight is  : " + parsing.toString()  + " kilograms" + "</h1>" )

}
*/



//  <____________________________>


//     ~~~~~~~°°°° QUESTION NO 8 °°°°~~~~~~~~       ✔
/*
var number = Math.random();
var floor = Math.floor((number * 10) + 1);
var UserInput = prompt("enter number from 1-10");
if (floor==UserInput){
    alert("contratulations ! you guess true number");
}
else{
    alert("try again");
}
*/
//  ______________________________________________________________________________________________________________________________________________________






//     <<<<<<•••• DATE METHODS •••••>>>>>>>>        




//     ~~~~~~~°°°° QUESTION NO 1 °°°°~~~~~~~~       ✔

/*
var rightNow = new Date();
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>"  + rightNow  + "</h1>" )
*/

//  <____________________________>



//     ~~~~~~~°°°° QUESTION NO 2 °°°°~~~~~~~~       ✔

/*
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var rightNow = new Date();
var thisMonth = months[rightNow. getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>"  + thisMonth + "</h1>" )
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 3 °°°°~~~~~~~~       ✔

/*
var Days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var rightNow = new Date();
var thisDay = Days[rightNow. getDay()]; // getMonth method returns the month of the date (0-January :: 11-December)
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>" + "Today is "  + thisDay.slice(0,3) + "</h1>" )
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 4 °°°°~~~~~~~~       ✔
/*
var rightNow = new Date();
var day = rightNow.getDay()
if (day === 0 || day === 6){
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>" + "It's fun day "+ "</h1>" )
}
else{
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>" + "It's working day "  + "</h1>" )

}
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 5 °°°°~~~~~~~~       ✔

/*
var rightNow = new Date()
var date = rightNow.getDate()
if (date < 16 ){
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>" + "First fifteen days of month "  + "</h1>" )
}
else{
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>" + "Last days of month "  + "</h1>" )

}
*/

//  <____________________________>






//     ~~~~~~~°°°° QUESTION NO 6 °°°°~~~~~~~~       ✔
/*
var today = new Date()
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:230px'>" + "current Date :" + today  + "</h1>" )
var jan = new Date("jan 1 ,1970 00:00:00");
var diff = today.getTime() - jan.getTime();
var milisec = diff/(1000)
document.write("<h1 style='font-size:33px;color:green; text-align:center'>" + "Elapsed milisecond since january 1 ,1970 : " + milisec  + "</h1>" )
var min = diff/(1000*60*60)
document.write("<h1 style='font-size:33px;color:green; text-align:center'>" + "Elapsed minutes since january 1 ,1970 : " + min  + "</h1>" )
*/
//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 7 °°°°~~~~~~~~       ✔

/*
var rightNow = new Date()
var Hour = rightNow.getHours()
if (Hour < 12){
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>" + "It's AM "  + "</h1>" )
}
else{
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>" + "It's PM "  + "</h1>" )
}
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 8 °°°°~~~~~~~~       ✔
/*
var date = new Date("dec 31, 2020");
var laterDate = date;
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>" + laterDate  + "</h1>" )
*/

//  <____________________________>



//     ~~~~~~~°°°° QUESTION NO 9 °°°°~~~~~~~~       ✔
/*
var rightnow = new Date("jun 19, 2020");
var ramzan = new Date("jun 18, 2015");
var s = ramzan.getTime() - rightnow.getTime();
var d = s/(1000*60*60*24)
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>" + "Tol number of Day passed " + d  + "</h1>" )
*/
//  <____________________________>



//     ~~~~~~~°°°° QUESTION NO 10 °°°°~~~~~~~~      ✔
/*
var by = new Date("jan 1, 2015 00:00:00");
var ry = new Date("Dec 5, 2015 22:51:16");
var sub = ry.getTime() - by.getTime();
var t = sub/(1000*60);
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>" + "Total number of Day passed " + Math.floor(t)  + "</h1>" );
*/
//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 11 °°°°~~~~~~~~         ✔
/*
var right_now = new Date();
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>" + "Current Date " + right_now  + "</h1>" );
var hour = new Date();
hour.setHours(right_now.getHours() - 1);
document.write("<h1 style='font-size:33px;color:green; text-align:center'>" + "1 hour ago it was : " + hour  + "</h1>" );
*/

//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 12 °°°°~~~~~~~~      ✔
/*
var right_now = new Date();
document.write("<br><br/>Current Date : ", right_now);
var year = new Date();
year.setHours(right_now.getFullYear() - 100);
document.write("<br><br/>100 year ago, it was ", year);
*/


//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 13 °°°°~~~~~~~~      ✔
/*
var age = +prompt("Enter your age");
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:250px'>" + "Your Age is  : " + age + "</h1>" );
var year = new Date().getFullYear() - age;
document.write("<h1 style='font-size:33px;color:green; text-align:center'>" + "Your birth year is  : " + year + "</h1>" );
*/
//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 14 °°°°~~~~~~~~      ❓
/* 
.....
*/
//  ______________________________________________________________________________________________________________________________________________________






//     <<<<<<•••• FUNCTIONS •••••>>>>>>>>       





//     ~~~~~~~°°°° QUESTION NO 1 °°°°~~~~~~~~       ✔

/*
function rightNow(){
    var date = new Date();
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>" + date + "</h1>" )
}
rightNow();
*/
//  <____________________________>





//     ~~~~~~~°°°° QUESTION NO 2 °°°°~~~~~~~~o      ✔

/*
function name(firstName , LastName){
document.write("<h1 style='font-size:46px;color:green; text-align:center;margin-top:260px'>" +  firstName+ " " + LastName  + "</h1>" )
    
}
name(prompt("enter first name "),prompt(" enter last name "));
 */

//                  °°°° OR °°°°
/*
function name(){
var firstName = prompt("enter first Name")
var lastName = peompt("enter last name");
document.write("<h1 style='font-size:46px;color:green; text-align:center;margin-top:260px'>" +  firstName+ " " + lastName+ "</h1>" )
}
name()

*/

//  <___________________________>





//     ~~~~~~~°°°° QUESTION NO 3 °°°°~~~~~~~~       ✔

/*
function num(first_number,second_number){
    first_number= +prompt("enter first number")
    second_number = +prompt("enter second number")
    var a = first_number+second_number;
    document.write("<h1 style='font-size:46px;color:green; text-align:center'>" +  a + "</h1>" )
}
num();
 */
//  <___________________________>



 

//     ~~~~~~~°°°° QUESTION NO 4 °°°°~~~~~~~~       ✔
/*
function calculator(num1,operator,num2){
    if(operator === "+"){
        return num1 + num2;
    }
    else if(operator === "-"){
        return num1 - num2;
    }
    else if(operator === "*"){
        return num1 * num2;
    }
    else if(operator === "/"){
        return num1 / num2;
    }
    else {
        return "Incorrect Operator!"
    }
}
var result = calculator(5,"+",10);
document.write("<h1 style='font-size:46px;color:green; text-align:center;margin-top:260px'>" +  result  + "</h1>" )
*/

//  <___________________________>





//     ~~~~~~~°°°° QUESTION NO 5 °°°°~~~~~~~~       ✔

/*
function square(s){
    var a = s*s
    document.write("<h1 style='font-size:46px;color:green; text-align:center;margin-top:260px'>" +  a  + "</h1>" )
}
square(2)  
*/

//  <___________________________>       





//     ~~~~~~~°°°° QUESTION NO 6 °°°°~~~~~~~~       ✔

/*
var b=prompt('faktorial');
var a=1
for (var i=1; i<=b ;i++)
a*=i
document.write("<h1 style='font-size:33px;color:green; text-align:center;margin-top:260px'>" + a + "</h1>" )
*/

//  <___________________________>





//     ~~~~~~~°°°° QUESTION NO 7 °°°°~~~~~~~~       ✔
/*
function counting(n1 , n2){
    if (n1<n2){
       for (a=n1; a<=n2; a++){
           document.write(a+",");
       }
       
    }
    else if(n2<n1){
        for(a=n2; a<=n1; a++){
           document.write(a+",");
        }
    }
}
counting(1,2);
*/
//  <___________________________>





//     ~~~~~~~°°°° QUESTION NO 8 °°°°~~~~~~~~       ✔
/*
function hypotenues(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }
  document.write("<h1 style='font-size:46px;color:green; text-align:center;margin-top:260px'>" +  hypotenues(4,3) + "</h1>" )
  */

//  <___________________________>





//     ~~~~~~~°°°° QUESTION NO 9 °°°°~~~~~~~~       ✔
/*
function areaRectangle(W, H) {
  document.write("<h1 style='font-size:46px;color:green; text-align:center;margin-top:260px'>" + (W* H) + "</h1>" )

}
 
areaRectangle(2, 3);
*/
//  <___________________________>





//     ~~~~~~~°°°° QUESTION NO 10 °°°°~~~~~~~~       ✔
/*
function reverseString() {  
    var a = prompt("enter any word");
       if(a === [...String(a)].reverse().join('')){
           alert("its a palindrome word")
     }
     else{
         alert("not a palindrome")
     }
    }
     reverseString();
*/
//  <___________________________>





//     ~~~~~~~°°°° QUESTION NO 11 °°°°~~~~~~~~       ✔
/*
function a(string){
  var arr = string.split(' ');
  var arr2 = [];
  for(var i = 0; i < arr.length; i++){
      arr2.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
  }
  return arr2.join(' ');
}
document.write("<h1 style='font-size:46px;color:green; text-align:center;margin-top:260px'>" + (a("the quick brown fox")) + "</h1>" )
*/
//  <___________________________>





//     ~~~~~~~°°°° QUESTION NO 12 °°°°~~~~~~~~       ✔
/*
function word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write("<h1 style='font-size:46px;color:green; text-align:center; margin-top:250px'>" +(word('Web Development Tutorial'))+ "</h1>" )
*/
//  <___________________________>





//     ~~~~~~~°°°° QUESTION NO 13 °°°°~~~~~~~~       ✔
/*
function countingNum(string, letter) 
{
 var letter1 = 0;
 for (var i = 0; i < string.length; i++) 
 {
    if (string.charAt(i) == letter) 
      {
      letter1 += 1;
      }
  }
  return letter1;
}
document.write("<h1 style='font-size:46px;color:green; text-align:center; margin-top:250px'>" + (countingNum('w3resource.com', 'o')) + "</h1>" )
*/

//  <___________________________>





//     ~~~~~~~°°°° QUESTION NO 14 °°°°~~~~~~~~       ✔
/*
function calcCircumference(radius) {
    var calculation = 2 *(22/7 * radius);
document.write("<h1 style='font-size:46px;color:green; text-align:center;margin-top:260px'>" + "The circumference is " + calculation  + "</h1>" )
  }
  function calcArea(radius) {
    var calculation1 = (22/7 * radius*radius);
document.write("<h1 style='font-size:46px;color:green; text-align:center'>" + "The area is " + calculation1  + "</h1>" )
  }
  
  calcCircumference(2);
  calcArea(15);
  
  */
//  ______________________________________________________________________________________________________________________________________________________
