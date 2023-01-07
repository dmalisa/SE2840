// SE284 - Winter 2020/2021
// Quiz - JavaScript Drawing
// Name(s):  YOUR NAME(S) HERE

// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

const rows = 100;
const columns = 100;
const default_color = "blue";

//list of the colors for the buttons
const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
];

 let userColor;
 let colorChanged = false;
 let erase = false;

 /*
 method sets and validates user input to change the color to one
 of their choosing
 Param - drawing: the drawing element
  */
const changeColor =(drawing) =>{
     userColor = document.getElementById("chooseColor").value;
    let letters = /^[A-Za-z]+$/;
    //makes sure the color is of type string and not empty
    if(userColor.match(letters) || userColor === " "){
        colorChanged = true;
    } else {
        alert("invalid color");
    }
}

/*
   erase color sets  erase variable to true when the erase button has been clicked
 */
const eraseColor =()=> {
   erase = true;
}

/*
The draw class contains all the draw methods and is in charge of drawing
 */
class Draw {
    constructor() {
    }
    /*Draws the color on the cell
    Param - drawing: the drawing element
           cell: the cell to draw the color on
     */
    doDraw(drawing,cell){
        //this sets the drawing color to the one entered by the user
        if (colorChanged === true){
            drawing.selectedColor = userColor;
        }
        // this sets the drawing color back to default to satisfy erasing effect
        if (erase === true){
            drawing.selectedColor = default_color;
        }
        cell.style.backgroundColor = drawing.selectedColor;

    }

   /* Initializes the control panel and adds it to the drawing
    Param - drawing: the drawing element
    */
    initControlPanel(drawing){
        const row = initRow();
        drawing.appendChild(row);
        colors.forEach((color) => {
            const button = document.createElement("button");
            button.style.backgroundColor = color;
            button.innerText = color;
            button.onclick = () => {
                drawing.selectedColor = color;
            };
            row.appendChild(button);
        });
        drawing.appendChild(row);
    }

    /* Initializes the drawing and sets mouse events
    Param - drawing: the drawing element to init
    */
    initDrawing(drawing){
        drawing.ismousedown = false;
        drawing.selectedColor = colors[0];
        drawing.onmousedown = () => {
            drawing.ismousedown = true;
        };
        drawing.onmouseup = () => {
            drawing.ismousedown = false;
        };
        this.initControlPanel(drawing);
    }

}

// Initialize creates and initializes a new row
const initRow = () => {
    const row = document.createElement("div");
    row.classList.add("row");
    return row;
};


/*
 this is the cell class that creates and initializes new cells
 Param - drawing: the drawing that contains the cells
 */
class Cell{
    initCell(drawing){
        let draw = new Draw();
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.backgroundColor = default_color;

        // Remove onclick since onmousedown handles color flip
        // cell.onclick = () => { doDraw(drawing, cell); };

        cell.onmouseenter = () => {
            if(drawing.ismousedown) {
                draw.doDraw(drawing, cell);
            }
        };
        cell.onmousedown = () => {
            draw.doDraw(drawing, cell);
        };
        return cell;
    }
}



window.onload = () => {
    const drawings = document.getElementsByClassName("drawing");

    //button invokes the change color
    //which takes in user input
    let button = document.getElementById("button");
    button.onclick = changeColor;

    // button invokes the eraseColor method which
    // allows the user to erase the color of individual cells back to the original color
    let erase = document.getElementById("erase");
    erase.style.backgroundColor= "beige";
    erase.onclick = eraseColor;

      let draw = new Draw();
      let cell = new Cell();
    // Loop through all drawings on the page
    Array.from(drawings).forEach((drawing) => {
        draw.initDrawing(drawing);

        // Add rows
        for(let i = 0; i < rows; i++) {
            const row = initRow();
            drawing.appendChild(row);

            // Create the cells and add them to the row
            for(let j = 0; j < columns; j++) {
                row.appendChild(cell.initCell(drawing));
            }
        }
    })
};