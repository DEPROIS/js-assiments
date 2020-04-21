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

//assignment twelve

function assignTwelve(){
    resultArea.innerHTML = " ";
    window.alert("Enter Markes of five Subjects");
    var markOne = Number(prompt("Pleas Enter First Mark?")),
        markTwo = Number(prompt("Pleas Enter Second Mark?")),
        markThree = Number(prompt("Pleas Enter Third Mark?")),
        markFour = Number(prompt("Pleas Enter Fourth Mark?")),
        markFive = Number(prompt("Pleas Enter Fivith Mark?")),
        sum,average,percentage;
    sum = markOne+markTwo+markThree+markFour+markFive;
    average = sum/5;
    percentage = (sum/500)*100;
    resultArea.innerHTML = "the Output is:<br>"
    resultArea.innerHTML += "Total marks is : <strong>"+sum+"</strong> <br>";
    resultArea.innerHTML += "Average marks is : <strong>"+average+"</strong> <br>";
    resultArea.innerHTML += "Percentage is : <strong>"+percentage+"%</strong>";
}

//assignment thirteen

function assignThirteen(){
    resultArea.innerHTML = " ";
    var month = Number(prompt("Please Enter Month Number?")),days;
    if(month == 1){
        resultArea.innerHTML = "the Mont Number Is : <strong>"+month+"</strong><br>";
        resultArea.innerHTML += "Days in month : <strong>31</strong>";
    }
    else if(month == 2){
        resultArea.innerHTML = "the Mont Number Is : <strong>"+month+"</strong><br>";
        resultArea.innerHTML += "Days in month : <strong>28</strong>";
    }
    else if(month == 3){
        resultArea.innerHTML = "the Mont Number Is : <strong>"+month+"</strong><br>";
        resultArea.innerHTML += "Days in month : <strong>31</strong>";
    }
    else if(month == 4){
        resultArea.innerHTML = "the Mont Number Is : <strong>"+month+"</strong><br>";
        resultArea.innerHTML += "Days in month : <strong>30</strong>";
    }
    else if(month == 5){
        resultArea.innerHTML = "the Mont Number Is : <strong>"+month+"</strong><br>";
        resultArea.innerHTML += "Days in month : <strong>31</strong>";
    }
    else if(month == 6){
        resultArea.innerHTML = "the Mont Number Is : <strong>"+month+"</strong><br>";
        resultArea.innerHTML += "Days in month : <strong>30</strong>";
    }
    else if(month == 7){
        resultArea.innerHTML = "the Mont Number Is : <strong>"+month+"</strong><br>";
        resultArea.innerHTML += "Days in month : <strong>31</strong>";
    }
    else if(month == 8){
        resultArea.innerHTML = "the Mont Number Is : <strong>"+month+"</strong><br>";
        resultArea.innerHTML += "Days in month : <strong>31</strong>";
    }
    else if(month == 9){
        resultArea.innerHTML = "the Mont Number Is : <strong>"+month+"</strong><br>";
        resultArea.innerHTML += "Days in month : <strong>30</strong>";
    }
    else if(month == 10){
        resultArea.innerHTML = "the Mont Number Is : <strong>"+month+"</strong><br>";
        resultArea.innerHTML += "Days in month : <strong>31</strong>";
    }
    else if(month == 11){
        resultArea.innerHTML = "the Mont Number Is : <strong>"+month+"</strong><br>";
        resultArea.innerHTML += "Days in month : <strong>30</strong>";
    }
    else if(month == 12){
        resultArea.innerHTML = "the Mont Number Is : <strong>"+month+"</strong><br>";
        resultArea.innerHTML += "Days in month : <strong>31</strong>";
    }
    else{
        resultArea.innerHTML = "the Mont Number Is : <strong>"+month+"</strong><br>";
        resultArea.innerHTML += "Days in month : <strong>No days Number because the month is out of range</strong>";
    }
}

//assignment fourteen

function assignFourteen(){
    resultArea.innerHTML = " ";
    window.alert("Enter Markes of five Subjects");
    var markOne = Number(prompt("Pleas Enter physics Mark?")),
        markTwo = Number(prompt("Pleas Enter chemistry Mark?")),
        markThree = Number(prompt("Pleas Enter Biology Mark?")),
        markFour = Number(prompt("Pleas Enter Mathematics Mark?")),
        markFive = Number(prompt("Pleas Enter computer Mark?")),
        sum,grade,percentage;
    sum = markOne+markTwo+markThree+markFour+markFive;
    percentage = (sum/500)*100;
    if(percentage>0&&percentage<40){
        grade = "Grade F";
    }
    else if(percentage>=40&&percentage<60){
        grade = "Grade E";
    }
    else if(percentage>=60&&percentage<70){
        grade = "Grade D";
    }
    else if(percentage>=70&&percentage<80){
        grade = "Grade C";
    }
    else if(percentage>=80&&percentage<90){
        grade = "Grade B";
    }
    else if(percentage>=90&&percentage<=100){
        grade = "Grade A";
    }
    resultArea.innerHTML = "the Output is:<br>"
    resultArea.innerHTML += "Total marks is : <strong>"+sum+"</strong> <br>";
    resultArea.innerHTML += "Percentage is : <strong>"+percentage+"%</strong><br>";
    resultArea.innerHTML += "grade is : <strong>"+grade+"</strong><br>";
}

