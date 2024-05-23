function welcome() {
    current_date = new Date();

    var hour = current_date.getHours();

    if (hour <= 12) {
        var phrase = "Good Morning";
    } else if (hour > 12 && hour <= 18) {
        var phrase = "Good Afternoon";
    } else {
        var phrase = "Good Evening";
    }
    return phrase;
}

function update_greetings() {
    document.getElementById("title").innerText = welcome();
}

window.onload = function() {
    update_greetings();
    setInterval(update_greetings, 60000);
}
