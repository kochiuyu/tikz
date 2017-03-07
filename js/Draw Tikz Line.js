//Create Tikz Straight Line

function DrawLine(a, b, c, d, name, dash) {
    var line = "\\draw";
    if (dash.checked) {
        line += "[dashed] ";
    }
    return line += "(" + a.value + "," + b.value + ")--(" + c.value + "," + d.value + ") node[right]{$" + name.value + "$};<br>";
}


//Creat Tikz Curve
function DrawCurve(e, f, g, h, i, j, k, l, name, dash) {
    var line = "\\draw";
    if (dash.checked) {
        line += "[dashed] ";
    }
    return line += "(" + e.value + "," + f.value + ") ..controls (" + g.value + "," + h.value + ") and (" + i.value + "," + j.value + ") .. (" + k.value + "," + l.value + ") node[right]{$" + name.value + "$};<br>";
}

