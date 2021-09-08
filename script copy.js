//INSPECTORS
let eventit = false; //check if the button is clicked after load or not
let series = []; //storage of the series

//STATISTICS VARiables
let catcall = ""; //help in snatch the catalog's content [litteraly, "content"! 😒]
let sr = 1;
var ismade;
var supari;
var was_delete;
var variant_proto; //This variable will contain the Colour expected to occur in the Series
var variant; //This will contain the value of "variant_proto", in an uppercase(Capitalized) FORMAT [Don't take it for being Lame, every Code on the Glasses will be CAPITALIZED]
var gotit; //Check if the [OK] Button is clicked for the Alarm
var ispassed; //Will contain the parameter that, "if the glass is passed or not - yes/no"
var id_manage = 1; //Increament to give a shit about the "sleep_well"; [See the function "generatetable"]

//TABLE BUILDER [are tables also built by any kinda builder 🤨];
var tbl = document.createElement("table"); //create the table
tbl.setAttribute("id", "glass_data");

//TABLE Operators
var tblBody = document.createElement("tbody"); //create the table body
tblBody.setAttribute("id", "belly");
//SH*T!! - hook in last hours, while killing the design [highly CONTAGIOUS! 👿]
var gravity = document.getElementsByTagName("body"); // [real heck 🤬], it would bring the identity of the body tag
var tranceimg = "pause";



//work when the page loads
function setting() {
    evenit = false;
    headup();
    //HELL-LANDED [HIGHLY CONTAGIOUS, for Reals : "right now"]
    //const export_button = document.getElementById('butt');export_button.addEventListener('click', () => {html_table_to_excel('xlsx');});
}

//make 'em, lemme me push the button 🙄
function record_tap() {
    var anime = document.getElementById("record_photo");
    if (tranceimg == "pause") {
        anime.src = "assets/animated partitions/player/record button - switch (pause - play).gif";
        setTimeout(function() {
            anime.src = "assets/animated partitions/player/record button - play.gif";
            tranceimg = "play";
        }, 500);
    } else if (tranceimg == "play") {
        anime.src = "assets/animated partitions/waiter/record button - switch (play - pause).gif";
        setTimeout(function() {
            anime.src = "assets/animated partitions/waiter/record button - pause.gif";
            tranceimg = "pause";
        }, 500);
    }
    if (eventit == false) {
        console.log("conditioned");
        variant_proto = prompt("Please,\nEnter the Intended Variant...");
        variant = variant_proto.toUpperCase();
        console.log("Variant: " + variant);
        eventit = true;
        ismade = false;
        supari = false;
        if (was_delete == true) {
            headup();
            var mund = document.getElementById("forer");
            mund.style.display = "none";
        }
    } else if (eventit == true) {
        console.log("unconditioned");
        eventit = false;
        terminator();
    }
    //start_series();
}

//initialize the thing
let scanner = new Instascan.Scanner({
    video: document.getElementById('preview'),
    mirror: true
});

scanner.addListener('scan', function(content) {
    console.log(content);
    if (eventit == true) {
        catcall = content;
        alert(content);
        series.push(content);
        console.log(series);
        if (content != variant) {
            buzzer(11000);
            ispassed = "No";
        } else if (content == variant) {
            ispassed = "Yes";
        }
        document.getElementById("yesbody").style.overflow = "scroll";
        generatetable();
        sr++;
        var topthing = document.getElementById("forer");
        topthing.style.display = "revert";
    } else if (eventit == false) {
        alert("Please, start the scanning series!");
        console.log("hell! 😡 😑 👿");
    }
});

Instascan.Camera.getCameras().then(function(cameras) {
    if (cameras.length > 0) {
        scanner.start(cameras[0]);
    } else {
        console.error('No cameras found.');
    }
}).catch(function(e) {
    console.error(e);
});

//ALL THE FUNCTIONS [on the DECK]

function headup() {

    //TABLE Operators
    var tblHead = document.createElement("thead"); //create the table head
    //GIVE SOME PERSONALITY TO THE HEADINGS
    tblHead.setAttribute("id", "forer");
    var headrow = document.createElement("tr"); //CREATE THE ROW


    //CREATE the 1st heading - "S. No"
    var head = document.createElement("td");
    var headText = document.createTextNode("S. No");
    head.appendChild(headText);
    headrow.appendChild(head);
    head.setAttribute("id", "shorten");

    //CREATE the 2nd heading - "GLASS Name"
    var head = document.createElement("td");
    var headText = document.createTextNode("GLASS Name");
    head.appendChild(headText);
    headrow.appendChild(head);
    head.setAttribute("id", "camel");

    //CREATE the 3rd heading - "Result (isPassed)"
    var head = document.createElement("td");
    var neckbreak = "\n"; //for a new line, use the text "\n"
    var headText = document.createTextNode("Result [Is Passed?]"); //work on the neckbreak later [sara bakheda time waste kardega 🤬] 
    head.appendChild(headText);
    headrow.appendChild(head);
    head.setAttribute("id", "camel");

    //CREATE the 4th heading - "Time"
    var head = document.createElement("td");
    //Provide an option to the "User" - Switch in 24 or 12-hour FORMAT for "TIME" In REPORT; HIGHLY CONTAGIOUS 😱
    var headText = document.createTextNode("Time");
    //var changeFORM = document.createElement("button");changeFORM.setAttribute("id", "deformer");changeFORM.setAttribute("onclick", "deform");
    head.appendChild(headText);
    //head.appendChild(changeFORM);
    headrow.appendChild(head);

    //CREATE the 5th heading - "Date"
    var head = document.createElement("td");
    var headText = document.createTextNode("Date");
    head.appendChild(headText);
    headrow.appendChild(head);

    //Stuff the table with all the HEADINGS
    tblHead.appendChild(headrow);
    tbl.appendChild(tblHead);
}

