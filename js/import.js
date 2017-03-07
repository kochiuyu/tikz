function  handleFiles(files){
    if(files.length){
        var file = files[0];
        var reader = new FileReader();
        reader.onload = function(){
            var rows = this.result.split('\n');
            var li = 1;
            var ci = 1;
			var ret = 1;
            for(var i = 0 ; i < rows.length ; i++){
                if('' == rows[i]){
                    continue;
                }

                if(rows[i].indexOf(':')>0){
                    try {
                        (function () {
                            var commands = rows[i].split(":");
                            var vls = commands[1].split(",");
                            if (commands[0] == 'LO') {
                                putValue("label_origin_name",vls[0]);
                            } else if (commands[0] == 'LXA') {
                                putValue("label_x_1_name",vls[0]);
                                putValue("label_x_1",vls[1]);
                                putValue("label_x_2_name",vls[2]);
                                putValue("label_x_2",vls[3]);
                            } else if (commands[0] == 'LYA') {
                                putValue("label_y_1_name",vls[0]);
                                putValue("label_y_1",vls[1]);
                                putValue("label_y_2_name",vls[2]);
                                putValue("label_y_2",vls[3]);
                            } else if (commands[0] == 'AXIS') {
                                putValue("xsize",vls[0]);
                                putValue("xname",vls[1]);
                                putValue("ysize",vls[2]);
                                putValue("yname",vls[3]);
                            } else if (commands[0] == 'retangular') {
								if(ret > 1){
									return;
								}
								putValue('r_'+ret,vls[0]);
								putValue('s_'+ret,vls[1]);
								putValue('t_'+ret,vls[2]);
								putValue('u_'+ret,vls[3]);
								putValue('retangularname_'+ret,vls[4]);
								setDash('retangulardash_'+ret,vls[5]);
								setColor('retangularColor_'+ret,vls[6]);
								ret++;
							}
                        })();
                    }catch(e){
                        console.log(e);
                    }
                    continue;
                }

                var points = rows[i].split(",");
                if(points.length == 7){ //line
                    if(li > 4){
                        AddLine(document.getElementById('lineform'));
                    }
                    putValue('a_'+li,points[0]);
                    putValue('b_'+li,points[1]);
                    putValue('c_'+li,points[2]);
                    putValue('d_'+li,points[3]);
					putValue('linename_'+li,points[4]);
					setDash('linedash_'+li,points[5]);
					setColor('lineColor_'+li,points[6]);
                    li++;
                }else if(points.length == 11){
                    if(ci > 2){
                        AddCurve(document.getElementById('curveform'));
                    }
                    putValue('e_'+ci,points[0]);
                    putValue('f_'+ci,points[1]);
                    putValue('g_'+ci,points[2]);
                    putValue('h_'+ci,points[3]);
                    putValue('i_'+ci,points[4]);
                    putValue('j_'+ci,points[5]);
                    putValue('k_'+ci,points[6]);
                    putValue('l_'+ci,points[7]);
					putValue('curvename_'+ci,points[8]);
					setDash('curvedash_'+ci,points[9]);
					setColor('curveColor_'+ci,points[10]);
                    ci++;
                }
            }
        };
        reader.readAsText(file);
    }
}

function setDash(id,value) {
	if (value == 'dash') {
		document.getElementById(id).checked = true;
	}
}

function setColor(id,value) {
	value = value.replace(/\s/g,'');
	var allowColorArr = ['black','yellow','red','blue','purple','brown','orange','green'];
	var isAllow = false;
	for (var i in allowColorArr) {
		if (allowColorArr[i] == value) {
			isAllow = true;
			break;
		}
	}
	
	if (isAllow) {
		document.getElementById(id).value = value;
	}
}

function putValue(id,value){
    document.getElementById(id).value = value?value:document.getElementById(id).value;
}