let ArrayOfWords = [
    'Defend','Almost','Coffee','Define','Always','Column','Became','Degree','Amount','Combat','Become','Demand','Animal','Coming','Before','Depend'
    ,'Annual','Common','Deputy','Answer','Comply','Behind','Desert','Anyone','Copper','Belief','Design','Appear','County','Better','Detect','Beyond','Budget','During','Device'
];

let randomIndex = Math.floor(Math.random()*ArrayOfWords.length);
let word = ArrayOfWords[randomIndex].toLowerCase().trim();
let checkButton = document.querySelector(".check-btn");
let hintButton = document.querySelector(".hint-btn");
let hintNumber = document.querySelector(".hint-num");
let rows = document.querySelectorAll(".tips .row");
let arrayOfRows = Array.from(rows);
let firstRowInputs = document.querySelectorAll(".row-1 input");
let secondRowInputs = document.querySelectorAll(".row-2 input");
let thirdRowInputs = document.querySelectorAll(".row-3 input");
let fourthRowInputs = document.querySelectorAll(".row-4 input");
let fifthRowInputs = document.querySelectorAll(".row-5 input");
let sixRowInputs = document.querySelectorAll(".row-6 input");
let seventRowInputs = document.querySelectorAll(".row-7 input");
let eightRowInputs = document.querySelectorAll(".row-8 input");
let arrayOfInputs = [firstRowInputs,secondRowInputs,thirdRowInputs,fourthRowInputs,fifthRowInputs,sixRowInputs,seventRowInputs,eightRowInputs];
let counter = 0;
firstRowInputs.forEach(input =>{
    input.addEventListener("keydown",(e)=>{
        input.onkeyup = ()=>{
            input.nextSibling.parentElement.nextElementSibling.firstChild.nextSibling.focus();
        }
    })
})
secondRowInputs.forEach(input =>{
    input.addEventListener("keydown",(e)=>{
        input.onkeyup = ()=>{
            input.nextSibling.parentElement.nextElementSibling.firstChild.nextSibling.focus();
        }
    })
})
thirdRowInputs.forEach(input =>{
    input.addEventListener("keydown",(e)=>{
        input.onkeyup = ()=>{
            input.nextSibling.parentElement.nextElementSibling.firstChild.nextSibling.focus();
        }
    })
})
fourthRowInputs.forEach(input =>{
    input.addEventListener("keydown",(e)=>{
        input.onkeyup = ()=>{
            input.nextSibling.parentElement.nextElementSibling.firstChild.nextSibling.focus();
        }
    })
})
fifthRowInputs.forEach(input =>{
    input.addEventListener("keydown",(e)=>{
        input.onkeyup = ()=>{
            input.nextSibling.parentElement.nextElementSibling.firstChild.nextSibling.focus();
        }
    })
})
sixRowInputs.forEach(input =>{
    input.addEventListener("keydown",(e)=>{
        input.onkeyup = ()=>{
            input.nextSibling.parentElement.nextElementSibling.firstChild.nextSibling.focus();
        }
    })
})
seventRowInputs.forEach(input =>{
    input.addEventListener("keydown",(e)=>{
        input.onkeyup = ()=>{
            input.nextSibling.parentElement.nextElementSibling.firstChild.nextSibling.focus();
        }
    })
})
eightRowInputs.forEach(input =>{
    input.addEventListener("keydown",(e)=>{
        input.onkeyup = ()=>{
            input.nextSibling.parentElement.nextElementSibling.firstChild.nextSibling.focus();
        }
    })
})
//disabled all rows
for(let i= 0; i < 6; i++){
    secondRowInputs[i].disabled = true;
    secondRowInputs[i].disabled = true;
    thirdRowInputs[i].disabled = true;
    fourthRowInputs[i].disabled = true;
    fifthRowInputs[i].disabled = true;
    sixRowInputs[i].disabled = true;
    seventRowInputs[i].disabled = true;
    eightRowInputs[i].disabled = true;
}
//check button
checkButton.addEventListener("click",(e)=>{
    //disabled button when finish
    if (arrayOfRows.length == 1) {
        checkButton.disabled = true;
    }
    //change color of try word 
    arrayOfRows[0].firstElementChild.firstElementChild.firstElementChild.classList.remove("active");
    const element = arrayOfRows[0].firstElementChild.firstElementChild;
    element.style.color = "var(--unactive-text)";
    //change color of background bassed on letter
    if (arrayOfRows[0].classList.contains("active") && arrayOfRows.length <= 8 ) {
        for (let i = 0; i < 6; i++) {
            let regex = new RegExp(arrayOfInputs[0][i].value);
            if (arrayOfInputs[0][i].value=="") {
                arrayOfInputs[0][i].style.background = "#0000006e";
            }
            if (arrayOfInputs[0][i].value !== word[i] && !regex.test(word)) {
                arrayOfInputs[0][i].style.background = "#0000006e";
            }
            if (arrayOfInputs[0][i].value !== word[i] && regex.test(word) && arrayOfInputs[0][i].value !== "") {
                arrayOfInputs[0][i].style.background = "#0096887a";
                console.log('done');
            }
            if (arrayOfInputs[0][i].value === word[i]) {
                arrayOfInputs[0][i].style.background = "#f57c00b0";
            }
        }

    }
    //change row color
    if(arrayOfRows.length >= 1 ){
        const element = arrayOfRows[0].firstChild.nextSibling.firstChild.nextSibling;
        element.style.color = "var(--unactive-text)"
        arrayOfRows[0].classList.remove("active");
        arrayOfRows.shift();
        arrayOfRows[0].classList.add("active");
    }else{
        return false;
        
    }
    //disabled unactive inputs
    if (arrayOfRows[0].classList.contains("active")) {
        const element = arrayOfRows[0].firstChild.nextSibling.firstChild.nextSibling;
        element.style.color = "var(--black-dark)";
        arrayOfInputs.shift();
        for (let i = 0; i < 6; i++) {
            arrayOfInputs[0][i].disabled = false;
        }
        
    }
})
// hint button
hintButton.addEventListener("click",(event)=>{
    if (counter==2) {
        hintButton.disabled = true;
    }
    arrayOfInputs[0][counter].value = word[counter];
    hintNumber.innerHTML-=1;
    counter+=1;
})