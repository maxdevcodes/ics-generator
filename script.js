var icsHead = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hacksw/handcal//NONSGML v1.0//EN
`;

var icsBody;

var icsFoot = `END:VCALENDAR`;


var ics;

function generateIcs(e) {
    e.preventDefault();
    var form = document.getElementById("form_generator");
    var childrenForm = form.getElementsByTagName("input");
    console.log(childrenForm);
    
    icsBody = "BEGIN:VEVENT\n";

    for (const element of childrenForm) {
        console.log("elem", element.value);
        if(element.id == "start_date") {
            icsBody += "DSTART:" + element.value.split("-").join("") + "T180000Z\n";
        }else if(element.id == "end_date") {
            icsBody += "DEND:" + element.value.split("-").join("") + "T190000Z\n";
        }
    }

    icsBody += `SUMMARY:Test\nEND:VEVENT\n`;
    ics = icsHead + icsBody + icsFoot;

    console.log("ics", ics);
    console.log("escaped", decodeURIComponent(ics));


    window.open("data:text/calendar;charset=utf8," + decodeURIComponent(ics));

}