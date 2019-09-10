// Retrieve year, date and month and store it in a variable for the URL needed for chromcast
// year
console.log(new Date().getFullYear());
const year = new Date().getFullYear();
const pad = "00";
let month = new Date().getMonth();
let day = new Date().getDate();
month = (pad+month).slice(-pad.length);
day = (pad+day).slice(-pad.length);

// Extract the value  from the "RSS 20.00 News" varaiable and remove part of the string
let Logics_20 = Homey.logic.getVariables()
    .forEach(Logics_20, Logic_20 => {
        if(Logic_20.id === '4fd5eefa-731b-4144-9998-e4e184705929'){
            console.log(Logic_20.id);
            let IdVariable=Logic_20.id;
            //print the logic
            console.log(Logic_20.value);
            console.log(Logic_20.name);

            let nos20 = Logic_20.value;
            nos20 = nos20.trim();
            nos20 = nos20.replace("https://nos.nl/b/","");
            // Combine RSS value with string needed to launch latest NOS news
            let urlnos20 = `https://download.omroep.nl/nos/content/mp4/web02/${year}/${month}/${day}/nos20/mp4_web02.mp4`;
            console.log(urlnos20);
            setTagValue("NOS2000", {type: "string", title: "NOS2000"},urlnos20);
        }
    });
return true;
