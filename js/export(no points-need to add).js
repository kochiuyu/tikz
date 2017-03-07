
function pt(){
	var axisCP="";
	var curveCP="";
	var lineCP="";
	
	
	var axisLable = "Axis and Lable: </br>"
	if(document.getElementById("xsize").value!=0){
	axisCP +="X-Axis: &nbsp ("+document.getElementById("xsize").value+",0) &nbsp Name: ["+document.getElementById("xname").value+"]</br>"
	}
	if(document.getElementById("ysize").value!=0){
	axisCP +="Y-Axis: &nbsp ("+document.getElementById("ysize").value+",0) &nbsp Name: ["+document.getElementById("yname").value+"]</br>"
	}
	if(document.getElementById("label_x_1_name").value!=""){
	axisCP += "X-Lable_1:(0,"+document.getElementById("label_x_1").value+")</br>"
	}
	if(document.getElementById("label_x_2_name").value!=""){
	axisCP += "X-Lable_2:("+document.getElementById("label_x_2").value+",0)</br>"
	}
	if(document.getElementById("label_y_1_name").value!=""){
	axisCP += "Y-Lable_1:(0,"+document.getElementById("label_y_1").value+")</br>"
	}
	if(document.getElementById("label_y_2_name").value!=""){
	axisCP += "Y-Lable_2:(0,"+document.getElementById("label_y_2").value+")</br>"
	}
	document.getElementById("axisCopy").innerHTML= axisLable+axisCP;
	
	
	
    for(var j=1;j<counter_i;j++){
		if(document.getElementById("lineshow_"+j).checked==true){	
			if (document.getElementById("linedash_"+j).checked==true){
			var dashCP = " [dash] ";
			}else{
			var dashCP="";}
		var lineLable = "</br>Straight Line: </br>";
		lineCP +="Straight Line_"+j+": &nbsp ("+document.getElementById("a_"+j).value+","+document.getElementById("b_"+j).value+")--("+document.getElementById("c_"+j).value+","+document.getElementById("d_"+j).value+")&nbsp LineName["+document.getElementById("linename_"+j).value+"]&nbsp LineColor["+document.getElementById("lineColor_"+j).value+"]&nbsp"+dashCP+"</br>";
		document.getElementById("lineCopy").innerHTML= lineLable+lineCP;
		}
	}
	
	for(var j=1;j<counter_j;j++){
		if(document.getElementById("curveshow_"+j).checked==true){
			if(document.getElementById("curvedash_"+j).checked==true){
			var dashCP2=" [dash]";
			}else{
			var dashCP2="";}
		var curveLable="</br>Curve:</br>";
		curveCP += "Curve_"+j+": &nbsp ("+document.getElementById("e_"+j).value+","+document.getElementById("f_"+j).value+")--("+document.getElementById("g_"+j).value+","+document.getElementById("h_"+j).value+")--("+document.getElementById("i_"+j).value+","+document.getElementById("j_"+j).value+")--("+document.getElementById("k_"+j).value+","+document.getElementById("l_"+j).value+")&nbsp CurveName["+document.getElementById("curvename_"+j).value+"]&nbsp CurveColor["+document.getElementById("curvecolor_"+j).value+"]&nbsp"+dashCP2+"</br>";
		document.getElementById("curveCopy").innerHTML=curveLable+curveCP;
		}
	
	}
	
}
 
 