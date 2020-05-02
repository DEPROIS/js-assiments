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
},
arrayEightOne = [4,0,1,3,4],
arrayEightTwo = [3,5,7,7,2,13],
arraySum=[],
arrayNineOne = [1,2,3],
arrayNineTwo = [8,25,2,1,9],
arrayUnion=[],
arrayTenOne = [1,2,3,4],
arrayDays=[31,28,31,30,31,30,31,31,30,31,30,31];
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
    if(arrayEightOne.length>arrayEightTwo.length){
        var diff = arrayEightOne.length - arrayEightTwo.length;
        for(j=0;j<diff;j++){
            arrayEightTwo.push(0);
        }
        for(i=0;i<arrayEightOne.length;i++){
            arraySum.push((arrayEightOne[i]+arrayEightTwo[i]));
        }
        for(k=0;k<arraySum.length;k++){
            resultArea.innerHTML+= " "+ arraySum[k];
        }
        
    }
    else{
        var diff = arrayEightTwo.length - arrayEightOne.length;
        for(j=0;j<diff;j++){
            arrayEightOne.push(0);
        }
        for(i=0;i<arrayEightTwo.length;i++){
            arraySum.push((arrayEightOne[i]+arrayEightTwo[i]));
        }
        for(k=0;k<arraySum.length;k++){
            resultArea.innerHTML+= " "+ arraySum[k];
        }
    }
}

//assignment nine

function assignNine(){
    resultArea.innerHTML = " ";
    if(arrayNineOne.length>arrayNineTwo.length){
        arrayUnion = arrayNineOne;
        for(i=0;i<arrayNineTwo.length;i++){
            if(arrayNineOne.indexOf(arrayNineTwo[i]) === -1){
               arrayUnion.push(arrayNineTwo[i]);
            }
        }
    } else {
        arrayUnion = arrayNineTwo;
        for(i=0;i<arrayNineOne.length;i++){
            if(arrayNineTwo.indexOf(arrayNineOne[i]) === -1){
               arrayUnion.push(arrayNineOne[i]);
            }
        }
    }

    for(k=0;k<arrayUnion.length;k++){
        resultArea.innerHTML+= " "+ arrayUnion[k];
    }
}

//assignment ten

function assignTen(){
    resultArea.innerHTML = " ";
    var value = Number(prompt("Please Enter Your Number?"));
    if(arrayTenOne.indexOf(value) !== -1){
        resultArea.innerHTML = "Your value is <b>True</b>";    
    }
    else{
        resultArea.innerHTML = "Your value is <b>False</b>";
    }
}

//assignment eleven

function assignEleven(){
    resultArea.innerHTML = " ";
    var value = prompt("Enter the date");
    var userDate = new Date(value);
    var day = arrayDays[userDate.getMonth()];
    resultArea.innerHTML = "The total days <b>"+day+"</b>";
}