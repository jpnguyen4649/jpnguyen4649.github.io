function buttonFunction(){
    document.getElementById("textArea").style.fontSize = "24pt";
}

function fancyRadioFunc(){
    if(document.getElementById("fancySchmancy").checked){
        document.getElementById("textArea").style.fontWeight = "bold";
        document.getElementById("textArea").style.color = "blue";
        document.getElementById("textArea").style.textDecoration = "underline";
    }
}

function boringRadioFunc(){
    if(document.getElementById("boringBetty").checked){
        document.getElementById("textArea").style.fontWeight = "normal";
        document.getElementById("textArea").style.color = "black";
        document.getElementById("textArea").style.textDecoration = "none";
    }
}

function moo(){
    document.getElementById("textArea").value = document.getElementById("textArea").value.toUpperCase();
    var parts = document.getElementById("textArea").value.split(".");
    document.getElementById("textArea").value = parts.join("-Moo");

}