function generatetable() {
    //HIGHLY CONTAGIOUS !!!!!!!!!!!!!!
    //make_tribute();


    //bring the residence of the table
    var bodyback = document.getElementsByTagName("center")[0];

    //variables

    if (supari == true) {
        hours = "";
        minutes = "";
        sec = "";
        ease = "";
        date = "";
    } else if (supari == false) {

        //TIME:AND.DATE
        var ease = new Date(); //ease with roots of variables 😁
        var date = ease.getDate() + '-' + (ease.getMonth() + 1) + '-' + ease.getFullYear();

        //Call the time in 24-hour :FORMAT:
        //var time = ease.getHours() + ":" + ease.getMinutes() + "." + ease.getSeconds();

        //Call the time in 12-hour :FORMAT: [along with 'PM' & 'AM']
        var hours = ease.getHours();
        var minutes = ease.getMinutes();
        var sec = ease.getSeconds();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        if (sec <= 9) {
            sec = "0" + sec;
        }
        var time12 = hours + ':' + minutes + "." + sec + ' ' + ampm;
    }

    //check if the button is clicked or not
    if (eventit == true) {

        //START WITH THE STATISTICS 😎
        //create the row
        var row = document.createElement("tr");
        row.setAttribute("id", "sleep_well" + id_manage);
        console.log(id_manage);

        //first column, with the serial number
        var cell = document.createElement("td");
        var cellText = document.createTextNode(sr + ".");
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.setAttribute("id", "shorten");

        //second column, with the "content" number
        var cell = document.createElement("td");
        var cellText = document.createTextNode(catcall);
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.setAttribute("id", "camel");

        //third column, with the value of passed as "yes/no"
        var cell = document.createElement("td");
        var cellText = document.createTextNode(ispassed);
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.setAttribute("id", "camel");

        //fourth column, with the time at which the glass was scanned
        var cell = document.createElement("td");
        var cellText = document.createTextNode(time12);
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.setAttribute("id", "camel")

        //fifth column, with the date at which the glass was scanned
        var cell = document.createElement("td");
        var cellText = document.createTextNode(date);
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.setAttribute("id", "camel");


        //Stuff the table with all the CELLS
        tblBody.appendChild(row);
        tbl.appendChild(tblBody);

        //GENERATE REPORT - Button [prevent another button from created];
        if (ismade == false) {
            var btngt = document.createElement("button");
            //give the id to button [then: style it in the CSS]
            btngt.setAttribute("id", "butt");
            btngt.setAttribute("onclick", "exceler(xlsx);");

            //STUFF THE BODY [<center> tag] WITH THE TABLE
            bodyback.appendChild(tbl);
            bodyback.appendChild(btngt);

            document.getElementById("butt").innerHTML = "GENERATE REPORT";
            ismade = true;
        }
        id_manage++;
    }
}

//SERIES ["BEEP" function]go
function buzzer(ms) {

    var siren = document.getElementById("musician");

    window.alert = function(al, $) {
        return function(msg) {
            al(msg);
            $(window).trigger("okbuttonclicked");
        };
    }(window.alert, window.jQuery);



    $(window).on("okbuttonclicked", function() {
        gotit = true;
    });

    alert("Oops!\nThe Glass doesn't match the expected Variant-type...");

    while (gotit == false) {
        navigator.vibrate(ms);
        siren.play();
    }
}

//GENERATE REPORT 😎
function html_table_to_excel(type) {
    var data = document.getElementsByTagName("table");

    var file = XLSX.utils.table_to_book(data, { sheet: "sheet1" });

    XLSX.write(file, { bookType: type, bookSST: true, type: 'base64' });

    XLSX.writeFile(file, 'file.' + type);
}


function generate(tableID) {
    var downLink;
    var dataType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");

    filename = "Report.xls"; //ask to Papa, that how will the employees want it to be named [or provide the user with an input, and then name the file]
    var downLink = document.createElement("a");
    document.body.appendChild(downLink);

    if (navigator.mySaveOrOpenBlob) {
        var blob = new Blob(["\ufeff", 'tableHTML'], { type: dataType });
        navigator.mySaveOrOpenBlob(blob, filename);
    } else {
        downLink.href = 'data' + dataType + 'a' + tableHTML;
        downLink.download = filename;
        downLink.click;
    }
}

function terminator() {
    if (catcall != "") {
        var button_to_delete = document.getElementById("butt");
        var mund = document.getElementById("forer");
        var tond = document.getElementById("belly");
        button_to_delete.remove();
        mund.parentNode.removeChild(mund);
        for (var inc; inc < id_manage; inc++) {
            var eachrow = "sleep_well" + inc;
            var lazy = document.getElementById(eachrow);
            lazy.parentNode.removeChild(lazy);
        }
        document.getElementById("yesbody").style.overflow = "hidden";
        sr = 1;
        catcall = "";
        supari = true;
        was_delete = true;
    }
}


//////////////////I would have used this to get rid of the wicked scroll [da heck, U CANT TOUCH THIS!; "highly contagious 😈"]/////////////
//function make_tribute() {  gravity.setAttribute("id", "nobody");}