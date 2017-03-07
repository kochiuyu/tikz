//AddLine create new form for drawing straight line
function AddLine(form) {

    var label, textbox, rr;
    rr = 1;
    rr1 = 2;

    //add':('
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Straight Line ' + counter_i + ': ('));
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute("Id", "a_" + counter_i);
    textbox.setAttribute("Size", 5);

    label.appendChild(textbox);
    form.appendChild(label);


    //add ','
    label = document.createElement('label');
    label.appendChild(document.createTextNode(','));
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute("Id", "b_" + counter_i);
    textbox.setAttribute("Size", 5);

    label.appendChild(textbox);
    form.appendChild(label);


    //add ')--('
    label = document.createElement('label');
    label.appendChild(document.createTextNode(')--('));
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute("Id", "c_" + counter_i);
    textbox.setAttribute("Size", 5);


    label.appendChild(textbox);
    form.appendChild(label);


    //add ','
    label = document.createElement('label');
    label.appendChild(document.createTextNode(','));
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute("Id", "d_" + counter_i);
    textbox.setAttribute("Size", 5);

    label.appendChild(textbox);
    form.appendChild(label);

    //add ')'
    label = document.createElement('label');
    label.appendChild(document.createTextNode(')'));

    form.appendChild(label);

    //Show
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Show'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox'
    textbox.setAttribute("Id", "lineshow_" + counter_i);
    textbox.setAttribute("checked", true);

    label.appendChild(textbox);
    form.appendChild(label);


    //mouseDraw
    label = document.createElement('label');
    label.appendChild(document.createTextNode('mouseDraw'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox';
    textbox.name = "onlyOne";
    textbox.setAttribute("Id", "mouseDL_" + counter_i);
    textbox.setAttribute("onClick", "javascript:test(" + (counter_i - rr) + ")");

    label.appendChild(textbox);
    form.appendChild(label);


    //allPoints
    label = document.createElement('label');
    label.appendChild(document.createTextNode('allPoints'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox';
    textbox.name = 'onlyP';
    textbox.setAttribute("Id", "lin_" + counter_i);
    textbox.setAttribute("onClick", "javascript:test1(" + 3 * (counter_i - rr) + ")");

    label.appendChild(textbox);
    form.appendChild(label);


    //points1
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Point1'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox';
    textbox.name = 'onlyP';
    textbox.setAttribute("Id", "LP1_" + counter_i);
    textbox.setAttribute("onClick", "javascript:test1(" + (3 * counter_i - rr1) + ")");

    label.appendChild(textbox);
    form.appendChild(label);

    //points2
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Point2'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox';
    textbox.name = 'onlyP';
    textbox.setAttribute("Id", "LP2_" + counter_i);
    textbox.setAttribute("onClick", "javascript:test1(" + (3 * counter_i - rr) + ")");

    label.appendChild(textbox);
    form.appendChild(label);

    form.appendChild(document.createElement('br'));

    	
    // Line Name
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Name'));
    textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.setAttribute("Id", "linename_" + counter_i);
    textbox.setAttribute("Size", 5);

    label.appendChild(textbox);
    form.appendChild(label); 

    //Dash
    label = document.createElement('label');
    label.appendChild(document.createTextNode('Dash'));
    textbox = document.createElement('input');
    textbox.type = 'checkbox';
    textbox.setAttribute("Id", "linedash_" + counter_i);

    label.appendChild(textbox);
    form.appendChild(label);

    //Line Colour
    label = document.createElement('label');
    label.appendChild(document.createTextNode('lineColour:'));
    textbox = document.createElement('select');
    textbox.setAttribute("Id", "lineColor_" + counter_i);
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


    //Add line break

    form.appendChild(document.createElement('br'));

    //Increase the counter for # of lines

    counter_i++;

}