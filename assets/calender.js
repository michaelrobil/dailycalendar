var textBox = [];
var noteTime;
var entry;
var startTime = 9;
var today = new Date();
var time = today.getHours();

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
var counter = 0;
for (i = 9; i < 19; i++) {
    if (time < i) {
        $("#gray" + counter).css("background-color", "#008000");
    } else if (time == i) {
        $("#gray" + counter).css("background-color", "#ffffff");
    }
    counter++
}

$(".yellow").on("click", function(event) {
    event.preventDefault();
    var currentEvent = event.target.id;
    var eventNumber = currentEvent.charAt(currentEvent.length - 1);

    entry = $("#gray" + eventNumber).val().trim();
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