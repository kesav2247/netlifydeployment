function lablecreate (tagname,attername,attrvalue,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attername,attrvalue);
    ele.innerHTML=content;
    return ele;
}

function linebreakers(tagname) {
    let ele = document.createElement(tagname);
    return ele;
}
function inputele(tagname, attername, attrvalue, attername1, attrvalue1) {
    let ele = document.createElement(tagname);
    ele.setAttribute(attername, attrvalue);
    ele.setAttribute(attername1, attrvalue1);
    return ele;
}

let firstname = lablecreate("lable","for","firstname","Firstname");
let br1 = linebreakers("br");
let firstnameinputele = inputele("input","type","firstmame","id","firstname");
let br2 = linebreakers("br");
// document.body.append(firstname,br1,firstnameinputele,br2);

let middlename = lablecreate("lable","for","midddlename","Middlename");
let br3 = linebreakers("br");
let middlenameinputele = inputele("input","type","middlename","id","middlenamename");
let br4 = linebreakers("br");
// document.body.append(middlename,br3,middlenameinputele,br4);

let lasttname = lablecreate("lable","for","lastname","Lastname");
let br5 = linebreakers("br");
let lastnameinputele = inputele("input","type","lastname","id","lastname");
let br6 = linebreakers("br");
// document.body.append(lasttname,br5,lastnameinputele,br6);

let email = lablecreate("lable","for","email","Email");
let br7 = linebreakers("br");
let emailinputele = inputele("input","type","email","id","email");
let br8 = linebreakers("br");
// document.body.append(email,br7,emailinputele,br8);

let password = lablecreate("lable","for","passwoed","Password");
let br9 = linebreakers("br");
let passwordinputele = inputele("input","type","password","id","password");
let br10 = linebreakers("br");
document.body.append(firstname,br1,firstnameinputele,br2,middlename,br3,middlenameinputele,br4,lasttname,br5,lastnameinputele,br6,email,br7,emailinputele,br8,password,br9,passwordinputele,br10);