/*
Website: Boobmarker
auther: Mohamed Elsayed
*/
//inti values for my bookmarker App
var siteName = document.getElementById("siteName"),
    siteUrl = document.getElementById("siteUrl"),
    appButton = document.getElementById("submit"),
    nameValidate = document.getElementById("nameValidate"),
    urlValidate = document.getElementById("urlValidate"),
    displayData = document.getElementById("showData"),
    bookmarkData,
    display,
    arraydata,
    getstore,
    dataparsing
    toggelFlag=1,
    bookmarkArray =[];

//expression invoke function to hidden the alerts elements

(function(){
    nameValidate.style.display = "none";
    urlValidate.style.display = "none";
    //get data from local storage
    var getstore = localStorage.getItem("bookmark");
    dataparsing = JSON.parse(getstore);
    bookmarkArray=dataparsing;
    bookmarkShow();
})();

//Statment function cheeck the bookmark site name value
function checkName(name){
    if(name === ""){
        nameValidate.style.display = "block";
        nameValidate.innerHTML="<strong>Name is required</strong>";
        toggelFlag=0;
    }
    else{
        nameValidate.style.display = "none";
        toggelFlag=1;
    }
}
//Statment function cheeck the bookmark site URL value
function checkUrl(url){
    if(url === ""){
        urlValidate.style.display = "block";
        urlValidate.innerHTML="<strong>Url Field is required</strong>";
        toggelFlag=0;
    }
    else{
        urlValidate.style.display = "none";
        toggelFlag=1;
    }
}

//Statment function Add the bookmark values to its bojects

function bookmarkAdd(name,url){
    bookmarkData = {
        bookmarkName:name,
        bookmarkUrl:url
    }
    bookmarkArray.push(bookmarkData);
    siteName.value="";
    siteUrl.value="";
    bookmarkShow();
    //set 
    arraydata = JSON.stringify(bookmarkArray);
    datastor = localStorage.setItem("bookmark",arraydata);
}
//Statment function Show the bookmark values to its bojects
function bookmarkShow(){
    display =``;
    for(increment =0; increment< bookmarkArray.length;increment++){
        display += `<div class="dataShow my-3 p-3">
        <div class="row">
            <div class="col-sm-4">
                <h2 class="font-weight-bold">`+bookmarkArray[increment].bookmarkName+`</h2>
            </div>
            <div class="col-sm-4">
                <a target="_blank" href="`+bookmarkArray[increment].bookmarkUrl+`" class="btn btn-primary" type="button">Visit</a>
                <button onclick="bookmarkDelete(`+increment+`)" class="btn btn-danger" type="button">Delete</button>
            </div>
        </div>
    </div>`;
    }
    displayData.innerHTML = display;
}
//Statment function Delete the bookmark values to its bojects
function bookmarkDelete(index){
    bookmarkArray.splice(index,1);
    bookmarkShow();
    //update bookmark Local storage
    arraydata = JSON.stringify(bookmarkArray);
    datastor = localStorage.setItem("bookmark",arraydata);
}
//Event for submitting data
appButton.onclick = function(){
    checkName(siteName.value);
    checkUrl(siteUrl.value);
    if(toggelFlag === 1){
        bookmarkAdd(siteName.value,siteUrl.value);
    }
}