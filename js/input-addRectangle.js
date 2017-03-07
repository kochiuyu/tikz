//AddLine create new form for drawing rectangle
function AddRec(form) {
	rr = 1;
	var tempDIV = document.createElement('div');
	
	var tempStr = 'Rectangle '+counter_z+': (<input type="text" id="r_'+counter_z+'" size="5" VALUE="0">,<input type="text" id="s_'+counter_z+'" size="5" VALUE="0">)--(<input type="text" id="t_'+counter_z+'" size="5" VALUE="0">,<input type="text" id="u_'+counter_z+'" size="5" VALUE="0">)Show<input type="checkbox" id="retangularshow_'+counter_z+'"checked>mouseDraw<input type="checkbox"  name="onlyOne"  id="mouseDR_'+counter_z+'" onClick="javascript:test4('+ (counter_z - rr) + ')">allPoints<input type="checkbox"  name="onlyPR"    id="retangular_'+counter_z+'"     onClick="javascript:test5(0)">point1<input   type="checkbox"  name="onlyPR"    id="RP1_'+counter_z+'"     onClick="javascript:test5(1)">point2<input   type="checkbox"  name="onlyPR"    id="RP2_'+counter_z+'"     onClick="javascript:test5(2)"></br>Dash<input type="checkbox" id="retangulardash_'+counter_z+'">Name<input type="text" id="retangularname_'+counter_z+'" size="5" VALUE="">';
tempStr += 'lineColour:';
tempStr += '<select id="retangularColor_'+counter_z+'">';
tempStr += '<option value = "black" selected>black</option>';
tempStr += '<option value = "yellow">yellow</option>';
tempStr += '<option value = "red">red</option>';
tempStr += '<option value = "blue">blue</option>';
tempStr += '<option value = "purple">purple</option>';
tempStr += '<option value = "brown">brown</option>';
tempStr += '<option value = "orange">orange</option>';
tempStr += '<option value = "green">green</option>';
tempStr += '</select>';


	tempDIV.innerHTML = tempStr;

	form.appendChild(tempDIV);
	form.appendChild(document.createElement('br'));
	
	counter_z++;
}