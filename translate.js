
// var input = prompt("Enter your name");
// alert("Wlcome "+input+ " to Translate to Yoda")
var url="https://api.funtranslations.com/translate/yoda.json";
var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#id-textArea");
var outputdiv = document.querySelector("#id-outputdiv");

btnTranslate.addEventListener("click",function(){
    clickEventHandler();
});

function clickEventHandler(){
    //console.log("clicked");
    //outputdiv.innerText = inputText.value;
    fetch(url+"?text="+inputText.value)
    .then(response=> response.json())
    .then(json => {
        console.log(json);
        console.log(json.contents.translated);
        var translatedText = json.contents.translated;
        outputdiv.innerText = translatedText;
    })

};   