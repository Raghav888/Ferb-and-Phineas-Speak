const btnTranslate = document.querySelector("#btn-tran")
const data = document.querySelector("#inputdata")
const out = document.querySelector("#output")
const img_out = document.querySelector("#img")
var url = "https://api.funtranslations.com/translate/ferb-latin.json?text="

function errorHandler(error) {
    console.log(error)
}

//milliseconds until timeout//
function hideElement() {
    document.getElementById("img_o").src = ""
}

function messgae() {
    url = url + data.value
    var data_out = fetch(url).then(response => response.json()).
    then(json => { out.innerText = json.contents.translated }).catch(errorHandler)

    document.getElementById("img_o").src = "thumbsup.gif"
    setTimeout(hideElement, 3000)
}
btnTranslate.addEventListener("click", messgae, false)