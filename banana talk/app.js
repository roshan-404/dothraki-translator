var buttonTanslate = document.querySelector("#btnTranslate");
buttonTanslate.addEventListener("click", buttonClick)

var inputTxt = document.querySelector("#inputText");

var outputText = document.querySelector("#output");

// https://api.funtranslations.com/translate/dothraki.json

var url = "https://api.funtranslations.com/translate/dothraki.json"
function buttonClick(event) {
    var input = inputTxt.value;
    var finalUrl = constructedUrl(input);
       
    fetch(finalUrl)
    .then(response => response.json())
    .then(json => {outputText.innerText = json.contents.translated })
    .catch(() => alert("some error occured"))    

}

function constructedUrl(inputvalue){
    return url + "?" + "text=" + inputvalue; 
}

