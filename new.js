var count = 0;
var btn = document.getElementById("btn");
var disp = document.getElementById("display");
  
btn.onclick = function () {
    count++;
    disp.innerHTML = count;
    if (count === 9999){
        getFlag();
    }
    if (count === 1){
        warning()
    }
}

function getFlag(){
    location.href = "flag/flag.html";
}

function warning(){
    document.getElementById('new').innerHTML = 'Now are you going to click it 9999 times? XD';
    document.getElementById('new').style.color = "aqua";
    document.getElementById('new').style.fontWeight= "bold";
    document.getElementById('hint').innerHTML = '<span id="hint-here">You can find some hint here.</span>';
    document.getElementById('btn').style.color = "white";
    document.getElementById('btn').style.border = "2px solid white";
    document.getElementById('btn').style.padding = "5px";
}
