var i=0, typedtext;
typedtext= " <Hello, World! This is Kazi Wali>";
function typing(){
    if (i<typedtext.length){
        document.getElementById("typedtext").innerHTML += typedtext.charAt(i);
        i++;
        setTimeout(typing,130);
    }
    

} ;

function fadein(){
    const languages = document.getElementById("languages");
    languages.style.opacity="1";
}



window.addEventListener("load", typing)
window.addEventListener("load", fadein)