//switch case

//assignment fifteen

function assignFifteen(){
    resultArea.innerHTML = " ";
    var month = Number(prompt("Please Enter Month Number?")),days;
    resultArea.innerHTML = "the Mont Number Is : <strong>"+month+"</strong><br>";
    switch(month){
        case 1: 
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            resultArea.innerHTML += "Days in month : <strong>31</strong>";
        break;

        case 2: 
            resultArea.innerHTML += "Days in month : <strong>28</strong>";
        break;
        
        case 4: 
        case 6:
        case 9:
        case 11:
            resultArea.innerHTML += "Days in month : <strong>30</strong>";
        break;
                
        default: resultArea.innerHTML += "Days in month : <strong>No days Number because the month is out of range</strong>";
    }
}

//assignment sixteen

function assignSixteen(){
    resultArea.innerHTML = " ";
    var char = prompt("Pleas Enter alphabet character?");
    switch(char.toLowerCase()){
        case 'a' :
        case 'e' :
        case 'i' :
        case 'o' :
        case 'u' :
            resultArea.innerHTML = "Your Alphabet Character '"+char.toUpperCase()+"' is: <strong>Vowel</strong>";
        break;
        default:
            resultArea.innerHTML = "Your Alphabet Character '"+char.toUpperCase()+"' is: <strong>Consonant</strong>";
    }
}

//assignment seventeen

function assignSeventeen(){
    resultArea.innerHTML = " ";
    var firstNumber = Number(prompt("Pleas Enter First Number?")),
    secondNumber = Number(prompt("Pleas Enter Second Number?"));
    switch(firstNumber > secondNumber){
        case true :
            resultArea.innerHTML = "Your numbers are "+firstNumber+" , "+secondNumber+"<br>The Result of the max is: <strong>"+firstNumber+"</strong>";
        break;
        default:
            resultArea.innerHTML = "Your numbers are "+firstNumber+" , "+secondNumber+"<br>The Result of the max is: <strong>"+secondNumber+"</strong>";
    }   
}

//assignment seventeen

function assignEighteen(){
    resultArea.innerHTML = " ";
    var value = Number(prompt("Pleas Enter First Number?"));
    switch(value%2==0){
        case true :
            resultArea.innerHTML = "Your Nummber "+value+" is: <strong>Even</strong>";
        break;
        default:
            resultArea.innerHTML = "Your Nummber "+value+" is: <strong>Odd</strong>";
    }   
}

//assignment seventeen

function assignNinteen(){
    resultArea.innerHTML = " ";
    var value = Number(prompt("Pleas Enter First Number?"));
    switch(value%2==0){
        case true :
            resultArea.innerHTML = "Your Nummber "+value+" is: <strong>Even</strong>";
        break;
        default:
            resultArea.innerHTML = "Your Nummber "+value+" is: <strong>Odd</strong>";
    }   
}

//assignment seventeen

function assignNinteen(){
    resultArea.innerHTML = " ";
    var value = Number(prompt("Pleas Enter First Number?"));
    switch(value < 0 ){
        case true :
            resultArea.innerHTML = "Your Nummber "+value+" is: <strong>Negative</strong>";
        break;
        case false :
            switch(value>0){
                case true:
                    resultArea.innerHTML = "Your Nummber "+value+" is: <strong>Positive</strong>";
                    break;
                default:
                    resultArea.innerHTML = "Your Nummber "+value+" is: <strong>Zero</strong>";
            }
        }   
}

//assignment seventeen

function assignTweenty(){
    resultArea.innerHTML = " ";
    var firstNumber = Number(prompt("Please Enter First Number?")),
        operationSign = Number(prompt("Please choose operation sign Number?\n1 for addtion\n2 for subtrction\n3 for multiplcation\n4 for division")),
        secondNumber = Number(prompt("Please Enter First Number?")),calc;
    resultArea.innerHTML = "the Output calculation result is: ";
    switch(operationSign){
        case 1 :
            calc = firstNumber + secondNumber;
            resultArea.innerHTML += "<strong>"+calc+"</strong>";
        break;
        case 2 :
            calc = firstNumber - secondNumber;
            resultArea.innerHTML += "<strong>"+calc+"</strong>";
        break;
        case 3 :
            calc = firstNumber * secondNumber;
            resultArea.innerHTML += "<strong>"+calc+"</strong>";
        break;
        case 4 :
            calc = firstNumber / secondNumber;
            resultArea.innerHTML += "<strong>"+calc+"</strong>";
        break;
    }
}