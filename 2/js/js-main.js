var resultArea = document.getElementById("result"),
cylinder = {
    height : 2,
    diameter :2,
    volume: function(){
        return 3.14*(this.diameter*this.diameter)*this.height
    }
},
object = {
    name: "Mohamed",
    age: 15,
    country:"Egypt"
};
//assignemnt One

function assignOne(){
    resultArea.innerHTML = " ";
    var input = prompt("Pleas Enter Any Number?"),value;
    if(input[0] === '[' && input[input.length - 1] === ']'){
        value = true;
    }
    else{
        value =false;
    }
    resultArea.innerHTML = "your input is  : <strong>"+value+"</strong>";
}

// assignment Two

function assignTwo(){
    resultArea.innerHTML = " ";
    var today = new Date();
    value = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
        resultArea.innerHTML = "Result: <strong>"+value+"</strong>";
}

//assignment Three

function assignThree(){
    resultArea.innerHTML = " ";
    var value = prompt("Please Enter your date?");
    var userDate = new Date(value);
    if(userDate.getDay() == 5 || userDate.getDay() == 6){
        resultArea.innerHTML = "Your date is <strong>Weekend</strong>";
    }
    else{
        resultArea.innerHTML = "Your date is <strong>Go to work</strong>";
    }
}

//assignment four

function assignFour(){
    resultArea.innerHTML = "";  
}

//assignment five

function assignFive(){
    resultArea.innerHTML = " ";
    var h = prompt("Enter the height of cylinder");
    var d = prompt("Enter the diameter of cylinder");
    cylinder.height = h;
    cylinder.diameter = d;
    resultArea.innerHTML = "The Volume of cylinder is : <strong>"+cylinder.volume()+"</strong>";
}

// assignment six

function assignSix(){
    resultArea.innerHTML = " ";
    var property = "";
    for(prop in object){
        property += " "+ object[prop];
    }
    resultArea.innerHTML = "Your object is : <strong>"+property+"</strong>";
}

//assignment seven

function assignSeven(){
    resultArea.innerHTML = " ";
    var a =[[2,4,2,1],[8,11,9,4],[7,0,7,27],[7,4,28,14],[3,10,26,7]];
    for(i=0;i<(a.length);i++){
        resultArea.innerHTML+= "row "+i+"<br>";
        for(j=0;j<a[i].length;j++){
            resultArea.innerHTML+= " "+ a[i][j];
        }
        resultArea.innerHTML+="<br>";
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