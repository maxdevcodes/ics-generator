// Set common header and foot for the file
var icsHead = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hacksw/handcal//NONSGML v1.0//EN
`;
var icsFoot = "END:VCALENDAR";

// Initialize body variable for events concatenation
var icsBody = "";

// Generates a formated calendar event (VEVENT)
function generateIcs(e) {
    e.preventDefault();
    
    icsBody += "BEGIN:VEVENT\n";

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let startDate = document.getElementById("start_date").value.split("-").join("");
    let startTime = document.getElementById("start_time").value.split(":").join("");
    let endDate = document.getElementById("end_date").value.split("-").join("");
    let endTime = document.getElementById("end_time").value.split(":").join("");

    icsBody += "SUMMARY:" + title + "\n";
    icsBody += "DESCRIPTION:" + description + "\n";
    icsBody += "DTSART:" + startDate;
    icsBody += "T" + startTime + "00\n";
    icsBody += "DTEND:" + endDate;
    icsBody += "T" + endTime + "00\n";

    icsBody += "END:VEVENT\n";

    notifyAddition();
}

// Creates a file and immediately downloads in the browser
function downloadFile() {
    let ics = icsHead + icsBody + icsFoot;

    const blob = new File([ics], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "event.ics";
    link.click();

}

function notifyAddition() {
    var msg = "Added event";

    const modal = document.createElement("div");
    modal.classList.add('modal');
    modal.innerHTML = `
        <p>${msg}</p>
        <button type="button" class="btn" id="close-modal" onclick="closeModal(event)">Close</button>
    `;

    document.querySelector("body").appendChild(modal);
}

function closeModal(e) {
    document.querySelector(`#${e.target.id}`).parentElement.remove();
}