

var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector('#inputTxt');
var output = document.querySelector('#output');


var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationURL(text){

    return serverURL + "?" + "text="+text;
}


function errorHandler(error){
    console.log('error occured',error);

    alert("server down try after some time")
}



function clickHandler(){
    var inputValue = inputTxt.value;

    fetch(getTranslationURL(inputValue))
    .then(response => response.json())
    .then(data => {
        output.innerText = data.contents.translated;
    }).catch(errorHandler)
}

btnTranslate.addEventListener('click',clickHandler);