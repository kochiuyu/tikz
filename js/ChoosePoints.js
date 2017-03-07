function test(cb) {
    drawingline = true;
    cleanCheckbox("curveform");
	cleanCheckbox("Retangularform");
    for (j = 0; j < counter_i; j++) {
        if (eval("document.myform.onlyOne[" + j + "].checked") == true) {
            document.myform.onlyOne[j].checked = false;
            if (j == cb) {
                document.myform.onlyOne[j].checked = true;
            }
        }
    }
}

//for rectangle point
function test5(op) {
    cleanCheckbox("lineform");
	cleanCheckbox("curveform");
    drawingline = true;
    if(op%2==1){
        onlyonepoint = true;
    }else{
        onlyonepoint = false;
    }

    for (j = 0; j < 3 * counter_z; j++) {
        if (eval("document.myform3.onlyPR[" + j + "].checked") == true) {
            document.myform3.onlyPR[j].checked = false;
            if (j == op) {
                document.myform3.onlyPR[j].checked = true;
            }
        }
    }
}
//for line point
function test1(ad) {
    cleanCheckbox("curveform");
	cleanCheckbox("Retangularform");
    drawingline = true;
    if(ad%2==1){
        onlyonepoint = true;
    }else{
        onlyonepoint = false;
    }

    for (j = 0; j < 3 * counter_i; j++) {
        if (eval("document.myform.onlyP[" + j + "].checked") == true) {
            document.myform.onlyP[j].checked = false;
            if (j == ad) {
                document.myform.onlyP[j].checked = true;
            }
        }
    }
}

function test2(ef) {
    drawingline = false;
    onlyonepoint = false;
    cleanCheckbox("lineform");
	cleanCheckbox("Retangularform");
    for (j = 0; j < counter_j; j++) {
        if (eval("document.myform2.onlyOne[" + j + "].checked") == true) {
            document.myform2.onlyOne[j].checked = false;
            if (j == ef) {
                document.myform2.onlyOne[j].checked = true;
            }
        }
    }
}

function test4(cb) {
    //drawingline = true;
    cleanCheckbox("curveform");
	cleanCheckbox("lineform");
    for (j = 0; j < counter_i; j++) {
        if (eval("document.myform3.onlyOne[" + j + "].checked") == true) {
            document.myform3.onlyOne[j].checked = false;
            if (j == cb) {
                document.myform3.onlyOne[j].checked = true;
            }
        }
    }
}

function cleanCheckbox(formid){
    var cks = document.getElementById(formid).getElementsByTagName("input");
    for(var i = 0 ; i < cks.length ; i++){
        if(cks[i].type!="checkbox"||(cks[i].id&&(cks[i].id.indexOf("lineshow")>=0
            ||cks[i].id.indexOf("curveshow")>=0||cks[i].id.indexOf("retangularshow")>=0))){
            continue;
        }
        cks[i].checked = false;
    }
}
//for curve point
function test3(mn) {
    drawingline = false;
    if(!isNaN(mn)&&mn%5!=0){
        onlyonepoint = true;
    }else{
        onlyonepoint = false;
    }
    cleanCheckbox("lineform");
    cleanCheckbox("Retangularform");
    for (j = 0; j < 5 * counter_j; j++) {
        if (eval("document.myform2.onlyPC[" + j + "].checked") == true) {
            document.myform2.onlyPC[j].checked = false;
            if (j == mn) {
                document.myform2.onlyPC[j].checked = true;
            }
        }
    }
}