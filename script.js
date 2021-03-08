let rowCount = 0;
let colCount = 0;

// Adds a Row to the grid-table
function addR() {
    let table = document.getElementById('grid');
    let row = document.createElement('tr');

    for(let i = 0; i <= colCount; ++i) {
        let cell = document.createElement('td');
        row.append(cell);
    }

    table.appendChild(row);
    ++rowCount;
};

// Adds a Column to the grid-table 
function addC() {
    let table = document.getElementById('grid');

    for(const row of table.rows) {
        let cell = document.createElement('td');
        row.append(cell);
    }
    ++colCount;
};

//Remove Row 
function removeR() { 
    //let table = document.getElementById('grid');
    //let row = document.getElementsByTagName('tr');
    //console.log(row);
    document.getElementById('grid').deleteRow(rowCount-1);
    /*for(i = rowCount-1; i >= 0; i--){
        let cell = document.getElementsByTagName('td');
        //row.removeChild(cell);
    }*/
    //table.removeChild(row);
    rowCount--;
};

//Remove Col 
function removeC() { 
    document.getElementById('grid').remove();
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

