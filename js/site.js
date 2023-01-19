//controller function
//get the values from the page 

function getValues() {
    //get values from the page
    let buzzValue = document.getElementById("buzzValue").value;
    let fizzValue = document.getElementById("fizzValue").value;

    //parse into integers
    buzzValue = parseInt(buzzValue);
    fizzValue = parseInt(fizzValue);

    //check that inputs are integers
    if(Number.isInteger(buzzValue) && Number.isInteger(fizzValue)) {

        //fizzbuzz the values 
        let values = fizzBuzz(fizzValue, buzzValue);

        //display the values 
        displayValues(values);

    } else {
        alert("You must enter integers");
    }
}

//produce the numbers, replacing with fizz, buzz, and fizzbuzz when needed
function fizzBuzz(fizzValue, buzzValue) {
    let values = [];

    for(let i = 1; i <= 100; i++){
         if((i % fizzValue == 0) && (i % buzzValue == 0)) {
            values.push("FizzBuzz");
        } else if(i % fizzValue == 0) {
            values.push("Fizz")
        } else if(i % buzzValue == 0) {
            values.push("Buzz")
        } else {
            values.push(i);
        }
    }

    return values;
}

function fizzBuzzB(fizzValue, buzzValue) {
    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100; i++) {
       
        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0; 

        switch(true) {
            case Fizz && Buzz: {
                returnArray.push("FizzBuzz");
                break;
            }
            case Fizz: {
                returnArray.push("Fizz");
                break;
            }
            case Buzz: {
                returnArray.push("Buzz");
                break;
            }
            default: {
                returnArray.push(i);
                break;
            }
        }
        
    }

    return returnArray;
}

function fizzBuzzC(fizzValue, buzzValue){
    let returnArray = [];

    for(let i = 1; i <=100; i++){

        let value = ((i % fizzValue == 0 ? "Fizz" : "") + (i % buzzValue == 0 ? "Buzz" : "") || i);
        returnArray.push(value);
    }

    return returnArray;
}

//display the values from fizzbuzz
function displayValues(values) {


    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //add all the rows to the table 
    tableBody.innerHTML = "";

    for (let index = 0; index < values.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        //grab the tds and put them in the array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(values[index]);
        rowCols[0].textContent = values[index];

        rowCols[1].classList.add(values[index+1]);
        rowCols[1].textContent = values[index+1];

        rowCols[2].classList.add(values[index+2]);
        rowCols[2].textContent = values[index+2];

        rowCols[3].classList.add(values[index+3]);
        rowCols[3].textContent = values[index+3];

        rowCols[4].classList.add(values[index+4]);
        rowCols[4].textContent = values[index+4];
        
        tableBody.appendChild(tableRow);
        
    }
}