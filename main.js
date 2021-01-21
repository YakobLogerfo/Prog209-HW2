let firstArray = [];

document.addEventListener("DOMContentLoaded", function (event) {

         document.getElementById("changewords").style.visibility = "hidden";
         document.getElementById("changedwords").style.display = "none";
         document.getElementById("start").addEventListener("click", startprogram, false);
         document.getElementById("changewords").addEventListener("click", changewords, false);
        
    });


function startprogram() {
    for (let i = 0; i <3; i++){
        firstArray[i] =(prompt("pleasse enter a word"));
        let anotherli = document .createElement("li");
        anotherli.appendChild(document.createTextNode(firstArray[i]));
        document.getElementById("firstul").appendChild(anotherli);
    }
    document.getElementById("changewords").style.visibility = "visible";
    document.getElementById("start").style.visibility = "hidden";
}

function changewords(){
    document.getElementById("Getwords").style.display = "none";
    document.getElementById("changedwords").style.display = "block";

    let secondArray = firstArray.map(function(oneword){
        return oneword.charAt(oneword.length * 1) + oneword.substring(1, oneword.length * 1)
    });
     

    for (let i = 0; i < 3; i++){
        let anotherli = document.createElement("li");
        anotherli.appendChild(document.createTextNode(secondArray[i]));
        document.getElementById("secondul").appendChild(anotherli);
        
    }
}



