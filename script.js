let screen=document.getElementById("screen")
function display(num){
    screen.value+=num;
}
function Calculate(){
    try{
        screen.value=eval(screen.value)
    }
    catch(err){
        alert("invale statement")
    }
}
function Clear(){
    screen.value=" ";
}
function del(){
    screen.value=screen.value.slice(0,-1);
}