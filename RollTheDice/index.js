function RandamNo() {
    var rdmNo = Math.ceil(Math.random() * 6);
    return rdmNo;
}



function print(m1,m2,m3) {
    var mem1 = document.getElementById('member-1');
    mem1.innerHTML = m1;
    var mem2 = document.getElementById('member-2');
    mem2.innerHTML = m2;
    var mem3 = document.getElementById('member-3');
    mem3.innerHTML = m3;
    if(m1==m2 && m1==m3){        
        mem1.style.backgroundColor = "blue";
        mem2.style.backgroundColor = "blue";
        mem3.style.backgroundColor = "blue";
        var win = document.getElementById('winner');
        win.innerHTML = "Its a Tie"
    }
    else if(m1 > m2 && m1 > m3){
        var win = document.getElementById('winner');
        win.innerHTML = "Member 1"
        mem1.style.backgroundColor = "#00FF00";
        if(m3==m2){
            mem2.style.backgroundColor = "blue";
            mem3.style.backgroundColor = "blue";
        }
        else if(m2 > m3){
            mem2.style.backgroundColor = "yellow";
            mem3.style.backgroundColor = "red";
        }
        else{
            mem2.style.backgroundColor = "red";
            mem3.style.backgroundColor = "yellow";
        }
    }
    else if(m2 > m1 && m2 > m3){
        var win = document.getElementById('winner');
        win.innerHTML = "Member 2"
        mem2.style.backgroundColor = "#00FF00";
        if(m1==m2){
            mem2.style.backgroundColor = "blue";
            mem1.style.backgroundColor = "blue";
        }
        else if(m1 > m3){
            mem1.style.backgroundColor = "yellow";
            mem3.style.backgroundColor = "red";
        }
        else{
            mem1.style.backgroundColor = "red";
            mem3.style.backgroundColor = "yellow";
        }
    }
    else{
        var win = document.getElementById('winner');
        win.innerHTML = "Member 3"
        mem3.style.backgroundColor = "#00FF00";
        if(m1==m2){
            mem2.style.backgroundColor = "blue";
            mem1.style.backgroundColor = "blue";
        }
        else if(m1 > m2){
            mem1.style.backgroundColor = "yellow";
            mem2.style.backgroundColor = "red";
        }
        else{
            mem1.style.backgroundColor = "red";
            mem2.style.backgroundColor = "yellow";
        }
    }
}


var button = document.getElementById('roll');

button.onclick = function() {
    var m1 = RandamNo();
    var m2 = RandamNo();
    var m3 = RandamNo();
    print(m1,m2,m3);
};
