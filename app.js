

alert("Wellcome to my shop")

var x = prompt("What is the product you want? (Iphone ,Airpods ,MacBook)")

while (x != "Iphone" && x != "Airpods" && x != "MacBook" )
{x =prompt("please type the product you want (Iphone ,Airpods ,MacBook)")}
var y = prompt("How many " + x + " you want? ")
while(y > 10)
{y = prompt("How many " + x + " you want? (Please put number between [1 ,10] ")}
for(var i=1;i<=y && y<=10;i++ ){

 if(x =="Iphone" ){
   
 document.write("<div>"+
  "<h3>"+"Iphone number " + i +"</h3>"+
  "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwvjrlMrmbQp5eI3RDApTbAsHQ8v5RAOvVQ&usqp=CAU' alt='iphone' >"+
    "</div>")
 }
 if(x =="Airpods" ){
   
 document.write("<div>"+
  "<h3>"+"Airpods " + i +"</h3>"+
  "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwvjrlMrmbQp5eI3RDApTbAsHQ8v5RAOvVQ&usqp=CAU' alt='Airpods' >"+
    "</div>")
 }if(x =="MacBook" ){
   
 document.write("<div>"+
  "<h3>"+"MacBook " + i +"</h3>"+
  "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_2fM8Ia10gFKxxK5z81xzirVMh-yd8NrymQ&usqp=CAU' alt='MacBook' >"+
    "</div>")
 }
}



