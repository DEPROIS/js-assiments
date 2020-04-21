var resultArea = document.getElementById("result");
//assignemnt One

function assignOne(){
    resultArea.innerHTML = " ";
    var value = Number(prompt("Pleas Enter Any Number?"));
    resultArea.innerHTML = "The Number is : <strong>"+value+"</strong>";
}

// assignment Two

function assignTwo(){
    resultArea.innerHTML = " ";
    var value = Number(prompt("Pleas Enter Any Number?"));
    if(value%3 == 0 && value%4==0){
        resultArea.innerHTML = "Result: <strong>Yes</strong>";
    }
    else{
        resultArea.innerHTML = "Result: <strong>No</strong>";
    }
}

//assignment Three

function assignThree(){
    resultArea.innerHTML = " ";
    var firstNumber = Number(prompt("Pleas Enter First Number?"));
    var secondNumber = Number(prompt("Pleas Enter Second Number?"));
    if(firstNumber>secondNumber){
        resultArea.innerHTML = "Your numbers are "+firstNumber+" , "+secondNumber+"<br>The Result of the max is: <strong>"+firstNumber+"</strong>";
    }
    else{
        resultArea.innerHTML = "Your numbers are "+firstNumber+" , "+secondNumber+"<br>The Result of the max is: <strong>"+secondNumber+"</strong>";
    }
}

//assignment four

function assignFour(){
    resultArea.innerHTML = " ";
    var value = Number(prompt("Pleas Enter an integer Number?"));
    if(value<0){
        resultArea.innerHTML = "Your numbers is:"+" <strong>Negative</strong>";
    }
    else{
        resultArea.innerHTML = "Your numbers is:"+" <strong>Positive</strong>";
    }
}

//assignment five

function assignFive(){
    resultArea.innerHTML = " ";
    var firstNumber = Number(prompt("Pleas Enter First Number?"));
    var secondNumber = Number(prompt("Pleas Enter Second Number?"));
    var thirdNumber = Number(prompt("Pleas Enter Third Number?"));
    var max,min;
    if(firstNumber>secondNumber){
        min = secondNumber;
        if(firstNumber>thirdNumber){
            max =firstNumber;
            if(secondNumber>thirdNumber){
                min=thirdNumber;
            }
            else{
                min = secondNumber;
            }
        }
        else{
            max = thirdNumber;
        }
    }
    else{
        min = firstNumber;
        if(secondNumber>thirdNumber){
            max = secondNumber;
            if(firstNumber>thirdNumber){
                min=thirdNumber;
            }
            else{
                min = firstNumber;
            }
        }
        else{
            max = thirdNumber;
        }
    }
    resultArea.innerHTML = "Your max Nummber is:"+" <strong>"+max+"</strong><br>" + 
                            "Your min Nummber is:"+" <strong>"+min+"</strong>";
}

// assignment six

function assignSix(){
    resultArea.innerHTML = " ";
    var value = Number(prompt("Pleas Enter Your Number?"));
    if(value%2==0){
        resultArea.innerHTML = "Your Nummber "+value+" is: <strong>even</strong>";
    }
    else{
        resultArea.innerHTML = "Your Nummber "+value+" is: <strong>odd</strong>";
    }
}

//assignment seven

function assignSeven(){
    resultArea.innerHTML = " ";
    var char = prompt("Pleas Enter alphabet character?");
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' ||char == 'u'){
        resultArea.innerHTML = "Your Alphabet Character '"+char.toUpperCase()+"' is: <strong>Vowel</strong>";
    }
    else{
        resultArea.innerHTML = "Your Alphabet Character '"+char.toUpperCase()+"' is: <strong>Consonant</strong>";
    }
}

//assignment eight

function assignEight(){
    resultArea.innerHTML = " ";
    var value = Number(prompt("Pleas Enter Your Number?")),i;
    resultArea.innerHTML = "the Output is:<br>" 
    for(i=1;i<=value;i++){
        resultArea.innerHTML += "<strong>"+i+"</strong> ";
    }
}

//assignment nine

function assignNine(){
    resultArea.innerHTML = " ";
    var value = Number(prompt("Pleas Enter Your Number?")),i;
    resultArea.innerHTML = "the Output is:<br>" 
    for(i=1;i<=12;i++){
        resultArea.innerHTML += "<strong>"+value*i+"</strong> ";
    }
}

//assignment ten

function assignTen(){
    resultArea.innerHTML = " ";
    var value = Number(prompt("Pleas Enter Your Number?")),i;
    resultArea.innerHTML = "the Output is:<br>" 
    for(i=1;i<=value;i++){
        if(i%2==0){
            resultArea.innerHTML += "<strong>"+i+"</strong> ";
        }
    }
}

//assignment eleven

function assignEleven(){
    resultArea.innerHTML = " ";
    var value = Number(prompt("Pleas Enter Your Number?")),
    i,
    result=1
    ,power=Number(prompt("Pleas Enter the Number Power"));
    resultArea.innerHTML = "the Output is:<br>" 
    for(i=1;i<=power;i++){
        result = result*value;
    }
    resultArea.innerHTML += "<strong>"+result+"</strong> ";
}