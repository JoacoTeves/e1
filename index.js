var a1, a2, a3, a5, a6, a7, a8, a9;

    a1 = document.getElementById("a1").value;
    a2 = document.getElementById("a2").value;
    a3 = document.getElementById("a3").value;
    a5 = document.getElementById("a4").value;
    a6 = document.getElementById("a5").value;
    a7 = document.getElementById("a6").value;
    a8 = document.getElementById("a7").value;
    a9 = document.getElementById("a8").value;
    09 = document.getElementById("a9").value;

    if ((a1 == 'x' || a1 == 'X') && (a2 == 'x' ||
    a2 == 'X') && (a3 == 'x' || a3 == 'X')) {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("a5").disabled = true;
    document.getElementById("a6").disabled = true;
    document.getElementById("a7").disabled = true;
    document.getElementById("a8").disabled = true;
    document.getElementById("a9").disabled = true;
    document.getElementById("09").disabled = true;
    window.alert('Player X won');
    }
    else if ((a1 == 'x' || a1 == 'X') && (a5 == 'x' ||
        a5 == 'X') && (a8 == 'x' || a8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a9").disabled = true;
        document.getElementById("09").disabled = true;
 
        window.alert('Player X won');
    }
    else if ((a8 == 'x' || a8 == 'X') && (a9 == 'x' ||
        a9 == 'X') && (09 == 'x' || 09 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a7").disabled = true;
        window.alert('Player X won');
    }
    else if ((a3 == 'x' || a3 == 'X') && (a7 == 'x' ||
        a7 == 'X') && (09 == 'x' || 09 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;
        window.alert('Player X won');
    }
    else if ((a1 == 'x' || a1 == 'X') && (a6 == 'x' ||
        a6 == 'X') && (09 == 'x' || 09 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;
        window.alert('Player X won');
    }
    else if ((a3 == 'x' || a3 == 'X') && (a6 == 'x' ||
        a6 == 'X') && (a8 == 'x' || a8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a9").disabled = true;
        document.getElementById("09").disabled = true;
        window.alert('Player X won');
    }
    else if ((a2 == 'x' || a2 == 'X') && (a6 == 'x' ||
        a6 == 'X') && (a9 == 'x' || a9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("09").disabled = true;
        window.alert('Player X won');
    }
    else if ((a5 == 'x' || a5 == 'X') && (a6 == 'x' ||
        a6 == 'X') && (a7 == 'x' || a7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;
        document.getElementById("09").disabled = true;
        window.alert('Player X won');
    }
    else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
        b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
        b4 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
        b8 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
        b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
        b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
        b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
        b5 == '0') && (b8 == '0' || b8 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
        b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
        b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
        b8 == '0') && (b9 == 'X' || b9 == '0')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
    else {
 
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
    flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
 
function myfunc_4() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
 
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
 
function myfunc_6() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
 
function myfunc_7() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
 
function myfunc_8() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
 
function myfunc_9() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
 
function myfunc_10() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
 
function myfunc_11() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}
//cambiar contenido
/*document.getElementById("a1").onclick = function(){
    this.textContent = 'x';
}
document.getElementById("a2").onclick = function(){
    this.textContent = 'x';
}
document.getElementById("a3").onclick = function(){
    this.textContent = 'x';
}
document.getElementById("a4").onclick = function(){
    this.textContent = 'x';
}
document.getElementById("a5").onclick = function(){
    this.textContent = 'x';
}
document.getElementById("a6").onclick = function(){
    this.textContent = 'x';
}
document.getElementById("a7").onclick = function(){
    this.textContent = 'x';
}
document.getElementById("a8").onclick = function(){
    this.textContent = 'x';
}
document.getElementById("a9").onclick = function(){
    this.textContent = 'x';
}*/