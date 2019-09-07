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

// Extract the value  from the "RSS Latest News" varaiable and remove part of the string
let Logics_nos_latest = await Homey.logic.getVariables()
_.forEach(Logics_nos_latest, Logic => {
if(Logic.id == '5d09387c-50c6-4f99-84a6-71a3f42c1823'){
    console.log(Logic.id);
    IdVariable=Logic.id;
    //print the logic
console.log(Logic.value);
console.log(Logic.name);

var nos_latest = Logic.value
nos_latest = nos_latest.trim()
nos_latest = nos_latest.replace("https://nos.nl/b/","");
// Combine RSS value with string needed to launch latest NOS news
urlnoslatest = "https://download.omroep.nl/nos/content/mp4/web02/" +year + "/" + month + "/" + day + "/" + nos_latest + "/mp4_web02.mp4";
console.log(urlnoslatest);
setTagValue("NOS2000", {type: "string", title: "NOS2000"},urlnoslatest);
}
});


return true;
