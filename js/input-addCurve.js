//AddCurve create new form for drawing straight line

function AddCurve(form) {
    var label, textbox, rr, rr1, rr2, rr3;
    rr = 1;
    rr1 = 2;
    rr2 = 3;
    rr3 = 4;

    //
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Curve ' + counter_j + ': x1'));
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute("Id", "e_" + counter_j);
    textbox.setAttribute("Size", 5);

    label.appendChild(textbox);
    form.appendChild(label);


    //
    label = document.createElement('label');
    label.appendChild(document.createTextNode('y1'));
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute("Id", "f_" + counter_j);
    textbox.setAttribute("Size", 5);

    label.appendChild(textbox);
    form.appendChild(label);


    //
    label = document.createElement('label');
    label.appendChild(document.createTextNode('a1'));
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute("Id", "g_" + counter_j);
    textbox.setAttribute("Size", 5);

    label.appendChild(textbox);
    form.appendChild(label);


    //
    label = document.createElement('label');
    label.appendChild(document.createTextNode('b1'));
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute("Id", "h_" + counter_j);
    textbox.setAttribute("Size", 5);

    label.appendChild(textbox);
    form.appendChild(label);


    label = document.createElement('label');
    label.appendChild(document.createTextNode('a2'));
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute("Id", "i_" + counter_j);
    textbox.setAttribute("Size", 5);

    label.appendChild(textbox);
    form.appendChild(label);


    //
    label = document.createElement('label');
    label.appendChild(document.createTextNode('b2'));
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute("Id", "j_" + counter_j);
    textbox.setAttribute("Size", 5);

    label.appendChild(textbox);
    form.appendChild(label);

    //
    label = document.createElement('label');
    label.appendChild(document.createTextNode('x2'));
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute("Id", "k_" + counter_j);
    textbox.setAttribute("Size", 5);

    label.appendChild(textbox);
    form.appendChild(label);

    //
    label = document.createElement('label');
    label.appendChild(document.createTextNode('y2'));
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute("Id", "l_" + counter_j);
    textbox.setAttribute("Size", 5);


    label.appendChild(textbox);
    form.appendChild(label);


    //
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Name'));
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute("Id", "curvename_" + counter_j);
    textbox.setAttribute("Size", 5);


    label.appendChild(textbox);
    form.appendChild(label);


    //
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Show'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox';
    textbox.setAttribute("Id", "curveshow_" + counter_j);
    textbox.setAttribute("checked", true);

    label.appendChild(textbox);
    form.appendChild(label);


    //Dash
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Dash'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox';
    textbox.setAttribute("Id", "curvedash_" + counter_j);

    label.appendChild(textbox);
    form.appendChild(label);

    //Guide
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Guide'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox';
    textbox.setAttribute("Id", "curveguide_" + counter_j);

    label.appendChild(textbox);
    form.appendChild(label);

    //mouseDraw
    label = document.createElement('label');
    label.appendChild(document.createTextNode('mouseDraw'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox';
    textbox.name = 'onlyOne';
    textbox.setAttribute("Id", "mouseDC_" + counter_j);
    textbox.setAttribute("onClick", "javascript:test2(" + (counter_j - rr) + ")");


    label.appendChild(textbox);
    form.appendChild(label);

    //allPoints
    label = document.createElement('label');
    label.appendChild(document.createTextNode('allPoints'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox';
    textbox.name = 'onlyPC';
    textbox.setAttribute("Id", "cm_" + counter_j);
    textbox.setAttribute("onClick", "javascript:test3(" + 5 * (counter_j - rr) + ")");


    label.appendChild(textbox);
    form.appendChild(label);

    //Points1
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Point1'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox';
    textbox.name = 'onlyPC';
    textbox.setAttribute("Id", "CP1_" + counter_j);
    textbox.setAttribute("onClick", "javascript:test3(" + (5 * counter_j - rr3) + ")");


    label.appendChild(textbox);
    form.appendChild(label);

    //Points2
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Point2'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox';
    textbox.name = 'onlyPC';
    textbox.setAttribute("Id", "CP2_" + counter_j);
    textbox.setAttribute("onClick", "javascript:test3(" + (5 * counter_j - rr2) + ")");


    label.appendChild(textbox);
    form.appendChild(label);

    //Points3
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Point3'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox';
    textbox.name = 'onlyPC';
    textbox.setAttribute("Id", "CP3_" + counter_j);
    textbox.setAttribute("onClick", "javascript:test3(" + (5 * counter_j - rr1) + ")");


    label.appendChild(textbox);
    form.appendChild(label);

    //Points4
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Point4'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox';
    textbox.name = 'onlyPC';
    textbox.setAttribute("Id", "CP4_" + counter_j);
    textbox.setAttribute("onClick", "javascript:test3(" + (5 * counter_j - rr) + ")");


    label.appendChild(textbox);
    form.appendChild(label);


    //Curve	Colour
    label = document.createElement('label');
    label.appendChild(document.createTextNode('curveColor:'));
    textbox = document.createElement('select');
    textbox.setAttribute("Id", "curveColor_" + counter_j);
    textbox.options.add(new Option("black", "black"));
    textbox.options.add(new Option("yellow", "yellow"));
    textbox.options.add(new Option("red", "red"));
    textbox.options.add(new Option("blue", "blue"));
    textbox.options.add(new Option("purple", "purple"));
    textbox.options.add(new Option("brown", "brown"));
    textbox.options.add(new Option("orange", "orange"));
    textbox.options.add(new Option("green", "green"));

    label.appendChild(textbox);
    form.appendChild(label);


    //add line break

    form.appendChild(document.createElement('br'));

    //increase counter for curve by 1

    counter_j++;

}