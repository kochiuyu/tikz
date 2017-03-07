function Example1() {
	clearAllinput();

    var A = [[1, 1, 9, 9, "S"], [1, 9, 9, 1, "D"], [0, 5, 5, 5, ""], [5, 0, 5, 5, ""]];

    for (var r = 1; r <= A.length; r++) {

        document.getElementById("a_" + r).value = A[r - 1][0];

        document.getElementById("b_" + r).value = A[r - 1][1];

        document.getElementById("c_" + r).value = A[r - 1][2];

        document.getElementById("d_" + r).value = A[r - 1][3];

        document.getElementById("linename_" + r).value = A[r - 1][4];

        document.getElementById("lineshow_" + r).checked = true;

    }

    DrawGraph(true);
}


function Example2() {
	clearAllinput();

    var A = [[0, 0, 9, 9, "y=x"]];

    var B = [[0, 0, 1, 5, 5, 6, 10, 7, "y=f(x)"]];

    var r;

    for (r = 1; r <= A.length; r++) {

        document.getElementById("a_" + r).value = A[r - 1][0];

        document.getElementById("b_" + r).value = A[r - 1][1];

        document.getElementById("c_" + r).value = A[r - 1][2];

        document.getElementById("d_" + r).value = A[r - 1][3];

        document.getElementById("linename_" + r).value = A[r - 1][4];

        document.getElementById("lineshow_" + r).checked = true;


    }

    for (r = 1; r <= B.length; r++) {

        document.getElementById("e_" + r).value = B[r - 1][0];

        document.getElementById("f_" + r).value = B[r - 1][1];

        document.getElementById("g_" + r).value = B[r - 1][2];

        document.getElementById("h_" + r).value = B[r - 1][3];

        document.getElementById("i_" + r).value = B[r - 1][4];

        document.getElementById("j_" + r).value = B[r - 1][5];

        document.getElementById("k_" + r).value = B[r - 1][6];

        document.getElementById("l_" + r).value = B[r - 1][7];

        document.getElementById("curvename_" + r).value = B[r - 1][8];

        document.getElementById("curveshow_" + r).checked = true;

    }


    DrawGraph(true);
	
	
	

}


function Example3() {
	clearAllinput();

    var A = [[0, 1, 10, 1, "MC"]];

    var B = [[2, 10, 3, 6, 6, 3, 10, 2, "AC"]];

    var r;

    for (r = 1; r <= A.length; r++) {

        document.getElementById("a_" + r).value = A[r - 1][0];

        document.getElementById("b_" + r).value = A[r - 1][1];

        document.getElementById("c_" + r).value = A[r - 1][2];

        document.getElementById("d_" + r).value = A[r - 1][3];

        document.getElementById("linename_" + r).value = A[r - 1][4];

        document.getElementById("lineshow_" + r).checked = true;


    }

    for (r = 1; r <= B.length; r++) {

        document.getElementById("e_" + r).value = B[r - 1][0];

        document.getElementById("f_" + r).value = B[r - 1][1];

        document.getElementById("g_" + r).value = B[r - 1][2];

        document.getElementById("h_" + r).value = B[r - 1][3];

        document.getElementById("i_" + r).value = B[r - 1][4];

        document.getElementById("j_" + r).value = B[r - 1][5];

        document.getElementById("k_" + r).value = B[r - 1][6];

        document.getElementById("l_" + r).value = B[r - 1][7];

        document.getElementById("curvename_" + r).value = B[r - 1][8];

        document.getElementById("curveshow_" + r).checked = true;

    }


    DrawGraph(true);
	
	


}


function Example4() {
	clearAllinput();

    var A = [[1, 9, 9, 1, "B"], [0, 5, 5, 5, ""], [5, 0, 5, 5, ""]];

    var B = [[2, 10, 3.33, 6, 6, 3.33, 10, 2, "U"]];

    var C = ["x_1", "x_2"];

    var r;

    //document.getElementById("xname").value = C[0];

    //document.getElementById("yname").value = C[1];

    //alert(C[1]);


    for (r = 1; r <= A.length; r++) {

        document.getElementById("a_" + r).value = A[r - 1][0];

        document.getElementById("b_" + r).value = A[r - 1][1];

        document.getElementById("c_" + r).value = A[r - 1][2];

        document.getElementById("d_" + r).value = A[r - 1][3];

        document.getElementById("linename_" + r).value = A[r - 1][4];

        document.getElementById("lineshow_" + r).checked = true;


    }

    for (r = 1; r <= B.length; r++) {

        document.getElementById("e_" + r).value = B[r - 1][0];

        document.getElementById("f_" + r).value = B[r - 1][1];

        document.getElementById("g_" + r).value = B[r - 1][2];

        document.getElementById("h_" + r).value = B[r - 1][3];

        document.getElementById("i_" + r).value = B[r - 1][4];

        document.getElementById("j_" + r).value = B[r - 1][5];

        document.getElementById("k_" + r).value = B[r - 1][6];

        document.getElementById("l_" + r).value = B[r - 1][7];

        document.getElementById("curvename_" + r).value = B[r - 1][8];

        document.getElementById("curveshow_" + r).checked = true;

    }


    DrawGraph(true);
	
	
	

}

function clearAllinput() {
	
	var A = [[0, 0, 0, 0, ""], [0, 0, 0, 0, ""], [0, 0, 0, 0, ""], [0, 0, 0, 0, ""]];

    var B = [[0, 0, 0, 0, 0, 0, 0, 0, ""]];

    var C = ["", ""];

    var r;


    for (r = 1; r <= A.length; r++) {

        document.getElementById("a_" + r).value = A[r - 1][0];

        document.getElementById("b_" + r).value = A[r - 1][1];

        document.getElementById("c_" + r).value = A[r - 1][2];

        document.getElementById("d_" + r).value = A[r - 1][3];

        document.getElementById("linename_" + r).value = A[r - 1][4];

        document.getElementById("lineshow_" + r).checked = true;


    }

    for (r = 1; r <= B.length; r++) {

        document.getElementById("e_" + r).value = B[r - 1][0];

        document.getElementById("f_" + r).value = B[r - 1][1];

        document.getElementById("g_" + r).value = B[r - 1][2];

        document.getElementById("h_" + r).value = B[r - 1][3];

        document.getElementById("i_" + r).value = B[r - 1][4];

        document.getElementById("j_" + r).value = B[r - 1][5];

        document.getElementById("k_" + r).value = B[r - 1][6];

        document.getElementById("l_" + r).value = B[r - 1][7];

        document.getElementById("curvename_" + r).value = B[r - 1][8];

        document.getElementById("curveshow_" + r).checked = true;

    }
}
