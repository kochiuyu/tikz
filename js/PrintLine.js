//draw the straight line on the canvas on the browser

function PrintLine(ctx, a, b, c, d, name, dash, lineColor) {
    ctx.save();
    if (dash.checked) {
        ctx.setLineDash([5, 5]);
    } else {
        ctx.setLineDash([]);
    }
    ctx.beginPath();
    ctx.strokeStyle = lineColor.value;
    ctx.moveTo(scale * a.value, scale * b.value);
    ctx.lineTo(scale * c.value, scale * d.value);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
    ctx.save();
    ctx.translate(scale * c.value + 10, scale * d.value - 5);
    ctx.scale(1, -1);
    ctx.fillText(name.value, 0, 0);
    ctx.restore();
}