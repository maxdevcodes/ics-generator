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
    var childrenForm = form.getElementsByClassName("input");
    console.log(childrenForm);
    
    icsBody = "BEGIN:VEVENT\n";

    for (const element of childrenForm) {
        console.log(element.id, element.value);
        if(element.id == "title") {
            icsBody += "SUMMARY:" + element.value + "\n";
        }else if(element.id == "description") {
            icsBody += "DESCRIPTION:" + element.value + "\n";
        }else if(element.id == "start_date") {
            icsBody += "DTSTART:" + element.value.split("-").join("");
        }else if(element.id == "start_time") {
            icsBody += "T" + element.value.split(":").join("") + "00\n";
        }else if(element.id == "end_date") {
            icsBody += "DTEND:" + element.value.split("-").join("") + "T190000\n";
        }
    }

    icsBody += `END:VEVENT\n`;
    ics = icsHead + icsBody + icsFoot;


    window.open("data:text/calendar;charset=utf8," + encodeURIComponent(ics));

}