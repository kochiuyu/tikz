//AddLine create new form for drawing straight line
function AddPoints (form) {

	var label, textbox;
 
    form.appendChild(document.createElement('p'));
   //add':'
	label = document.createElement('label');
	label.appendChild(document.createTextNode('Name:'));
	textbox = document.createElement('input');
	textbox.type = 'text';
	textbox.setAttribute("Id","p_name_"+ps_j);
	textbox.setAttribute("Size",5);

    label.appendChild(textbox);
	form.appendChild(label);

	
    //add 'points1'
	label = document.createElement('label');
	label.appendChild(document.createTextNode('located at('));
	textbox = document.createElement('input');
	textbox.type = 'text';
	textbox.setAttribute("Id","p_"+ps_j);
	textbox.setAttribute("Size",5);
	
	
	label.appendChild(textbox);
	form.appendChild(label);

	
    //add ','
	label = document.createElement('label');
	label.appendChild(document.createTextNode(','));
	textbox = document.createElement('input');
	textbox.type = 'text';
	textbox.setAttribute("Id","q_"+ps_j);
	textbox.setAttribute("Size",5);


	label.appendChild(textbox);
	form.appendChild(label);

	
    //add ')'
	label = document.createElement('label');
	label.appendChild(document.createTextNode(')'));

	form.appendChild(label);
	
	

	//Add line break

	form.appendChild(document.createElement('br'));

	//Increase the counter for # of lines

	ps_j++;

}