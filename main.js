
document.write("Fruit Shop Bill"+"<br>");
document.write("-------------------"+"<br></br>");
function fruits(a,b,c){
    d=a+b+c;
    return d;
}
let a=parseInt(prompt("Enter a apple Rs/-:"));
let b=parseInt(prompt("Enter a orange Rs/-:"));
let c=parseInt(prompt("Enter a pineapple Rs/-:"));
let x=fruits(a,b,c);
document.write("Apple Rs/-:" +a+"<br>");
document.write("Orange Rs/-:" +b+"<br>");
document.write("PineApple Rs/-:" +c+"<br>");
document.write("The total amount is : "+x);