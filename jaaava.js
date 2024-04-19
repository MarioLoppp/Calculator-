function Color(){
    var boton = document.getElementById("boton");
    boton.style.backgroundColor = "green";
    boton.style.marginLeft = "950px";

}



function DisplayText(){
    var input = document.getElementById("First");
    var input2 = document.getElementById("Second");
    var output = document.getElementById("output");
    var result = (input.value*1) + (input2.value*1);
    

output.innerHTML = "Result :" + result;

}


function DisplayText2(){
    var input = document.getElementById("First");
    var input2 = document.getElementById("Second");
    var output = document.getElementById("output");
    var result = (input.value*1) - (input2.value*1);
    

output.innerHTML = "Result :" + result;

}


function DisplayText3(){
    var input = document.getElementById("First");
    var input2 = document.getElementById("Second");
    var output = document.getElementById("output");
    var result = (input.value*1) * (input2.value*1);
    

output.innerHTML = "Result :" + result;

}


function DisplayText4(){
    var input = document.getElementById("First");
    var input2 = document.getElementById("Second");
    var output = document.getElementById("output");
    var result = (input.value*1) / (input2.value*1);
    

output.innerHTML = "Result :" + result;

}

