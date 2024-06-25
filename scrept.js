var form = document.querySelector(".form");
console.log(form);
var amonts= [];
var amont;
form.onsubmit = function (e){
    e.preventDefault(); 
    var element = e.target.elements;
     amont ={
     number: element[0].value,
     from : element[1].value  ,
     to: element[2].value  ,   
    };
    amonts.push(amont);
    console.log(amont);
   console.log(element);
   console.log(amont.from);
  printresult();
}
function printresult(){
    var data = ``;
    var res ;
    if(amont.from === "USD"){
        console.log("This is USD to NIS");
        console.log(amont.number * 3.75);
        res = amont.number * 3.75;
        data += `${res} USD `
       }
       else if(amont.from === "JD"  ){
        console.log("This is NIS to USD");
        console.log(amont.number * 5);
        res = amont.number * 5;
        data += `${res} NIS `;
       }
       var para = document.querySelector(".result").innerHTML = data ;
}

