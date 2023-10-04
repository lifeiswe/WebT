document.write("Hello World<br>")
var b=20;                                       //using "var" we can declare more than once
var a=30;                                       //using "let" we can't declare more than once but we can initialise
var c=a+b;                                 
document.write("The sum is:"+c,"<br>");
var x=16+4+"Volvo";
document.write(x+"<br>")
x="Volvo"+16+4;
document.write(x+"<br>")
var m=10
if(true)
{
    m=20;
}
console.log(m);
var num=10;sum=0
for(i=0;i<num;i++){
    sum=sum+i
}
document.write(sum);
function add(a,b)
{
    return a+b;
}
var x=add(2,5);
console.log(x);

//arrow function
var add=(a,b)=>{
    return a+b;
}
var x=add(2,5);
console.log(x);

const fruits=["Banana","Orange","Apple","Mango"]
fruits.length=8
//document.write("<br>"+"<br>")
document.write(fruits+"<br>")

//join

let text=fruits.join(" and ")
document.write(text+"<br>") 

//fruits.push("ABC")
fruits.pop()
document.write(fruits+"<br>")

fruits.shift()
document.write(fruits+"<br>")

fruits.unshift("Grapes")
document.write(fruits+"<br>")

var t1=["a","b"]
var t2=["c","d"]
var t3=t1.concat(t2)
document.write(t3+"<br>")

// fruits.splice(2,0,"Watermelon","Pomegranite")
// document.write(fruits+"<br>")

// fruits.splice(2,2,"Watermelon","Pomegranite")
// document.write(fruits+"<br>")


let g=fruits.slice(1)
document.write(g+"<br>")

delete fruits[1]
document.write(fruits+"<br>")

// var myTimeout=setTimeout(myGreetings,5000);

// function myGreetings(){
//     document.write("HI<br>");
// }

//setInterval(function(){document.write("Hello");},5000)

var Object={
    "name":"Vivek"
    ,"sem":"3"
};
Object.show=function(){document.write(this.name+" "+this.sem,"<br>")};
Object.show();

function item3(name,sem,branch){
    this.name=name;
    this.sem=sem;
    this.branch=branch;

    this.show=function(){document.write(this.name+" "+this.sem+" "+this.branch)};
};
let item1= new item3("Rahul","3","CSE"+"<br>");
item1.show();


class Bike{
    constructor(model,price){
    this.model=model;
    this.price=price;
    }
}

const myBike1= new Bike("Ducati","2L");
const myBike2= new Bike("HD","3L"); 

document.write(myBike1.model+"="+myBike1.price+"<br>");


function Person(){
    this.name="John";
    this.age="40";
}

const person1= new Person()
const person2= new Person()

Person.prototype.gender="Male"

document.write(person1.name+" "+person1.gender)



let Student1={
    name:"Mona",
    age:24,
    marks:78.9,
    show(){
        document.write("Name:", this.name+"<br>");
        document.write("age:", this.age);
    }
}
let Student2=Object.create(Student1);
Student2.name="Lisa";
Student2.show();

