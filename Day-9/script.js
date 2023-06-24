let div = document.createElement("div");
div.style.textAlign="center";
div.style.padding="90px";

let inputdate = document.createElement("input");
inputdate.setAttribute("type","date");
inputdate.id = "dob";
inputdate.style.width="400px";
inputdate.style.height="35px";

let button = document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Display Data";
button.style.margin="10px";
button.addEventListener("click",displaydata)

let outputdiv = document.createElement("div");


div.append(inputdate,button,outputdiv);
document.body.append(div);

function displaydata(){
    let input = document.getElementById("dob").value;
    console.log(input);

    let birthdate = new Date(input);
    console.log(birthdate);

    let currentdate = new Date();
    console.log(currentdate);

    let millisecdiff = parseInt(currentdate.getTime())-parseInt(birthdate.getTime());
    console.log(`millisecond: ${millisecdiff}`);

    let seconddiff = Math.floor(millisecdiff/1000);
    console.log(`second: ${seconddiff}`);
    
    let minitesdiff = Math.floor(seconddiff/60);
    console.log(`minites: ${minitesdiff}`);

    let hoursdiff = Math.floor(minitesdiff/60);
    console.log(`hours: ${hoursdiff}`);

    let daydiff = Math.floor(hoursdiff/24);
    console.log(`day: ${daydiff}`);

    let yeardiff = currentdate.getFullYear()-birthdate.getFullYear() ;
    console.log(`year: ${yeardiff}`);

    let monthdiff = yeardiff*12+(currentdate.getMonth()-birthdate.getMonth());
    console.log(`month ${monthdiff}`);


    outputdiv.innerHTML = ` 
    Given date is ${birthdate}<br>
    year is ${yeardiff}<br>
    Month is ${monthdiff}<br>
    Day is ${daydiff}<br>
    Hours is ${hoursdiff}<br>
    Minites is ${minitesdiff}<br>
    Second is ${seconddiff}<br>
    Milli second is ${millisecdiff}<br>
    `

};