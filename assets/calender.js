var textBox = [];
var noteTime;
var entry;
var startTime = 9;
var today = new Date();
var time = today.getHours();
var currentDate;
// bring the current date to the front screen
currentDate = $("#currentDay").text(today);
//create the table container, rows, columns and add them in right order
var container = $('<div class="blue">').attr("id", "blue");
for (i = 0; i < 10; i++) {
    var row = $('<div class="green">').attr("id", "green" + i).text(".");
    var columnRed = $('<div class="red">').attr("id", "red" + i).text(9 + i + ":00");
    var columnGray = $('<input class="gray">' + '</input>').attr("id", "gray" + [i]);
    var columnYellow = $('<button>' + "Save" + '</button>').attr("class", "yellow").attr("id", "save" + i);
    container.append(row);
    row.append(columnRed, columnGray, columnYellow);
}
$('body').append(container);
//styling the input field depending on the current time
var counter = 0;
for (i = 9; i < 19; i++) {
    if (time < i) {
        $("#gray" + counter).css("background-color", "#008000");
    } else if (time == i) {
        $("#gray" + counter).css("background-color", "#ffffff");
        $("#red" + counter).css("animation", "blinkingText 0.9s infinite");
        $("#save" + counter).css("animation", "blinkingText 0.9s infinite");
    }
    counter++
}
//add event to the save button
$(".yellow").on("click", function(event) {
    event.preventDefault();
    var currentEvent = event.target.id; // store the btn id
    var eventNumber = currentEvent.charAt(currentEvent.length - 1); //cut the btn id and store it
    //assign the entry to inpiut field id and add the btn id
    entry = $("#gray" + eventNumber).val().trim();
    $("#gray" + eventNumber).text(entry).css("text-align", "left").css("font-size", "10px");
    //add the entry to the local storage with id
    noteTime = time;
    var existingEntries = JSON.parse(localStorage.getItem(event.target.id));
    if (existingEntries == null) { existingEntries = []; }
    var noteTime;
    var note = {
        "time": noteTime,
        "text": entry
    };
    localStorage.setItem("entry", JSON.stringify(note));
    existingEntries.push(note);
    localStorage.setItem(event.target.id, JSON.stringify(existingEntries));

});
$(document).on("click");