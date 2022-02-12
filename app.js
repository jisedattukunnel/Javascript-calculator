

var oldValue
var newValue
var op
var isResult = false;
var isOperatorClicked = false;


function clearText() {
    document.getElementById('result').value = ''
    document.getElementById('showOperator').innerHTML = ''
}


function moveNumbers1(num) {
    var txt = document.getElementById("result").value;
    txt = txt + num;
    document.getElementById("result").value = txt;
}





function operation(operations, operator) {
    isOperatorClicked = false
    //Get current value in textbox
    oldValue = document.getElementById('result').value;
    console.log("Old Value: "+oldValue);
    //oldValue = Old

    //Get operator
    var txt = document.getElementById("showOperator").innerHTML;
    txt = txt + operator;
    document.getElementById("showOperator").innerHTML = txt;
    isOperatorClicked = true;
    document.getElementById('result').value = ''

    op = operations
    console.log("OP: "+operations);
}



function equal() {
    newValue = document.getElementById('result').value;
    console.log("New Value: "+newValue);
    Old = parseFloat(oldValue)
    New = parseFloat(newValue)

    if (op == 'add'){
        result = Old + New;
    }
    else if (op == 'minus'){
        result= Old - New;
    }
    else if(op == 'star'){
        result = Old * New;
    }
    else{
        result = Old/New
    }
    console.log(result);
    document.getElementById('result').value = result;
    isResult = true
}

