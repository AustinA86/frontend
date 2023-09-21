
let username;
document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("p1").innerHTML=username;

}