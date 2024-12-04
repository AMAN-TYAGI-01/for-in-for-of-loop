
// for in loop  use object & array
const person={
    name: "aman",
    age:20,
    city:"sehore",
    course:"fsd",
};
let text="";
for( let x in person){
    text+= person[x]+"<br>";
}
document.getElementById("demo").innerHTML=text;
// for in loop array
const aman=[230,1003,495,1003,4];
let text1="";
for(let y in aman){
    text1+=aman[y]+"<br>";
}
document.getElementById("aman").innerHTML=text1;
// for of loop use object ,array and string

const number=" java is a good language for student";
let text2="";
for(let i of number){
    text2+= i+"<br>";
}document.getElementById("a").innerHTML=text2;

let text3="";
const name=["aman","tyagi","21","7471108280","sehore"];
for(let z of name){
    text3+=z+" <br>";
}document.getElementById("am").innerHTML=text3;

let text4="";
const num=[300,200,12,30,40];
for(let i in num){
    text4+= num[i]*12+"<br>";

}document.getElementById("ama").innerHTML=text4;

let text5="";
const x=[23,34,23,12,10];
for(let e of x){
    text5+= e*8+"<br>";
}document.getElementById("head").innerHTML=text5;