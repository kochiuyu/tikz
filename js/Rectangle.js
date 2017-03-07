function PrintRectangle(ctx, a, b, c, d, name, dash, lineColor) {
    ctx.save();
   	if (dash.checked) {
  	      ctx.setLineDash([5, 5]);
   	} else {
   	     ctx.setLineDash([]);
   	}
	
	var beginX = 0;
	if (parseInt(a.value)>parseInt(c.value)) {
		beginX = parseInt(c.value);
	} else {
		beginX = parseInt(a.value);
	}
	
	var beginY = 0;
	if (parseInt(b.value)>parseInt(d.value)) {
		beginY = parseInt(d.value);
	} else {
		beginY = parseInt(b.value);
	}
   
    var width = Math.abs(parseInt(c.value)-parseInt(a.value));
    var height = Math.abs(parseInt(d.value)-parseInt(b.value));

    ctx.beginPath();
    ctx.strokeStyle = lineColor.value;
	ctx.linewidth=10;
	ctx.strokeRect(scale * beginX, scale * beginY,scale*width,scale*height);
	ctx.restore();
}