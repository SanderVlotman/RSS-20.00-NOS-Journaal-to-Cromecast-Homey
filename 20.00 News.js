// Retrieve year, date and month and store it in a variable for the URL needed for chromcast
// year
console.log(new Date().getFullYear());
var year = (new Date().getFullYear());
//month with an if/else statement to append an "0" if the value is smaller then 10 as the URL expects 2 numers like 01 instead of 1
if((new Date().getMonth()+1)<10){
    console.log("0"+(new Date().getMonth()+1));
    var month = ("0"+(new Date().getMonth()+1));
}
else{(new Date().getMonth()+1);
var month = ((new Date().getMonth()+1))};
//day  with an if/else statement to append an "0" if the value is smaller then 10 as the URL expects 2 numers like 01 instead of 1
if(new Date().getDate()<10){
    console.log("0"+(new Date().getDate()));
    var day = ("0"+(new Date().getDate()));
}
else{(new Date().getMonth()+1);
    var day = ((new Date().getDate()))};


// Extract the value  from the "RSS 20.00 News" varaiable and remove part of the string
let Logics_20 = await Homey.logic.getVariables()
_.forEach(Logics_20, Logic_20 => {
if(Logic_20.id == '4fd5eefa-731b-4144-9998-e4e184705929'){
    console.log(Logic_20.id);
    IdVariable=Logic_20.id;
    //print the logic
console.log(Logic_20.value);
console.log(Logic_20.name);

var nos20 = Logic_20.value
nos20 = nos20.trim()
nos20 = nos20.replace("https://nos.nl/b/","");
// Combine RSS value with string needed to launch latest NOS news
urlnos20 = "https://download.omroep.nl/nos/content/mp4/web02/" +year + "/" + month + "/" + day + "/" + nos20 + "/mp4_web02.mp4";
console.log(urlnos20);
setTagValue("NOS2000", {type: "string", title: "NOS2000"},urlnos20);
}
}
)
return true;

