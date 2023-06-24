let div = document.createElement("div");
div.setAttribute("class","container");
let div1 = document.createElement("div");
div1.setAttribute("class","col-md-6");
let h2 = document.createElement("h2");
h2.innerHTML="Form Submission :"

/*form input*/
let firstname = lableform ("lable","for","firstname","Firstname:");
let br1 = linebraker("br");
let firstnameinputele = inputele("input","type","text","placeholder","Firstname ");
let br2 = linebraker ("br");
let br3 = linebraker ("br");

let lastnamename = lableform ("lable","for","lastname","Lastname:");
let br4 = linebraker("br");
let lastnameinputele = inputele("input","type","text","placeholder","Lastname ");
let br5 = linebraker ("br");
let br6 = linebraker ("br");

let addressline1 = lableform ("lable","for","addressline1","Address line 1:");
let br7 = linebraker("br");
let addressline1inputele = inputele("input","type","text","placeholder","Address line 1 ");
let br8 = linebraker ("br");
let br9 = linebraker ("br");

let addressline2 = lableform ("lable","for","firstname","Address line 2:");
let br10 = linebraker("br");
let addressline2inputele = inputele("input","type","text","placeholder","Address line 2 ");
let br11 = linebraker ("br");
let br12 = linebraker ("br");

let pin = lableform ("lable","for","pin","Pin:");
let br13 = linebraker("br");
let pininputele = inputele("input","type","text","placeholder","Pin");
let br14 = linebraker ("br");
let br15 = linebraker ("br");


let gender = lableform ("lable","for","gender","Gender:");
let br16 = linebraker("br");
let br17 = linebraker("br");
let gender1inputele = inputele("input","type","radio","name","gender");
let gender1 = lableform ("lable","for","gender","Male");
let gender2inputele = inputele("input","type","radio","name","gender");
let gender2 = lableform ("lable","for","gender","Female");
let br18 = linebraker ("br");
let br19 = linebraker ("br");

let choiceoffood = lableform ("lable","for","chooseoffood","Choice of food:(must choose at least 1 out of 5 option)");
let br20 = linebraker("br");
let br21 = linebraker ("br");

let choiceinputele = inputele("input","type","checkbox");
let choice = lableform ("lable","for","northindian","North indian");
let br22 = linebraker ("br");

let choiceinputele1 = inputele("input","type","checkbox");
let choice1 = lableform ("lable","for","southindian","South indian");
let br23 = linebraker ("br");

let choiceinputele2 = inputele("input","type","checkbox");
let choice2 = lableform ("lable","for","chinese","Chinese");
let br24 = linebraker ("br");

let choiceinputele3 = inputele("input","type","checkbox");
let choice3 = lableform ("lable","for","japanese","Japanese");
let br25 = linebraker ("br");

let choiceinputele4 = inputele("input","type","checkbox");
let choice4 = lableform ("lable","for","seafood","Sea food");
let br26 = linebraker ("br");
let br27 = linebraker ("br");

let state = lableform ("lable","for","state","State:");
let br28 = linebraker("br");
let stateinputele = inputele("input","type","text","placeholder","State");
let br29 = linebraker ("br");
let br30 = linebraker ("br");

let country = lableform ("lable","for","country","country:");
let br31 = linebraker("br");
let countryinputele = inputele("input","type","text","placeholder","Country");
let br32 = linebraker ("br");


let submitinputele = inputele("input","type","submit");


div1.append(h2)
div1.append(firstname,br1,firstnameinputele,br2,br3,lastnamename,br4,lastnameinputele,br5,br6,addressline1,br7,addressline1inputele,br8,br9,addressline2,br10,addressline2inputele,br11,br12,pin,br13,pininputele,br14,br15,gender,br16,br17,gender1inputele,gender1,gender2inputele,gender2,br18,br19,choiceoffood,br20,br21,choiceinputele,choice,br22,choiceinputele1,choice1,br23,choiceinputele2,choice2,br24,choiceinputele3,choice3,br25,choiceinputele4,choice4,br26,br27,state,br28,stateinputele,br29,br30,country,br31,countryinputele,br32,submitinputele);
div.append(div1);
document.body.append(div);



function lableform (tagname,attername,attervalue,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attername,attervalue);
    ele.innerHTML= content;
    return ele;
};

function linebraker (tagname){
   let ele = document.createElement(tagname)
   return ele;
};

function inputele (tagname,attername,attervalue,attername1,attervalue1){
    let ele = document.createElement(tagname);
    ele.setAttribute(attername,attervalue);
    ele.setAttribute(attername1,attervalue1);
    return ele;
};
