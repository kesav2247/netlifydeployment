// let p = document.createElement("p")
// p.innerHTML = "This is paragraph";

// document.body.append(p)

// for(let i = 0;i<20;i++){
//     let p = document.createElement("p");
//     p.innerHTML = "This is paragraph";
//     p.style.background = "green"
//     document.body.append(p)
// }
// let div = document.createElement("div");
// div.innerHTML = "This is div";
// div.style.background = "green"
// document.body.append(div)
// let div = document.createElement('div');
// div.innerHTML = "This is diiv";
// // div.style.background = "green"
// div.setAttribute("class","main")


// document.body.append(div);

// let parent = document.createElement("div");
// let child = document.createElement("div");
// child.innerHTML = "this is div";
// parent.append(child);
// document.body.append(parent)

let container = document.createElement("div");
container.setAttribute("class","container");
let row = document.createElement("div");
row.setAttribute("class","row");
let col = document.createElement("div");
col.setAttribute("class","col");
row.append(col);
container.append(row);
document.body.append(container);
function formdata (){
    let firstname = document.getElementById("firstname").value
    console.log(firstname)
    let middlename = document.getElementById("middlename").value
    console.log(middlename)
    let lastname = document.getElementById("lastname").value
    console.log(lastname)
    let email = document.getElementById("email").value
    console.log(email)
}
