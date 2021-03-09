let rowCount = 0;
let colCount = 0;
let colorSelected;

// Adds a Row to the grid-table
function addR() {
    let table = document.getElementById('grid');
    let row = document.createElement('tr');

    for(let i = 0; i <= colCount; ++i) {
        let cell = document.createElement('td');
        cell.onclick = changeColor;
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
        cell.onclick = changeColor;
        row.append(cell);
    }
    ++colCount;
};

//Remove Row 
function removeR() { 
    document.getElementById('grid').deleteRow(rowCount-1);
    rowCount--;
};

//Remove Col 
function removeC() { 
    let table = document.getElementById('grid');
    for(const row of table.rows){
        row.getElementsByTagName('td')[colCount].remove();
    }
    colCount--;
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

//Sets color to whatever color is selected
function changeColor() {
    this.style.backgroundColor = colorSelected;
}

//sets global var for selected color
function selected() { 
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

