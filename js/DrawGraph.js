// main function to draw canvas and produce tikz code
function DrawGraph(isEample) {
	
	var axis = "\\draw[thick,<->] (0,"+ document.getElementById("ysize").value+") node[above]{$"+document.getElementById("yname").value+"$}--(0,0)--("+document.getElementById("xsize").value+",0) node[right]{$"+document.getElementById("xname").value+"$}; % Axis and Lable<br>";
	var lines="";
	var curves="";
	var rects="";
	
	if (isEample) {
		var myxsize = 10;
		var myysize = 10;
		var myxname = 'Q';
		var myyname = 'P';
		
		document.getElementById("xsize").value = myxsize;
		document.getElementById("ysize").value = myysize;
		document.getElementById("xname").value = myxname;
		document.getElementById("yname").value = myyname;
		document.getElementById("label_origin_name").value = 'o';
		
		/*var mycnv = document.getElementById("myCanvas");
		var myctx = mycnv.getContext("2d");
		myctx.clearRect(0, 0, mycnv.width, mycnv.height);
		
		var mybgcanvas = document.getElementById("bgcanvas");
		var mybgctx = mybgcanvas.getContext("2d");
		mybgctx.clearRect(0,0,mybgcanvas.width, mybgcanvas.height);*/
		
	} else {
		var myxsize = document.getElementById("xsize").value;
		var myysize = document.getElementById("ysize").value;
		var myxname = document.getElementById("xname").value;
		var myyname = document.getElementById("yname").value;
	}

		
    //ctx.globalCompositeOperation="source-over";
    //drawing canvas below
    var cnv = document.getElementById("myCanvas");//get Canvas object
    var ctx = cnv.getContext("2d");//get corresponding CanvasRenderingContext2D object
    ctx.restore();
    ctx.restore();
    ctx.font = "20px Arial";
	
    var bgcanvas = document.getElementById("bgcanvas");
    mouse_history = [];
    var bgctx = bgcanvas.getContext("2d");

    ctx.clearRect(0, 0, cnv.width, cnv.height);
    bgctx.clearRect(0,0,bgctx.width, bgctx.height);
    drawMousePoint();

    ctx.save();
    //Draw axis
    ctx.transform(1, 0, 0, -1, x_offset, cnv.height - y_offset);
    ctx.beginPath();
    //get new scale
    scale = document.getElementById("graph_scale").value;
    //define the start-point coordinate of the straight
    ctx.moveTo(0, scale * myysize);
    //define the end-point coordinate value of the straight
    ctx.lineTo(0, 0);
    ctx.lineTo(scale * myxsize, 0);
    //print the straight along the order of coordinate
    ctx.stroke();

    //y-arrow
    //ctx.save();
    if(document.getElementById("ysize").value!=0){
		//alert('111');
		ctx.beginPath();
		ctx.moveTo(0, scale * document.getElementById("ysize").value);
		ctx.lineTo(-5.5, scale * document.getElementById("ysize").value - 11);
		ctx.lineTo(5.5, scale * document.getElementById("ysize").value - 11);
		ctx.lineTo(0, scale * document.getElementById("ysize").value);
		ctx.closePath();
		ctx.fillStyle = 'black';
		ctx.fill();
		ctx.stroke();
	} else if (isEample) {
		//alert('222');
		ctx.beginPath();
		ctx.moveTo(0, scale * myysize);
		ctx.lineTo(-5.5, scale * myysize - 11);
		ctx.lineTo(5.5, scale * myysize - 11);
		ctx.lineTo(0, scale * myysize);
		ctx.closePath();
		ctx.fillStyle = 'black';
		ctx.fill();
		ctx.stroke();
	}
    //x-arrow
    //ctx.save();
	if(document.getElementById("xsize").value!=0){
		ctx.beginPath();
		ctx.moveTo(scale * document.getElementById("xsize").value, 0);
		ctx.lineTo(scale * document.getElementById("xsize").value - 11, 5.5);
		ctx.lineTo(scale * document.getElementById("xsize").value - 11, -5.5);
		ctx.lineTo(scale * document.getElementById("xsize").value, 0);
		ctx.closePath();
		ctx.fillStyle = 'black';
		ctx.fill();
		ctx.stroke();
	} else if (isEample) {
		ctx.beginPath();
		ctx.moveTo(scale * myxsize, 0);
		ctx.lineTo(scale * myxsize - 11, 5.5);
		ctx.lineTo(scale * myxsize - 11, -5.5);
		ctx.lineTo(scale * myxsize, 0);
		ctx.closePath();
		ctx.fillStyle = 'black';
		ctx.fill();
		ctx.stroke();
	}
    //x-axis name
    ctx.save();
    ctx.translate(scale * myxsize + 10, -10);
    ctx.scale(1, -1);
    ctx.fillText(myxname, 0, 0);
    ctx.restore();
    //y axis name
    ctx.save();
    ctx.translate(-10, scale * myysize + 10);
    ctx.scale(1, -1);
    ctx.fillText(myyname, 0, 0);
    ctx.restore();
	
    for (var j = 1; j < counter_i; j++) {
        if (document.getElementById("lineshow_" + j).checked) {
            <!--Draw line on canvas in browser-->
            PrintLine(ctx, document.getElementById("a_" + j), document.getElementById("b_" + j), document.getElementById("c_" + j), document.getElementById("d_" + j), document.getElementById("linename_" + j), document.getElementById("linedash_" + j), document.getElementById("lineColor_" + j));
			if(document.getElementById("a_"+j).value!=0||document.getElementById("b_"+j).value!=0||document.getElementById("c_"+j).value!=0||document.getElementById("d_"+j).value!=0){
				<!--write tikz codes for lines-->
			lines += DrawLine(document.getElementById("a_"+j), document.getElementById("b_"+j), document.getElementById("c_"+j), document.getElementById("d_"+j), document.getElementById("linename_"+j),document.getElementById("linedash_"+j));
			}        
		}
    }
    for (var j = 1; j < counter_j; j++) {  <!--currently set to 5 since there are 5 curves-->
        if (document.getElementById("curveshow_" + j).checked) {
            <!--Draw curves on canvas in browser-->
            PrintCurve(ctx, document.getElementById("e_" + j), document.getElementById("f_" + j), document.getElementById("g_" + j), document.getElementById("h_" + j), document.getElementById("i_" + j), document.getElementById("j_" + j), document.getElementById("k_" + j), document.getElementById("l_" + j), document.getElementById("curvename_" + j), document.getElementById("curvedash_" + j), document.getElementById("curveguide_" + j), document.getElementById("curveColor_" + j));
		if(document.getElementById("e_"+j).value!=0||document.getElementById("f_"+j).value!=0||document.getElementById("g_"+j).value!=0||document.getElementById("h_"+j).value!=0||document.getElementById("i_"+j).value!=0||document.getElementById("j_"+j).value!=0||document.getElementById("k_"+j).value!=0||document.getElementById("l_"+j).value!=0){
		<!--write tikz codes for curves-->
			curves += DrawCurve(document.getElementById("e_"+j), document.getElementById("f_"+j), document.getElementById("g_"+j), document.getElementById("h_"+j),document.getElementById("i_"+j),document.getElementById("j_"+j),document.getElementById("k_"+j),document.getElementById("l_"+j) ,document.getElementById("curvename_"+j),document.getElementById("curvedash_"+j),document.getElementById("curvecolor_"+j));	
			}        
		}
    }
	for (var z = 1; z < counter_z; z++) {
        if (document.getElementById("retangularshow_" + z).checked) {
            <!--Draw line on canvas in browser-->			
            PrintRectangle(ctx, document.getElementById("r_" + z), document.getElementById("s_" + z), document.getElementById("t_" + z), document.getElementById("u_" + z), document.getElementById("retangularname_" + z), document.getElementById("retangulardash_" + z), document.getElementById("retangularColor_" + z));
		}
    }
 
	
	axis += "\\node [below left] at (0,0) {$"+document.getElementById("label_origin_name").value+"$};%Origin</br>";
	if(document.getElementById("label_x_1_name").value!=""){
	axis += "\\node [below] at ("+document.getElementById("label_x_1").value+",0) {$"+document.getElementById("label_x_1_name").value+"$}; % X-Lable 1<br>";
	}
	if(document.getElementById("label_x_2_name").value!=""){
	axis += "\\node [below] at ("+document.getElementById("label_x_2").value+",0) {$"+document.getElementById("label_x_2_name").value+"$}; % X-Lable 2<br>";                
	}
	if(document.getElementById("label_y_1_name").value!=""){
	axis += "\\node [left] at (0,"+document.getElementById("label_y_1").value+") {$"+document.getElementById("label_y_1_name").value+"$}; %Y-Lable 1<br>";
	}
	if(document.getElementById("label_y_2_name").value!=""){
	axis += "\\node [left] at (0,"+document.getElementById("label_y_2").value+") {$"+document.getElementById("label_y_2_name").value+"$}; % Y-Lable 2<br>";
	}
	document.getElementById("answer").innerHTML=axis+lines+curves+rects;
	
	
	ctx.restore();
    <!--restore initial coordinate system-->
    //drawing label beyond axis
    //draw origin
    ctx.save();
    ctx.transform(1, 0, 0, -1, x_offset * 0.3, cnv.height - y_offset * 0.3);
    ctx.scale(1, -1);
    ctx.fillText(document.getElementById("label_origin_name").value, 0, 0);
    ctx.restore();
    //draw x-axis label
    ctx.save();
    ctx.transform(1, 0, 0, -1, x_offset, cnv.height - y_offset * 0.3);
    ctx.translate(document.getElementById("label_x_1").value * scale, 0);
    ctx.scale(1, -1);
    ctx.fillText(document.getElementById("label_x_1_name").value, 0, 0);
    ctx.restore();
    ctx.save();

    ctx.transform(1, 0, 0, -1, x_offset, cnv.height - y_offset * 0.3);
    ctx.translate(document.getElementById("label_x_2").value * scale, 0);
    ctx.scale(1, -1);
    ctx.fillText(document.getElementById("label_x_2_name").value, 0, 0);
    ctx.restore();
    //draw y-axis label
    ctx.save();
    ctx.transform(1, 0, 0, -1, 0, cnv.height - y_offset);
    ctx.translate(0, document.getElementById("label_y_1").value * scale);
    ctx.scale(1, -1);
    ctx.fillText(document.getElementById("label_y_1_name").value, 0, 0);
    ctx.restore();
    ctx.save();
    ctx.transform(1, 0, 0, -1, 0, cnv.height - y_offset * 0.3);
    ctx.translate(document.getElementById("label_y_2").value * scale, 0);
    ctx.scale(1, -1);
    ctx.fillText(document.getElementById("label_y_2_name").value, 0, 0);
    ctx.restore();
	
	//draw points
	for (var j=1; j<ps_j;j++){ 
	ctx.save();
	ctx.transform(1, 0, 0, -1, 0, cnv.height-y_offset*0.3);

	ctx.translate(document.getElementById("p_"+j).value*scale,document.getElementById("q_"+j).value*scale);
	ctx.scale(1, -1);
	ctx.fillText(document.getElementById("p_name_"+j).value,0,0);
	ctx.restore();
	}
	
	
    //get mouse coordinate ******
    function writeMessage(cnv, message) {
        ctx.clearRect(0, 0, 450, 55);
        ctx.fillText(message, 180, 50);
    }

    function getMousePos(cnv, evt) {
        var rect = cnv.getBoundingClientRect();
        return {
            x: Math.round(((evt.clientX - rect.left - x_offset) / scale) * 100) / 100,
            y: Math.round(((cnv.height - (evt.clientY - rect.top) - y_offset) / scale) * 100) / 100
        };
    }

    cnv.addEventListener('mousemove', function (evt) {
        var mousePos = getMousePos(cnv, evt);
        var xValue = mousePos.x;
        var yValue = mousePos.y;
        var message = 'Mouse position: ' + xValue + ',' + yValue;
        writeMessage(cnv, message);
    }, false);
    //print points********(have not been solved)
    //get connection of two points
    if(cnv.events){
        cnv.events["mousedown"] = {};
    }
    cnv.onmousedown = function(){};
    cnv.addEventListener('mousedown', doPoint, false);
    cnv.addEventListener('mousedown', doPointL1, false);
    cnv.addEventListener('mousedown', doPointL2, false);
    cnv.addEventListener('mousedown', doPointC1, false);
    cnv.addEventListener('mousedown', doPointC2, false);
    cnv.addEventListener('mousedown', doPointC3, false);
    cnv.addEventListener('mousedown', doPointC4, false);

    //draw mouse point
    function drawMousePoint(){
        var ncv = document.getElementById("bgcanvas");
        var context = ncv.getContext("2d");
        context.clearRect(0,0,600,580);
        var pointonscreen = 4;
        if(drawingline){    //if drawline take last two point to draw
            pointonscreen = 2;
        }

        if(onlyonepoint){
            pointonscreen = 1;
        }
        for(var i = mouse_history.length - 1,j=0; j < pointonscreen&&i>=0 ;i--,j++){
            var p = mouse_history[i];
            //context.moveTo(p['x'], p['y']);
            context.beginPath();
            context.strokeStyle = "#FFFFFF";
            var vy = Math.abs(p.y*scale+y_offset-580);
            context.arc(x_offset+p.x*scale, vy,1,0,2*Math.PI,true);
            context.closePath();
            context.fill();
        }
    }

    function putMousePoints(p){
        var lastindex = mouse_history.length - 1;
        if(lastindex>=0 && mouse_history[lastindex].x == p.x && mouse_history[lastindex].y == p.y){
            return;
        }
        mouse_history[mouse_history.length] = p;
    }

    //draw individual points
    function doPointL1(evt) {
        var mousePos = getMousePos(cnv, evt);
        for (var j = 1; j < counter_i; j++) {
            if (document.getElementById("mouseDL_" + j).checked == true &&
                document.getElementById("LP1_" + j).checked == true) {
                var x0 = document.getElementById("a_" + j);
                var y0 = document.getElementById("b_" + j);
                x0.value = mousePos.x;
                y0.value = mousePos.y;
                putMousePoints({x:mousePos.x,y:mousePos.y});
                drawMousePoint();
            }
        }
    }

    function doPointL2(evt) {
        var mousePos = getMousePos(cnv, evt);
        for (var j = 1; j < counter_i; j++) {
            if (document.getElementById("LP2_" + j).checked) {
                var x0 = document.getElementById("c_" + j);
                var y0 = document.getElementById("d_" + j);
                x0.value = mousePos.x;
                y0.value = mousePos.y;
                putMousePoints({x:mousePos.x,y:mousePos.y});
                drawMousePoint();
            }
        }
    }

    function doPointC1(evt) {
        var mousePos = getMousePos(cnv, evt);
        for (var j = 1; j < counter_j; j++) {
            if (document.getElementById("CP1_" + j).checked) {
                var x0 = document.getElementById("e_" + j);
                var y0 = document.getElementById("f_" + j);
                x0.value = mousePos.x;
                y0.value = mousePos.y;
                putMousePoints({x:mousePos.x,y:mousePos.y});
                drawMousePoint();
            }
        }
    }

    function doPointC2(evt) {
        var mousePos = getMousePos(cnv, evt);
        for (var j = 1; j < counter_j; j++) {
            if (document.getElementById("CP2_" + j).checked) {
                var x0 = document.getElementById("g_" + j);
                var y0 = document.getElementById("h_" + j);
                x0.value = mousePos.x;
                y0.value = mousePos.y;
                putMousePoints({x:mousePos.x,y:mousePos.y});
                drawMousePoint();
            }
        }
    }

    function doPointC3(evt) {
        var mousePos = getMousePos(cnv, evt);
        for (var j = 1; j < counter_j; j++) {
            if (document.getElementById("CP3_" + j).checked) {
                var x0 = document.getElementById("i_" + j);
                var y0 = document.getElementById("j_" + j);
                x0.value = mousePos.x;
                y0.value = mousePos.y;
                putMousePoints({x:mousePos.x,y:mousePos.y});
                drawMousePoint();
            }
        }
    }

    function doPointC4(evt) {
        var mousePos = getMousePos(cnv, evt);
        for (var j = 1; j < counter_j; j++) {
            if (document.getElementById("CP4_" + j).checked) {
                var x0 = document.getElementById("k_" + j);
                var y0 = document.getElementById("l_" + j);
                x0.value = mousePos.x;
                y0.value = mousePos.y;
                putMousePoints({x:mousePos.x,y:mousePos.y});
                drawMousePoint();
            }
        }
    }

    //draw all points
    var points = 0;
    var dots = 0;
	var points1=0;

    function doPoint(evt) {
        var mousePos = getMousePos(cnv, evt);
		
        //for Line Points
		for (var j = 1; j < counter_i; j++) {
            if (document.getElementById("mouseDL_" + j).checked == true) {
                if (document.getElementById("lin_" + j).checked == true) {
                    if (points == 0) {
                        var x0 = document.getElementById("a_" + j);
                        var y0 = document.getElementById("b_" + j);
                        x0.value = mousePos.x;
                        y0.value = mousePos.y;
                        points = 1;
                    } else if (points == 1) {
                        var x1 = document.getElementById("c_" + j);
                        var y1 = document.getElementById("d_" + j);
                        x1.value = mousePos.x;
                        y1.value = mousePos.y;
                        points = 0;
                    }
                    putMousePoints({x:mousePos.x,y:mousePos.y});
                    drawMousePoint();
                }
            }
        }
		
		//for rectangle
        for (var j = 1; j < counter_z; j++) {
            if (document.getElementById("mouseDR_" + j).checked == true) {
                if (document.getElementById("retangularshow_" + j).checked == true) {
                    if (points1 == 0) {
                        var x0 = document.getElementById("r_" + j);
                        var y0 = document.getElementById("s_" + j);
                        x0.value = mousePos.x;
                        y0.value = mousePos.y;
                        points1 = 1;
                    } else if (points1 == 1) {
                        var x1 = document.getElementById("t_" + j);
                        var y1 = document.getElementById("u_" + j);
                        x1.value = mousePos.x;
                        y1.value = mousePos.y;
                        points1 = 0;
                    }
                    putMousePoints({x:mousePos.x,y:mousePos.y});
                    drawMousePoint();
                }
            }
        }

        //for Curve Points
        for (var j = 1; j < counter_j; j++) {
            if (document.getElementById("mouseDC_" + j).checked == true) {
                if (document.getElementById("cm_" + j).checked == true) {
                    if (dots == 0) {
                        var cx0 = document.getElementById("e_" + j);
                        var cy0 = document.getElementById("f_" + j);
                        cx0.value = mousePos.x;
                        cy0.value = mousePos.y;
                        dots = 1;
                    } else {
                        if (dots == 1) {
                            var cx1 = document.getElementById("g_" + j);
                            var cy1 = document.getElementById("h_" + j);
                            cx1.value = mousePos.x;
                            cy1.value = mousePos.y;
                            dots = 2;
                        } else {
                            if (dots == 2) {
                                var cx2 = document.getElementById("i_" + j);
                                var cy2 = document.getElementById("j_" + j);
                                cx2.value = mousePos.x;
                                cy2.value = mousePos.y;
                                dots = 3;
                            } else if (dots == 3) {
                                var cx3 = document.getElementById("k_" + j);
                                var cy3 = document.getElementById("l_" + j);
                                cx3.value = mousePos.x;
                                cy3.value = mousePos.y;
                                dots = 0;
                            }
                        }
                    }
                    putMousePoints({x:mousePos.x,y:mousePos.y});
                    drawMousePoint();
                }
            }
        }


    }
}