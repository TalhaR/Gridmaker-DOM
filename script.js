//Add Row
function addR() { 
    alert("Clicked Add Row")
}

//Add Column 
function addC() {
    alert("Clicked Add Col")
}

//Remove Row 
function removeR() { 
    alert("Clicked Remove Row")
}

//Remove Col 
function removeC() { 
    alert("Clicked Remove Col")
}

//Fill Rows and Cols Uncolored
function fillU() { 
    alert("Clicked Fill All Uncolored")
}

//Fill Rows and Cols 
function fill() { 
    alert("Clicked Fill All")
}

//Clear all Rows and Cols 
function clearAll() {
    alert("Clicked Clear All")
}

//sets global var for selected color
function selected() { 
    colorSelected = document.getElementById("selectedID").nodeValue;
    console.log(colorSelected);
}

