var msg="This is a Learning Page";
alert(msg);
let person = {              //Object
    name:"HariHaran",
    age:19,
    gender:"Male",
    dob:"23-05-2004",
    sibling:{
        brother:"NIL",
        sister:"Yazhini"
    }
}
alert(person.name);
console.log(person.sibling.sister);
console.log(person.dob);

let Array=["Bobby","Harish","Alpha"]
console.log(Array);
let number1=10;
let number2=20;
function Airthematic(number1,number2){
    let sum=number1+number2;
    let mul=number1*number2;
    let sub=number1-number2;
    console.log("Addition:"+sum+"\nSubtraction:"+sub+"\nMultiplication:"+mul);

}
Airthematic(10,20)
