let calcPrompt = "";
function display(x) {
    calcPrompt = document.getElementById("prompt").value;
    document.getElementById("prompt").value = calcPrompt + x;
}

document.getElementById('prompt').value.length 

function solve() {
    var STR = "qwertyuiopasdfghjklzxcvbnm";
    let z= document.getElementById("prompt").value

    calcPrompt= eval(z);

    document.getElementById("prompt").value = calcPrompt

    return calcPrompt
   //// console.log(eval(document.getElementById("prompt").value))
    
}




document.getElementById("prompt").addEventListener("input",()=>{
    var ABC = "qwertyuiopasdfghjklzxcvbnm";
    var ELEM = document.getElementById("prompt");
    let V = document.getElementById("prompt").value;
       for(let i =0;i<V.length;i++){
       /// \\\console.log(V.substring(i,i+1))
        if(ABC.includes(V.substring(i,i+1)) == true || ABC.toUpperCase().includes(V.substring(i,i+1)) == true){
            ELEM.value = (V.substring(0,i)+V.substring(i+1,V.length));
        }
       }
 

//.substring(e.value.length-1,e.value.length)
})
